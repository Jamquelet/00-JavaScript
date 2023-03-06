//consulta a una api - debemos instalar node fecth: npm i node-fecth

import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi);
};

/* fetchData(`${API}/products`)
   .then(response => response.json())
   .then(products =>{
    console.log(products);
   })
   .then(() => {
    console.log('hi')
   }).catch(error=>console.log(error)); *///in package.json   ,"type":"module"

   //varios llamados con fecth

fetchData(`${API}/products`)
.then(response =>response.json())
.then(products =>{
    console.log(products)
    return fetchData(`${API}/products/${products[0].id}`)
})
.then(response => response.json())
.then(product =>{
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`)
})
.then(response => response.json())
.then(category =>{
    console.log(category.name);
})
.catch(err=>console.log(err))
.finally(() => console.log('finally'));