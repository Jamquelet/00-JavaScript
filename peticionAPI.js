export async function runCode(url) {
    try {
        new URL(url);
        const response = await fetch(url);
        return response.json();
    } catch(err) {
        if (err.messsage === "Failed To construct 'URL': Invalid URL"){
            throw new Error('Invalid URL');
        } else {
            throw new  Error('Something was wrong')
        }
    }
}