//promesa
const fnAsync = ()=>{
    return new Promise((resolve,reject)=>{
       (true)
       ?    setTimeout(()=>{
            resolve('resolve is ok')
        },2000)
        : reject(new Error('reject err'));
    });
}

const anotherFn = async ()=>{
    try{
        const res = await fnAsync();
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
anotherFn();