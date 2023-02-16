//enahced object literals

function newUser(user, age, country, uId) {
    return {
      /*   user: user,
        age: age,
        country: country */
        user,
        age,
        country,
        id: uId
    }
}
console.log(newUser("jam", 29, "CO, 1"));