let sudoku_string = "<ul>";
for(i=1; i<=81; i++){
    sudoku_string += "<li><input class='form-control text-center' style='font-size: 52px;' value='" + i + "'></li>";
}
sudoku_string += "</ul>";
document.getElementById("sudoku").innerHTML = sudoku_string;