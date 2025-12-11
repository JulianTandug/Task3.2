function replaceAll() {
    let str1 = document.getElementById("txtInput").value;
    console.log(str1);

    if (str1.includes('@')) {
        document.getElementById("txtResult").textContent = "valid";
    } else {
        document.getElementById("txtResult").textContent = "invalid";
    }
}
