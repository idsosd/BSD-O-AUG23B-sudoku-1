let activeCellId = 1;

let sudoku_string = "<ul>";
for(i=1; i<=81; i++){
    sudoku_string += "<li id='" + i + "' onclick=\"activateCell(" + i + ")\"><span></span></li>";
}
sudoku_string += "</ul>";
document.getElementById("sudoku").innerHTML = sudoku_string;

function selectCijfer(cijfer){
    document.getElementById(activeCellId).innerText = cijfer;
}

function activateCell(id){
    activeCellId = id;
}