var outputArr = new Array();    // This global array will hold the responses for output

function display() {
    var tableArr = document.getElementsByTagName("table")[0];
    var cells = tableArr.getElementsByTagName("td"); //This array will hold all of the cells in the table

    for (var i = 0; i < cells.length; i++) {
        if (outputArr[i] != null) {     //Verifies whether or not there is an entry in the cell
            cells[i].innerHTML = outputArr[i];
        }
    }

}

function addToArray(input) {
    if (outputArr.length > 0) {
        outputArr.unshift(input);   //This places the new entry into the first slot of the array
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