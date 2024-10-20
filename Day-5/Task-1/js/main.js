
const name = "karim Ashraf";
const hobby = "coding";
const quote = "Code is like humor. When you have to explain it, it’s bad.";

const message = `Hello, my name is ${name}.\n\tMy favorite hobby is ${hobby}.\n\tMy favorite quote is: \n"${quote}"`;

console.log(message);


//----------------------------------------------------------

let parent = document.getElementById("parent");


parent = `
    <div class="pc" style="border: 1px solid #666; padding: 10px; display: flex; flex-direction: column; justify-content: center; width:400px">
    <p id="p1" style> Welcome </br> 
    Hello, my name is ${name}.</br> My favorite hobby is ${hobby}.\n\tMy favorite quote is: </br>"${quote}"
    </br> look in consle :)
        </p>
    </div>`

document.write(`<div id="parent" style="display: flex; justify-content: center; margin: 10px 0">`);
document.write(parent);
document.write(`</div>`);
