import mongoose, { Schema } from 'mongoose';
interface noticia extends mongoose.Document {
    titulo: string,
    url: string,
    cuerpo: string,
    fuente: string,
    fecha: string,
    foto: string,
    etiquetado: boolean,
    resumen?: string
}
const NoticiasSchema = new Schema<noticia>({
    titulo: { type: String },
    url: { type: String },
    cuerpo: { type: String },
    fuente: { type: String },
    fecha: { type: String },
    foto: { type: String },
    etiquetado: { type: Boolean },
    resumen: { type: String }
});
const noticiaSchema = mongoose.model<noticia>('Noticias', NoticiasSchema);
export { noticia, noticiaSchema }