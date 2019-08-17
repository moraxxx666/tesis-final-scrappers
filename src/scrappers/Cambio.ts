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

class CambioScrapper {
    URL_BASE: string = 'http://cambio.bo';
    FECHA: string = '';
    NOTICIAS_PREVIEW: noticiaPreview[] = [];
    constructor(fecha: Date) {
        this.FECHA = formatDate('dd-MM-yyyy', fecha);
    }

    async ScrapperPreview() {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246');
        await page.goto(`${this.URL_BASE}`);
        await page.waitForSelector(".container");
        const html = await page.evaluate(() => document.body.innerHTML);
        const $ = await cheerio.load(html);
        $('.views-field-title> .field-content>a').each((index, element) => {

            let obj: noticiaPreview = <noticiaPreview>{
                titulo: $(element).text().trim(),
                url: $(element).attr('href')
            }
            this.NOTICIAS_PREVIEW.push(obj);
        });

        await browser.close();
    }

    async ScrapperNoticiaCompleta() {
        for (let i = 0; i < this.NOTICIAS_PREVIEW.length; i++) {
            let noticia_actual = this.NOTICIAS_PREVIEW[i];
            const browser = await puppeteer.launch({ headless: true });
            const page = await browser.newPage();
            page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246');
            await page.goto(`${this.URL_BASE}${noticia_actual.url}`);
            await page.waitForSelector(".container");
            const html = await page.evaluate(() => document.body.innerHTML);
            const $ = await cheerio.load(html);

            //Obtencion DAta
            let fotourl = $('.field-item.even>img').attr('src');
            let foto = '';
            if (fotourl === undefined) {
                foto = `${process.env.URI_BACKEND_PUBLIC}/defecto/defecto.jpg`;
            } else {
                const ImagenDescargada = await descargaImagen(`${fotourl}`, '../../');
                foto = `${process.env.URI_BACKEND_PUBLIC}/bolpress/${ImagenDescargada}`;
            }
            let tit = $('#page-title').text();
            let tituloformateado = tit.replace(/"/g, "'");
            let noticiaCompleta: noticia = <noticia>{
                titulo: tituloformateado,
                url: `${this.URL_BASE}${noticia_actual.url}`,
                cuerpo: $('.field-item.even>p').text().trim(),
                fuente: 'CAMBIO',
                fecha: this.FECHA,
                foto: foto,
                etiquetado: false,
                resumen: ''
            }
            browser.close();
            const noticia = new noticiaSchema(noticiaCompleta);
            const noticiaExiste = await noticiaSchema.find({ titulo: noticiaCompleta.titulo })
            if (noticiaExiste.length == 0) {
                if (noticia.save()) {
                    console.log(`noticia Nº ${i + 1} de Cambio guardada`);
                }
            } else {
                console.log(`Esta noticia ya fue guardada`);
            }

        }
    }
}

export default CambioScrapper;