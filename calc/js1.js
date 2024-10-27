let c = 0;

function appendtodisplay(value) {
    if(document.getElementById("display").value === "Error") 
        {
        document.getElementById("display").value = "";
        }
    if (value === "clr") {
        document.getElementById("display").value = "";
        c = 0; // Reset c when cleared
    } else if (c !== 0) {
        document.getElementById("display").value += value;
    } else if (c === 0 && /[0-9]/.test(value)) {
        document.getElementById("display").value += value;
        c++;
    }
}

function res() {
    try {
        var result = document.getElementById("display").value;
        document.getElementById("display").value = eval(result);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
