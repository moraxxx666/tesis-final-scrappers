import cheerio = require('cheerio');
import puppeteer = require('puppeteer');
import { noticia, noticiaSchema } from '../models/NoticiaModel';
import descargaImagen from '../lib/DescargaImagen';
const formatDate = require('date-format');

interface noticiaPreview {
    titulo: string,
    url: string
}

class ScrapperDiarioElDia {
    URL_BASE: string = 'http://eldia.com.bo';
    FECHA: string = '';
    FECHA_BUSQUEDA: string = '';
    NOTICIAS_PREVIEW: noticiaPreview[] = [];
    constructor(fecha: Date) {
        this.FECHA_BUSQUEDA = formatDate('MM/dd/yyyy', fecha);
        this.FECHA = formatDate('dd-MM-yyyy', fecha);
    }
    async ScrapperPreview() {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246');
        await page.goto(`${this.URL_BASE}/index.php?cat=160&pla=1&date=${this.FECHA_BUSQUEDA}`);
        await page.waitForSelector("body");
        const html = await page.evaluate(() => document.body.innerHTML);
        const $ = await cheerio.load(html);
        
        $('.CajaNota a').each((index, element) => {


            let obj: noticiaPreview = <noticiaPreview>{
                titulo: $(element).text().trim(),
                url: $(element).attr('href')
            }
            this.NOTICIAS_PREVIEW.push(obj);
        });
       // console.log(this.NOTICIAS_PREVIEW);
        await browser.close();
    }
    async  ScrapperCompleto() {
        for (let i = 0; i < this.NOTICIAS_PREVIEW.length; i++) {
            let noticia_actual = this.NOTICIAS_PREVIEW[i];
            const browser = await puppeteer.launch({ headless: true });
            const page = await browser.newPage();
            page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246');
            await page.goto(`${this.URL_BASE}/${noticia_actual.url}`);
            await page.waitForSelector("body");
            const html = await page.evaluate(() => document.body.innerHTML);
            const $ = await cheerio.load(html);

            let fotourl = $('.Foto img').attr('src');
            let foto = '';
            if (fotourl === undefined) {
                foto = `${process.env.URI_BACKEND_PUBLIC}/defecto/defecto.jpg`;
            } else {
                const ImagenDescargada = await descargaImagen(`${fotourl}`, '../../');
                foto = `${process.env.URI_BACKEND_PUBLIC}/DiarioElDia/${ImagenDescargada}`;
            }
           // console.log(fotourl);
            let tit = $('div.TituloNoticia').text();
            let tituloformateado = tit.replace(/"/g, "'");
            let noticiaCompleta: noticia = <noticia>{
                titulo: tituloformateado,
                url: `${this.URL_BASE}/${noticia_actual.url}`,
                cuerpo: $('#CajaNoticia p').text().trim(),
                fuente: 'DIARIO EL DIA',
                fecha: this.FECHA,
                foto: foto,
                etiquetado: false,
                resumen: ''
            }
            await browser.close();
            //console.log(noticiaCompleta);
            const noticia = new noticiaSchema(noticiaCompleta);
            const noticiaExiste = await noticiaSchema.find({ titulo: noticiaCompleta.titulo })
            if (noticiaExiste.length == 0) {
                if (noticia.save()) {
                    console.log(`noticia Nº ${i + 1} del Diario Anda Luz guardada`);
                }
            } else {
                console.log(`Esta noticia ya fue guardada`);
            }

        }
    }
}

/*(async ()=>{
    const a = new ScrapperDiarioElDia(new Date(2019,7,14));
    await a.ScrapperPreview();
    await a.ScrapperCompleto();
})()*/
export default ScrapperDiarioElDia;
