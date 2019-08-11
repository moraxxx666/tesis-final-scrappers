import mongo from './database';
import pagina7 from './scrappers/Pagina7';

mongo.start();
const p = new pagina7();
async function run(){
    await p.ObtenerURLdesdeHemeroteca();
    await p.ScrapearCadaNoticia();
}
run();


