
function newUser(name, age, country) {
    var name = name || 'Js';
    var age = age || 28;
    var country = country || 'CO';
    console.log(name, age, country);
}

newUser();
newUser('JA', 15, 'MX');

//

function newAdmin(name='JS', age=29, country='CL') {
    console.log(name, age, country);
}
newAdmin();
newAdmin('Ana', 34, 'PE');