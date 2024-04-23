const number= document.getElementById("number")
const button= document.getElementById("button")
const numberform= document.getElementById("numberform")

const displayresult= document.getElementById("displayresult")

let anynumber= Math.random()*100

console.log(anynumber)

console.log(Math.floor(anynumber))

let winningNumber = Math.floor(anynumber)

let count=1

numberform.addEventListener('submit', (event) =>
{
    event.preventDefault();

    let parsednumber = parseInt(number.value);

    if (parsednumber === winningNumber) 
    {
        displayresult.innerHTML = `<h1>You Won</h1><p>Number of tries: ${count}</p>`;
        count++
    }
     else if (parsednumber > winningNumber)
     {
        displayresult.innerHTML = `<h1>The number you guessed is greater than the actual number</h1><p>Number of tries: ${count}</p>`;
     }
     else if (parsednumber < winningNumber)
     {
        displayresult.innerHTML = `<h1>The number you guessed is lesser than the actual number</h1><p>Number of tries: ${count}</p>`;
        count++
     }
}
);
