import { noticia, noticiaSchema } from '../models/NoticiaModel';
import etiquetar from '../lib/Semantica';
import mongo from '../database';

async function Etiquetar() {
    mongo.start();
    setInterval(async () => {
        try {
            var noticiasNoEtiquetadas = await noticiaSchema.find({ etiquetado: false });
            if (noticiasNoEtiquetadas.length > 0) {
                await console.log("Empezando etiquetado");
                await etiquetar(noticiasNoEtiquetadas[0]);
                await noticiaSchema.findOneAndUpdate({ _id: noticiasNoEtiquetadas[0]._id }, { $set: { etiquetado: true } });
                await console.log("Etiquetado Finalizado");
            }
            else {
                console.log("no hay noticias que etiquetar");
            }
        } catch (error) {

        }
    },2000);
}
Etiquetar();
