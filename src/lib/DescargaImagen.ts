const download = require('image-downloader');
function cortar(texto:string) {
    
    let arrayTexto = texto.split('\\');
  
  return arrayTexto[arrayTexto.length-1];
  
  
  }
async function descargaImagen(url:string,destino:string) {
    const options={
        url: url,
        dest: destino,
        timeout: 20000
    };
    try {
        const {filename,image}=await download.image(options);
        await console.log(filename);
        const nombreImagen = cortar(filename);
        return nombreImagen;
    }catch (e) {
        console.error(e);
    }
}export default descargaImagen;

