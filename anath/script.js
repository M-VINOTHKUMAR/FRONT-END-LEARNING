function calculator() {
    var result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
    deleteresult();
    calculate();
}
function calculate() {
    var result = document.getElementById("key").value;
    document.getElementById("display").value = eval(result);
}
function deleteresult() {
    document.getElementById("display").value = "";
}