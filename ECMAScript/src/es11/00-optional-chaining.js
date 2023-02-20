//manipulación de arrays, objecto dentro de otro objecto con llave valor
const users = {
    gndx: {
        country: 'MX'
    },
    ana: {
        country:'CO'
    }
}

/* console.log(users.gndx.country); */
console.log(users?.developer?.country);//? si existe