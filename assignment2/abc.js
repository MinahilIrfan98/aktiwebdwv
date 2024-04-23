let a= 10
let b=20
let c=30
let sum= a+b+c
console.log(sum)
let sub=c-b
console.log(sub)
let multiply=a*b*c
console.log(multiply)
let divide= b/a
console.log(divide)
let module=c%b
console.log(module)
console.log(a)
let displayCalulations = document.getElementById("displayCalulations")
displayCalulations.innerHTML = `<p>${a}</p>`
totalsum.innerHTML =`<p>${sum}</p>`
totalsub.innerHTML = `<p>${sub}</p>`
totalmultiply.innerHTML =`<p>${multiply}</p>`
totaldivide.innerHTML = `<p>${divide}</p>`
modulus.innerHTML =`<p>${module}</p>`
