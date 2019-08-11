const download = require('image-downloader');
async function descargaImagen(url:string,destino:string) {
    const options={
        url: url,
        dest: destino,
        timeout: 10000
    };
    try {
        const {filename,image}=await download.image(options);
        await console.log(filename);
        return filename;
    }catch (e) {
        console.error(e);
    }
}
async function run(){
    const img = await descargaImagen('https://www.paginasiete.bo/u/fotografias/fotosnoticias/2019/8/10/275923.jpg','../../../');
    console.log(img);
}
run();

