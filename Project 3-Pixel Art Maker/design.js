function makeGrid() {
	$('#button').click(function(e) {
    e.preventDefault();
    $('tr, h6').remove()
		let hei = $('#input_height').val();
		let wid = $('#input_width').val();
		for (i = 0; i < hei; i++) {
			$('#pixel_canvas').append('<tr></tr>');
		};
    let j = 0;
		while (j < wid) {
			$('tr').append('<td></td>');
      j++;
		};
    $('<h6 style="font-size: 15px;">(click a cell in the grid to fill that cell with the chosen color, double click to remove the color)</h6>').insertAfter('h2')
	})
}
$(makeGrid)

function addColor() {
	$('table').on('click','td', function(event) {
		event.preventDefault();
		$(this).css('background-color', $('#colorPicker').val());
	})
}
$(addColor)

function removeColor() {
  $('table').on('dblclick','td', function() {
    $(this).css('background-color', '');
  })
}
$(removeColor)

function clearUp() {
	$('#cleartable').click(function(e) {
    e.preventDefault();
		$('tr, h6').remove();
	});
}
$(clearUp)
