import { Options } from 'request-promise';
import request = require('request-promise');
import cheerio = require('cheerio');
import puppeteer = require('puppeteer');
import {noticia,noticiaSchema} from '../models/NoticiaModel';
import axios from 'axios';

interface noticiaPreview {
    titulo: string,
    url: string
}

class ScraperPagina7 {
    URL: string = `http://www.paginasiete.bo/archivo/2019/8/11/`;
    OPTIONS: Options = <Options>{
        uri: this.URL,
        encoding: 'latin1'
    }
    NOTICIAS_PREVIEW: noticiaPreview[] = [];

    constructor() { }
    async ObtenerURLdesdeHemeroteca() {
        try {
            //const html = await request.get(this.OPTIONS);
            const browser = await puppeteer.launch({ headless: false });
            const page = await browser.newPage();
            page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246');
            await page.goto(this.URL);
            await page.waitForSelector(".row");
            const html = await page.evaluate(() => document.body.innerHTML);
            const $ = await cheerio.load(html);
            await $('div.archivo>ul>li').each((index, element) => {
                let noticiaPre: noticiaPreview = <noticiaPreview>{
                    titulo: $(element).find('a').text(),
                    url: $(element).find('a').attr('href')
                }
                this.NOTICIAS_PREVIEW.push(noticiaPre);
                
            });
            await browser.close();
        } catch (error) {
            console.log(error);
        }
    }
    async ScrapearCadaNoticia(){
        const ArrayNoticias = this.NOTICIAS_PREVIEW;
        for (let i = 0; i < ArrayNoticias.length; i++) {
            let noticiaActual:noticiaPreview = ArrayNoticias[i];

            const browser = await puppeteer.launch({ headless: true });
            const page = await browser.newPage();
            page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246');
            await page.goto('http://paginasiete.bo/'+noticiaActual.url);
            await page.waitForSelector("article");
            const html = await page.evaluate(() => document.body.innerHTML);
            //const html = await request.get({ url: 'http://paginasiete.bo'+noticiaActual.url,encoding:null});
           
            const $ = await cheerio.load(html);
            //Obtencion Data

            let cuerpo = "";
            let urlFoto = "";
            $('div.cuerpo-nota>p').each((index,elemnt)=>{
                cuerpo += `${$(elemnt).text()} \n`;
            });
            let foto = $('figure>a').attr('href');
            if(foto === undefined){
                urlFoto = "http://localhost:3000/defecto/defecto.jpg";
            }else urlFoto = 'http:paginasiete.bo'+foto;


            
            let noticiaCompleta:noticia = <noticia>{
                titulo: noticiaActual.titulo,
                url: 'http://paginasiete.bo/'+noticiaActual.url,
                cuerpo: cuerpo,
                fuente: 'PAGINA 7',
                etiquetado: false,
                fecha: '08/08/2919',
                foto: urlFoto


            }
            browser.close();
            
            const noticia = new noticiaSchema(noticiaCompleta);
            const noticiaExiste = await noticiaSchema.find({titulo:noticiaCompleta.titulo})
            if(noticiaExiste.length==0){
                if(noticia.save()){
                    console.log(`noticia Nº ${i+1} guardada`);
                }
            }
            

            
        }
    }
}
export default ScraperPagina7;


