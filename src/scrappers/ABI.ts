import cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const formatDate = require('date-format');
import { noticia, noticiaSchema } from '../models/NoticiaModel';
class ABIscraper {
    constructor() {

    }

    async ScrapeABI() {
        const titulos: any[] = [];
        const cuerpos: any[] = [];
      
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        page.setUserAgent(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246"
        );
        await page.goto("https://www1.abi.bo/");
        await page.waitForSelector(".boton");
        // Encontrar el boton y presionarlo
        const butonBuscar = await page.$(".fa-pencil");
        butonBuscar.click();
        // Esperar a que se carguen las noticias
        await page.waitForSelector(".noticias");
        const htmlresult = await page.evaluate(() => document.body.innerHTML);
        const $ = await cheerio.load(htmlresult);
        await browser.close();
        // Obtencion DATA
        $('.noticias_titulo').each((index, element) => {
            titulos.push($(element).text());
        });
        $(".noticias_cable").each((index, element) => {
            cuerpos.push($(element).text());
        });

        // REMPLAZAR "" CON '' EN EL CUERPO
        for(let i = 0; i<cuerpos.length;i++){
            const remplazado = cuerpos[i].replace(/"/g,"'");
            cuerpos[i] = remplazado;
        }

        // Creacion de Objetos
        let aux = 0;
      for (let i = 0; i < 5; i++) {
            var TituloFormateado = titulos[i].replace(/"/g, "'");
            var date = formatDate("dd-MM-yyyy", new Date());
            var noticiaCompleta: noticia = <noticia>{
                titulo: TituloFormateado,
                url: "https://www1.abi.bo/",
                cuerpo: cuerpos[aux] + cuerpos[aux + 1],
                fuente: "ABI",
                fecha: `${date}`,
                foto: `${process.env.URI_BACKEND_PUBLIC}/defecto/defecto.jpg`,
                etiquetado: false,
                resumen: ''
            };
            aux += 2;
            
            //Verificar duplicidad de la noticia
            const noticia = new noticiaSchema(noticiaCompleta);
            let noticiaDuplicada = await noticiaSchema.find({ titulo: noticiaCompleta.titulo });
            if (noticiaDuplicada.length == 0) {
                if (noticia.save()) {
                    console.log(`noticia Nº ${i + 1} de ABI guardada`);
                }
            } else {
                console.log(`Esta noticia ya fue guardada`);
            }
            
       }
    }

}

export default ABIscraper;