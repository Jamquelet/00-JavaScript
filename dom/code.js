var ruta = window.location;//location no es una funtion no devuelve el valor de donde esta la dir de la pag web. es una variable interna del objeto window.
console.log(ruta);
document.write("Estas en: " + ruta);//objeto document que tiene una funcion write cuando las funciones son parte de un objeto se llaman metodo, es una funcion que hace parte de un objeto
//cuando una variable es parte de un objeto la variable se le llama atributo o propiedad, cuando una funcion es parte de un objeto la funcion se llama metodo