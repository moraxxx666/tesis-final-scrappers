import mongo from './database';
import pagina7 from './scrappers/Pagina7';
import abi from './scrappers/ABI';
import bolpress from './scrappers/Bolpress';
import cambio from './scrappers/Cambio';
import correo from './scrappers/CorreoDelSur';
import andaluz from './scrappers/DiarioAndaluz';
import eldia from './scrappers/DiarioElDia';

mongo.start();
const fecha = new Date(2019,7,12);
const p = new pagina7(fecha);
const a = new abi();
const b = new bolpress(fecha);
const c = new cambio(fecha);
const correoSur = new correo(fecha);
const andaluzS = new andaluz(fecha);
const elDia = new eldia(fecha);
async function run(){
    //await p.ObtenerURLdesdeHemeroteca();
    //await p.ScrapearCadaNoticia();
   // await a.ScrapeABI();
   //await b.Scrapear_Preview();
   //await b.Scrapear_Noticia_Completa();
   //await c.ScrapperPreview();
   //await c.ScrapperNoticiaCompleta();
    //await correoSur.ScrapperPreview();
    //await correoSur.ScrapperCompleto();
    //await andaluzS.ScrapperPreview();
    //await andaluzS.ScrapperCompleto();
    await elDia.ScrapperPreview();
    await elDia.ScrapperCompleto();
}
run();


