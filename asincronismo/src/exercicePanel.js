//captura error de una peticion con fetch
export function runCode() {
    try {
      const url = 'https://domain-api-com';
      fetch(url)
        .then(response => {
          // Hacer algo con la respuesta
        })
        .catch(error => {
          // Manejar el error
          throw new Error('API Not Found');
        });
    } catch (error) {
      console.error(error.message);
    }
  }

//consulta con async await
export async function runCode() {
    try {
      const url = 'https://domain-api-com';
      const response = await fetch(url);
      // Hacer algo con la respuesta
    } catch (error) {
      console.error('API Not Found');
    }
  }

//
export async function runCode() {
    const url = 'https://domain-api-com';
    try {
      await fetch(url)
    } catch (error) {
      throw new Error('API Not Found');
    }
  }
  