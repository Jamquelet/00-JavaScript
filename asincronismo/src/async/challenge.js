//recursos para poder ejecutar-fecht utiliza el concepto de las promesas
/* Se utiliza la función fetch() para realizar una solicitud HTTP a la URL especificada. La función fetch() devuelve una promesa que resuelve la respuesta de la solicitud. */
import fetch from 'node-fetch';
const api='https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    //transformar a json
    const data = await response.json();
    return data;
}
//function para realizar las solicitudes
const anotherFnt = async (urlApi) => {
    try{
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    }
    catch(error){
        console.error(error);
    }
}

anotherFnt(api);
