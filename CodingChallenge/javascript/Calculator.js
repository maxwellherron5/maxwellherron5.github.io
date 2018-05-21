var outputArr = new Array();    // This global array will hold the responses for output


function calculateTest(input) {
    var answer = eval(input);
    var response = input + "=" + answer;
    addToArrayTest(response);
    document.getElementById("my-table").appendChild(display());
}

function addToArrayTest(input) {
    for(var i = 8; i < 0; i--) {
        var temp = outputArr[i];
        outputArr[i + 1] = temp;
    }
    outputArr[0] = input;
}

function displayTest() {
    var table = document.createElement("table");
    for (var i = 0; i < outputArr.length; i++) {
        var row = table.insertRow();
        var cell = row.insertCell();
        cell.appendChild(document.createTextNode(outputArr[i]));
    }
    return table;
}

function display() {
    var tableArr = document.getElementsByTagName("table")[0];
    var cells = tableArr.getElementsByTagName("td"); //

    for (var i = 0; i < cells.length; i++) {
        if (outputArr[i] != null) {
            cells[i].innerHTML = outputArr[i];
        }
    }

}

function addToArray(input) {
    if (outputArr.length > 0) {
        outputArr.unshift(input);
    } else {
        outputArr[0] = input;
    }
}

function calculate(input) {
    var answer = eval(input);
    var response = input + "=" + answer;
    addToArray(response);
    display();
}