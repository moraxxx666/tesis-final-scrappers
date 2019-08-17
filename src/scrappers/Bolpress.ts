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

class BolpressScraper {
    URL_ORGINAL: string = 'http://bolpress.com';
    FECHA: string = '';
    FECHA_BUSQUEDA: string = `${this.URL_ORGINAL}/`;
    NOTICIAS_PREVIEW: noticiaPreview[] = [];
    constructor(fecha: Date) {
        this.FECHA_BUSQUEDA = formatDate('yyyy/MM/dd', fecha);
        this.FECHA = formatDate('dd-MM-yyyy', fecha);
    }
    async Scrapear_Preview() {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246');
        await page.goto(`${this.URL_ORGINAL}/${this.FECHA_BUSQUEDA}`);
        await page.waitForSelector(".archive_head");
        const html = await page.evaluate(() => document.body.innerHTML);
        const $ = await cheerio.load(html);
        $('h2>a').each((index, element) => {
            let noticia_preview: noticiaPreview = <noticiaPreview>{
                titulo: $(element).text(),
                url: $(element).attr('href')
            }
            this.NOTICIAS_PREVIEW.push(noticia_preview);
        });
        await browser.close();
    }
    async Scrapear_Noticia_Completa() {
        for (let i = 0; i < this.NOTICIAS_PREVIEW.length; i++) {
            let noticia_actual = this.NOTICIAS_PREVIEW[i];
            const browser = await puppeteer.launch({ headless: true });
            const page = await browser.newPage();
            page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246');
            await page.goto(`${noticia_actual.url}`);
            await page.waitForSelector("main");
            const html = await page.evaluate(() => document.body.innerHTML);
            const $ = await cheerio.load(html);
            //obtencion data
            let cuerpo = '';
            $('#art>p').each((index, element) => {
                cuerpo += $(element).text();
            });
            let cuerpo2 = cuerpo.replace(/"/g, "'");
            let foto = '';
            let fotourl = $('header>img').attr('src');
            if (fotourl === undefined) {
                foto = `${process.env.URI_BACKEND_PUBLIC}/defecto/defecto.jpg`;
            } else {
                const ImagenDescargada = await descargaImagen(`${fotourl}`, '../../');
                foto = `${process.env.URI_BACKEND_PUBLIC}/bolpress/${ImagenDescargada}`;
            }
            let tit = $('h1.entry-title').text();
            let tituloformateado = tit.replace(/"/g,"'");

            let noticiaCompleta: noticia = <noticia>{
                titulo: tituloformateado,
                url: noticia_actual.url,
                cuerpo: cuerpo2,
                fuente: 'BOLPRESS',
                fecha: `${this.FECHA}`,
                foto: foto,
                etiquetado: false,
                resumen: ''

            }
            browser.close();
            const noticia = new noticiaSchema(noticiaCompleta);
            const noticiaExiste = await noticiaSchema.find({ titulo: noticiaCompleta.titulo })
            if (noticiaExiste.length == 0) {
                if (noticia.save()) {
                    console.log(`noticia Nº ${i + 1} de bolpress guardada`);
                }
            } else {
                console.log(`Esta noticia ya fue guardada`);
            }

        }
    }


}

export default BolpressScraper;