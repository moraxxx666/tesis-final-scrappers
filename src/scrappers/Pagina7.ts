import { Options } from 'request-promise';
import cheerio = require('cheerio');
import puppeteer = require('puppeteer');
import { noticia, noticiaSchema } from '../models/NoticiaModel';

import descargaImagen from '../lib/DescargaImagen';
const formatDate = require('date-format');

interface noticiaPreview {
    titulo: string,
    url: string
}

class ScraperPagina7 {
    URL: string = ``;
    FECHA: string = '';
    URL_BASE: string = `http://paginasiete.bo`;
    OPTIONS: Options = <Options>{
        uri: this.URL,
        encoding: 'latin1'
    }
    NOTICIAS_PREVIEW: noticiaPreview[] = [];

    constructor(fecha: Date) {
        this.FECHA = formatDate('dd-MM-yyyy', fecha);
        this.URL = `${this.URL_BASE}/archivo/${fecha.getFullYear()}/${fecha.getMonth() + 1}/${fecha.getDate()}`;
    }
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
    async ScrapearCadaNoticia() {
        const ArrayNoticias = this.NOTICIAS_PREVIEW;
        for (let i = 0; i < 4; i++) {
            let noticiaActual: noticiaPreview = ArrayNoticias[i];

            const browser = await puppeteer.launch({ headless: true });
            const page = await browser.newPage();
            page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246');
            await page.goto(`${this.URL_BASE}/${noticiaActual.url}`);
            await page.waitForSelector("article");
            const html = await page.evaluate(() => document.body.innerHTML);
            //const html = await request.get({ url: 'http://paginasiete.bo'+noticiaActual.url,encoding:null});

            const $ = await cheerio.load(html);
            //Obtencion Data

            let cuerpo = "";
            let urlFoto = "";
            $('div.cuerpo-nota>p').each((index, elemnt) => {
                cuerpo += `${$(elemnt).text()} \n`;
            });
            let cuerpo2 = cuerpo.replace(/"/g,"'");
            let foto = $('figure>a').attr('href');
            if (foto === undefined) {
                urlFoto = `${process.env.URI_BACKEND_PUBLIC}/defecto/defecto.jpg`;
            } else {
                const ImagenDescargada = await descargaImagen(`${this.URL_BASE}${foto}`, '../../');
                urlFoto = `${process.env.URI_BACKEND_PUBLIC}/pagina7/${ImagenDescargada}`;

            }
            let tituloFormateado = noticiaActual.titulo.replace(/"/g,"'");



            let noticiaCompleta: noticia = <noticia>{
                titulo: tituloFormateado,
                url: `${this.URL_BASE}${noticiaActual.url}`,
                cuerpo: cuerpo2,
                fuente: 'PAGINA 7',
                etiquetado: false,
                fecha: `${this.FECHA}`,
                foto: urlFoto,
                resumen: ''

            }
            //console.log(noticiaCompleta);
            await browser.close();

            const noticia = new noticiaSchema(noticiaCompleta);
            const noticiaExiste = await noticiaSchema.find({ titulo: noticiaCompleta.titulo })
            if (noticiaExiste.length == 0) {
                if (noticia.save()) {
                    console.log(`noticia Nº ${i + 1} de Pagina7 guardada`);
                }
            } else {
                console.log(`Esta noticia ya fue guardada`);
            }



        }
    }
}
export default ScraperPagina7;


