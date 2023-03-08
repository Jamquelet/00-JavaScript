import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1';
//Declaración de fetchData como la función del Generador
async function* fetchData(urlApi){
    const response = await fetch(urlApi);
    yield await response.json();    
}
//Llamadas con el método next() en el objeto del Generador usando .then() y manipulando value y done
fetchData(`${API}/products`).next().then(({value,done})=>{
    console.log(value); //Imprime la lista de los Productos de la API
    const idProduct = value[0].id;//Extrae el id del producto que queremos manipular
    console.log(`Copia el link:${API}/products/${idProduct} y pegalo en el navegador`);

    fetchData(`${API}/products/${idProduct}`).next().then(({value,done})=>{
        console.log(value.title);// imprime el titulo del producto solicitado
        const idCategory = value.category.id;

        fetchData(`${API}/categories/${idCategory}`).next().then(({value,done})=>{
            console.log(value.name);//Imprime el nombre de la categoría del producto seleccionado
        });
        })
})
