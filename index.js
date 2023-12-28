function setValue() {
    const inputElement1 = document.getElementById("exampleInput1").value;
    const inputElement2 = document.getElementById("exampleInput2").value;

    document.getElementById('disp').innerHTML = inputElement1 + " : " + inputElement2;
    inputElement.value = "";

}
