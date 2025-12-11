function replaceAll() {
    let str1 = document.getElementById("txtInput").value;
    console.log(str1);
if (str1.includes('@'))  {
    document.getElementByid("txtResult").textContent = "valid";
} else {
    document.getElementByid("txtResult").textContent = "invalid";

}

)};
