function makeGrid() {
	$('#button').click(function(e) {
    e.preventDefault();
    $('tr, h6').remove()
	let height = $('#input_height').val();
	let width = $('#input_width').val();
	//Table-Solution-1:
	// for (i = 0; i < height; i++) {
	// 	$('#pixel_canvas').append('<tr></tr>');
	// };
    // let j = 0;
	// while (j < width) {
	// 	$('tr').append('<td></td>');
    //  j++;
	// };
	//
	//Table-Solution-2:Using *vanilla JavaScript*:
	const table = document.getElementById('pixel_canvas');
	for (let i = 0; i < height; i++) {
		//Insert rows into the table
		const row = table.insertRow(i);
		for (let j = 0; j < width; j++) {
			//Insert cells into each of the rows
			const cell = row.insertCell(j);
			cell.addEventListener('click', addColor);
			cell.addEventListener('dblclick', removeColor);
		}
	}
    $('<h6 style="font-size: 15px;">(click a cell in the grid to fill that cell with the chosen color, double click to remove the color)</h6>').insertAfter('h2')
	})
}

function addColor() {
	$(this).css('background-color', $('#colorPicker').val());
}


function removeColor() {
    $(this).css('background-color', '');
}

function clearUp() {
	$('#cleartable').click(function(e) {
    e.preventDefault();
		$('td').css('background-color', '');
	});
}

function init() {
  makeGrid();
  addColor();
  removeColor();
  clearUp();
}

$(document).ready(init);