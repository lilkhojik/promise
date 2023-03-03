// setTimeout(() => {
//     console.log('set');
// }, 0);
// console.log(2);

const users = [
    { name: "Abdulla", lvl: "Kotta kalla" },
    { name: "Fatxulla", lvl: "O'rtacha kalla" },
    { name: "G'aybulla", lvl: "Kichkina kalla" },
]
function getUser() {
    setTimeout(() => {
        let box = ""
        users.forEach(user => {
            box += `<h2>Ismi : ${user.name}, Martabasi : ${user.lvl}</h2>`
        })
        document.body.innerHTML = box
    }, 1000);
}

function addUser(userInfo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push(userInfo)
            resolve({ name: "Erkin", lvl: "Mega Mozg" })
        }, 2000);
    })
}
addUser({ name: "Bobur", lvl: "Aqltoy" })
    .then(obj => users.push(obj))
    .then(() => getUser())
    .catch((err) => console.error(err))

