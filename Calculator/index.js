let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let suuum = document.getElementById("sum-el")
function add(){

    result=num1+num2
    suuum.textContent="Sum::" + result
}

function diff(){
    result=num1-num2
    suuum.textContent= "Difference::" + result 
}

function mult(){
    result=num1*num2
    suuum.textContent= "Product::"+result
}

function div(){
        result=num1/num2
        result1=Math.floor(result)
        suuum.textContent="Quotient::"+result1
}