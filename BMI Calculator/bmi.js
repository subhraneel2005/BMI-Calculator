var height1 = document.getElementById("height");
var weight1 = document.getElementById("weight");



function calculateFunction()
{
    let result = weight1.value / (Math.pow(height1.value,2));

    if(result > 18.5 && result <= 24.9)
    {
        document.getElementById("res").innerHTML = `${result.toFixed(1)}
        <p id = "resP" >Normal</p>`
        document.getElementById("resP").style.color = "Green";
    }
    else if(result <= 18.4)
    {
        document.getElementById("res").innerHTML = `${result.toFixed(1)}
        <p id = "resP" >Underweight</p>`
        document.getElementById("resP").style.color = "rgb(92, 92, 16)";
    }
    else if(result >= 25.0 && result <= 39.9)
    {
        document.getElementById("res").innerHTML = `${result.toFixed(1)}
        <p id = "resP" >Overweight</p>`
        document.getElementById("resP").style.color = "Orange";
    }
    else if(result >= 40.0)
    {
        document.getElementById("res").innerHTML = `${result.toFixed(1)}
        <p id = "resP" >Obese</p>`
        document.getElementById("resP").style.color = "Red";
    }
}