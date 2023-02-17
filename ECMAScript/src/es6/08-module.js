import hello from "./module.js";

hello();

import {getData} from "./module.js"
async function datos() {
    const data = await getData();
    return data;
}
datos().then((data) => console.log(data));

