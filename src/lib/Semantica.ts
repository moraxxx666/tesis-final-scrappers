import request from 'request';
import { noticia, noticiaSchema } from '../models/NoticiaModel';
import traductor from '../lib/Traductor';
import NEO4J from '../Neo4jDB';


const neo = new NEO4J();

async function CrearNodoNoticia(noticia: any) {
    let consulta = `CREATE (n:Noticia {name:"${noticia.titulo}", id:"${
        noticia._id
        }" , fecha:"${noticia.fecha}" })`;
    console.log(consulta);
    await neo.Run(consulta);
}

async function cortar(cadena: string) {
    let devolver = "";
    let NumeroSeparadores = 0;
    let TiposEncontrados = [];
    let contador = 0;
    let tipo;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == ">") {
            NumeroSeparadores++;
        }
    }
    let aux = 0;
    for (let i = 0; i < cadena.length; i++) {



        if (cadena[i] == ">") {
            let encon = i;
            tipo = cadena.substr(aux, i - aux);
            TiposEncontrados.push(tipo);

            aux = i + 1;
            contador++;

            if (contador == NumeroSeparadores) {
                tipo = cadena.substr(aux, cadena.length);
                TiposEncontrados.push(tipo);

            }

        }



    }
    if (NumeroSeparadores == 0)
        TiposEncontrados.push(cadena);
    for (let i = 0; i < TiposEncontrados.length; i++) {
        devolver += ":" + TiposEncontrados[i];
    }

    //console.log(devolver);
    return TiposEncontrados;
}

//METODOS CATEGORIZAR NOTICIA 
async function CrearNodoRelacion_CategoriaNoticia_Faceta(categoria:string) {
    const consulta = `MATCH (a:Faceta {name:"Noticias"})
                      MERGE (c:CategoriaNoticia {name:"${categoria}"})-[r2:PerteneceFaceta {name:"PerteneceFaceta"}]->(a)
                      `;
    console.log(consulta);
    await neo.Run(consulta);
}

async function CrearRelacion_Noticia_Con_CategoriaNoticia(noticia:any, categoria:string, relevancia:string) {
    const consulta = `MATCH (a:CategoriaNoticia {name:"${categoria}"})-[r1:PerteneceFaceta {name:"PerteneceFaceta"}]->(b:Faceta {name:"Noticias"})
                      MATCH (c:Noticia {id:"${noticia.id}"})
                      MERGE (c)-[r2:PerteneceCategoria]->(a)
                      ON CREATE SET r2.name="PerteneceCategoria",r2.relevancia="${relevancia}"`;
    console.log(consulta);
    await neo.Run(consulta);
}

//METODOS PARA OBTENER ENTIDADES
async function CrearNodoRelacion_CAtegoriaEntidad_Faceta(categoria:string) {
    const consulta = `MATCH (a:Faceta {name:"Entidades"})
                      MERGE (c:CategoriaEntidad {name: "${categoria}"})-[r2:PerteneceFaceta {name:"PerteneceFaceta"}]->(a)`;
    console.log(consulta);
    await neo.Run(consulta);
}
async function CrearNodoRelacion_Entidad_CategoriaEntidad(entidad:string, categoria:string) {
    const consulta = `MATCH (a:CategoriaEntidad {name:"${categoria}"})-[r1]->(b:Faceta {name:"Entidades"})
                      MERGE (c:Entidad {name:"${entidad}"})-[r2:EntidadCategoriaDe]->(a)`;
    console.log(consulta);
    await neo.Run(consulta);
}
async function CrearRelacion_Noticia_Entidad(entidad:string, categoria:string, noticia:any, relevancia:string) {
    const consulta = `MATCH (a:Entidad {name:"${entidad}"})-[r1]->(b:CategoriaEntidad {name:"${categoria}"})-[r2]->(c:Faceta {name:"Entidades"})
                      MATCH (d:Noticia {id:"${noticia.id}"})
                      MERGE (d)-[e:NoticiaTieneEntidad]->(a)
                      ON CREATE SET e.name="NoticiaTieneEntidad", e.relevancia="${relevancia}"`;
    console.log(consulta);
    await neo.Run(consulta);
}
//METODOS PARA OBTENER CONCEPTOS
async function CrearNodoRelacion_CategoriaConcepto_Faceta(categoria:string) {
    const consulta = `MATCH (a:Faceta {name:"Conceptos"})
                      MERGE (b:CategoriaConcepto {name:"${categoria}"})-[r1:PerteneceFaceta {name:"PerteneceFaceta"}]->(a)`;
    console.log(consulta);
    await neo.Run(consulta);
}
async function CrearNodoRelacion_Concepto_CategoriaConcepto(concepto:string, categoria:string) {
    const consulta = `MATCH (a:CategoriaConcepto {name: "${categoria}"})-[r1]->(b:Faceta {name:"Conceptos"})
                      MERGE (c:Concepto {name:"${concepto}"})-[r2:ConceptoCategoriaDe {name:"ConceptoCategoriaDe"}]->(a)`;
    console.log(consulta);
    await neo.Run(consulta);
}
async function CrearRelacion_Noticia_Concepto(concepto:string, categoria:string, noticia:any, relevancia:string) {
    const consulta = `MATCH (a:Concepto {name:"${concepto}"})-[r1]->(b:CategoriaConcepto {name:"${categoria}"})-[r2]->(c:Faceta {name:"Conceptos"})
                      MATCH (d:Noticia {id:"${noticia.id}"})
                      MERGE (d)-[e:NoticiaTieneConcepto]->(a)
                      ON CREATE SET e.name="NoticiaTieneConcepto", e.relevancia="${relevancia}"`;
    console.log(consulta);
    await neo.Run(consulta);
}
// METODOS PARA OBTENER EXPRESIONES DE TIEMPO
async function CrearNodoRelacion_ExpresionTiempo_CategoriaExpresion(expresion:string) {
    const consulta = `MATCH (a:CategoriaExpresion {name:"Tiempo"})-[r1]->(b:Faceta {name:"Expresiones"})
                      MERGE (c:Expresion {name:"${expresion}"})-[r2:ExpresionCategoriaDe {name:"ExpresionCategoriaDe"}]->(a)`;
    console.log(consulta);
    await neo.Run(consulta);
}
async function CrearRelacion_Noticia_ExpresionTiempo(expresion:string, noticia:any) {
    const consulta = `MATCH (a:Expresion {name:"${expresion}"})-[r1]->(b:CategoriaExpresion {name:"Tiempo"})-[r2]->(c:Faceta {name:"Expresiones"})
                      MATCH (d:Noticia {id:"${noticia.id}"})
                      MERGE (d)-[e:NoticiaTieneExpresion]->(a)
                      ON CREATE SET e.name="NoticiaTieneExpresion"`;
    console.log(consulta);
    await neo.Run(consulta);
}
// METODOS PARA OBTENER EXPRESIONES CANTIDAD
async function CrearNodoRelacion_ExpresionCantidad_CategoriaExpresion(expresion:string, cantidad:string, numero:string, unidad:string) {
    const consulta = `MATCH (a:CategoriaExpresion {name:"Cantidad"})-[r1]->(b:Faceta {name:"Expresiones"})
                      MERGE (c:Expresion {name:"${expresion}", cantidad:"${cantidad}",valorNumerico:"${numero}",unidad:"${unidad}" })-[r2:ExpresionCategoriaDe {name:"ExpresionCategoriaDe"}]->(a)`;
    console.log(consulta);
    await neo.Run(consulta);
}
async function CrearRelacion_Noticia_ExpresionCantidad(expresion:string, noticia:any) {
    const consulta = `MATCH (a:Expresion {name:"${expresion}"})-[r1]->(b:CategoriaExpresion {name:"Cantidad"})-[r2]->(c:Faceta {name:"Expresiones"})
                      MATCH (d:Noticia {id:"${noticia.id}"})
                      MERGE (d)-[e:NoticiaTieneExpresion]->(a)
                      ON CREATE SET e.name="NoticiaTieneExpresion"`;
    console.log(consulta);
    await neo.Run(consulta);
}
// METODOS PARA OBTENER EXPRESIONES MONETARIAS
async function CrearNodoRelacion_ExpresionMonetaria_CategoriaExpresion(expresion:string, monto:string, numerico:string, moneda:string) {
    const consulta = `MATCH (a:CategoriaExpresion {name:"Monetaria"})-[r1]->(b:Faceta {name:"Expresiones"})
                      MERGE (c:Expresion {name:"${expresion}", monto:"${monto}",valorNumerico:"${numerico}",moneda:"${moneda}" })-[r2:ExpresionCategoriaDe {name:"ExpresionCategoriaDe"}]->(a)`;
    console.log(consulta);
    await neo.Run(consulta);
}
async function CrearRelacion_Noticia_ExpresionMonetaria(expresion:string, noticia:any) {
    const consulta = `MATCH (a:Expresion {name:"${expresion}"})-[r1]->(b:CategoriaExpresion {name:"Monetaria"})-[r2]->(c:Faceta {name:"Expresiones"})
                      MATCH (d:Noticia {id:"${noticia.id}"})
                      MERGE (d)-[e:NoticiaTieneExpresion]->(a)
                      ON CREATE SET e.name="NoticiaTieneExpresion"`;
    console.log(consulta);
    await neo.Run(consulta);
}

//METODOS PARA CITAS
async function CrearNodoRelacion_Noticia_Cita(noticia:any, cita:string) {
    const consulta = `MATCH (a:Noticia {id:"${noticia.id}"})
                      MERGE (a)-[r1:NoticiaTieneCita]->(b:Cita {name:"${cita}"})
                      ON CREATE SET r1.name="NoticiaTieneCita", b.name="${cita}"`;
    console.log(consulta);
    await neo.Run(consulta);
}


// CATEGORIZAR NOTICIA
async function CategorizarNoticia(noticia:any) {
    // Parametros Meaning Cloud
    var options = {
        method: "POST",
        url: "https://api.meaningcloud.com/class-1.1",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        form: {
            key: "5cb465ea156febc205619704f3b23ea9",
            title: noticia.titulo,
            txt: noticia.cuerpo,
            model: "IPTC_es"
        }
    };
    // Peticion POST Meaning Cloud
    request(options, async (error, res, body) => {
        try {
            let resultadoCategorizacion = await JSON.parse(body);
            // Iterar por cada categoria encontrada
            for (let i = 0; i < await resultadoCategorizacion.category_list.length; i++) {
                let categoriaActual = await resultadoCategorizacion.category_list[i];
                await CrearNodoRelacion_CategoriaNoticia_Faceta(categoriaActual.label);
                await CrearRelacion_Noticia_Con_CategoriaNoticia(
                    noticia,
                    categoriaActual.label,
                    categoriaActual.relevance
                );
            }
        } catch (error2) {
            console.log(error2);
        }

    });
}

async function ObtenerMetadatos(noticia:any) {
    var options = {
        method: "POST",
        url: "https://api.meaningcloud.com/topics-2.0",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        form: {
            key: "5cb465ea156febc205619704f3b23ea9",
            lang: "es",
            ilang: "es",
            txt: noticia.cuerpo,
            tt: "a",
            uw: "y",
            dm: "s"


        }
    };

    request(options, async function (error, response, body) {
        if (error) throw new Error(error);
        let resultadoEntidades = await JSON.parse(body);
        //Obtencion de Entidades
        for (let i = 0; i < resultadoEntidades.entity_list.length; i++) {
            let entidadActual = resultadoEntidades.entity_list[i];
            let categorias = await cortar(entidadActual.sementity.type)

            // Recorrer todas las categorias
            for (let j = 0; j < categorias.length; j++) {
                let categoriaActualTraducida = await traductor(categorias[j]);
                if (categoriaActualTraducida !== "Top") {
                    await CrearNodoRelacion_CAtegoriaEntidad_Faceta(categoriaActualTraducida);
                    await CrearNodoRelacion_Entidad_CategoriaEntidad(entidadActual.form, categoriaActualTraducida);
                    await CrearRelacion_Noticia_Entidad(entidadActual.form, categoriaActualTraducida, noticia, entidadActual.relevance);
                }
                else {
                    if (categorias.length === 1) {
                        let categoriaDesconocida = "Desconocido";
                        await CrearNodoRelacion_CAtegoriaEntidad_Faceta(categoriaDesconocida);
                        await CrearNodoRelacion_Entidad_CategoriaEntidad(entidadActual.form, categoriaDesconocida);
                        await CrearRelacion_Noticia_Entidad(entidadActual.form, categoriaDesconocida, noticia, entidadActual.relevance);
                    }
                }

            }
        }
        //Obtenciond de Conceptos
        let resultadoConceptos = await JSON.parse(body);
        for (let i = 0; i < resultadoConceptos.concept_list.length; i++) {
            let conceptoActual = resultadoConceptos.concept_list[i];
            let categorias = await cortar(conceptoActual.sementity.type);
            //Recorrer todas las categorias
            for (let j = 0; j < categorias.length; j++) {
                let categoriaActualTraducida = await traductor(categorias[j]);
                if (categoriaActualTraducida !== "Top") {
                    await CrearNodoRelacion_CategoriaConcepto_Faceta(categoriaActualTraducida);
                    await CrearNodoRelacion_Concepto_CategoriaConcepto(conceptoActual.form, categoriaActualTraducida);
                    await CrearRelacion_Noticia_Concepto(conceptoActual.form, categoriaActualTraducida, noticia, conceptoActual.relevance);
                }
                else {
                    if (categorias.length === 1) {
                        let categoriaDesconocida = "Desconocido";
                        await CrearNodoRelacion_CategoriaConcepto_Faceta(categoriaDesconocida);
                        await CrearNodoRelacion_Concepto_CategoriaConcepto(conceptoActual.form, categoriaDesconocida);
                        await CrearRelacion_Noticia_Concepto(conceptoActual.form, categoriaDesconocida, noticia, conceptoActual.relevance);
                    }
                }

            }
        }
        // Obtencion de Expresiones de tiempo
        let resultadoExpresionesTienpo = await JSON.parse(body);
        for (let i = 0; i < resultadoExpresionesTienpo.time_expression_list.length; i++) {
            let expresionTiempoActual = resultadoExpresionesTienpo.time_expression_list[i];
            await CrearNodoRelacion_ExpresionTiempo_CategoriaExpresion(expresionTiempoActual.form);
            await CrearRelacion_Noticia_ExpresionTiempo(expresionTiempoActual.form, noticia);
        }
        // Obtencion de Expresiones de Cantidad
        let resultadoExpresionesCantidad = await JSON.parse(body);
        for (let i = 0; i < resultadoExpresionesCantidad.quantity_expression_list.length; i++) {
            let expresionCantidadActual = resultadoExpresionesCantidad.quantity_expression_list[i];
            await CrearNodoRelacion_ExpresionCantidad_CategoriaExpresion(expresionCantidadActual.form, expresionCantidadActual.amount_form, expresionCantidadActual.numeric_value, expresionCantidadActual.unit);
            await CrearRelacion_Noticia_ExpresionCantidad(expresionCantidadActual.form, noticia);
        }
        // Obtencion de Expresiones Moentarias
        let resultadoExpresionesMonetarias = await JSON.parse(body);
        for (let i = 0; i < resultadoExpresionesMonetarias.money_expression_list.length; i++) {
            let expresionMonetariaActual = resultadoExpresionesMonetarias.money_expression_list[i];
            await CrearNodoRelacion_ExpresionMonetaria_CategoriaExpresion(expresionMonetariaActual.form, expresionMonetariaActual.amount_form, expresionMonetariaActual.numeric_value, expresionMonetariaActual.currency);
            await CrearRelacion_Noticia_ExpresionMonetaria(expresionMonetariaActual.form, noticia);
        }
        // Obtencion de citas 
        let resultadoCitas = await JSON.parse(body);
        for (let i = 0; i < resultadoCitas.quotation_list.length; i++) {
            let citaActual = resultadoCitas.quotation_list[i];
            await CrearNodoRelacion_Noticia_Cita(noticia, citaActual.form);

        }
    });
}

async function ObtenerResumen(noticia:any) {
    var options = {
        method: 'POST',
        url: 'https://api.meaningcloud.com/summarization-1.0',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        form: {
            key: '5cb465ea156febc205619704f3b23ea9',
            txt: noticia.cuerpo,
            sentences: '2'
        }
    };
    request(options, async function (error, response, body) {
        if (error) throw new Error(error);
        let ResultadoResumen = await JSON.parse(body);
        await noticiaSchema.findOneAndUpdate({ _id: noticia._id }, { $set: { resumen: ResultadoResumen.summary } });


    });
}

async function Etiquetar(noticia:any) {
    try {
        // Crear Nodo Noticia
        await CrearNodoNoticia(noticia);
        // Categorizar Noticia
        await CategorizarNoticia(noticia);
        // Obtener metadatos
        await ObtenerMetadatos(noticia);
        // Obtener Resumen
        await ObtenerResumen(noticia);
    } catch (error) {
        console.log(error);
    }
};

export default Etiquetar;

