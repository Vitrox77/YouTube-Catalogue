/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
//require bootstrap-datepicker
import 'bootstrap-datepicker/js/bootstrap-datepicker';

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

//import datepicker
import './bootstrap';

require('bootstrap');
const $ = require('jquery');

var submit_button = $('#import_csv_submit');
var import_scv_reset = $('#import_csv_reset');
var before_submit_div = $('#before-submit-div');
var modal_btn_csv = $('.modal-btn-CSV');
var after_submit_logo = $('#after-submit-logo');
var post_submit_div = $('#post-submit-div');

$(document).ready(function() {
    $('#import_csv_CSV_file').on('change', function() {
        //get the file name
        var fileName = $(this).val();
        fileName = $(this).val().split('/').pop().split('\\').pop();

        // Bouton de validation du formulaire
        submit_button.removeClass('d-none');

        //replace the "Choose a file" label
        modal_btn_csv.html(fileName);
        modal_btn_csv.removeClass("btn btn-danger");

        // Bouton de reset de l'input file
        import_scv_reset.removeClass('d-none');
        import_scv_reset.html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>');

        //Changement du texte affiché sur la fenêtre
        before_submit_div.addClass('d-none');
        post_submit_div.removeClass('d-none');
        after_submit_logo.removeClass('d-none');

    });

    $('.js-datepicker').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        todayHighlight: true,
        language: 'fr'
    });

});

//event listener on click bouton reset
import_scv_reset.on('click', function() {
    //Gestion du bouton de reset et du bouton d'upload
    $('#import_csv_CSV_file').val('');
    import_scv_reset.addClass('d-none');
    modal_btn_csv.html("Browse files");
    modal_btn_csv.addClass("btn btn-danger");

    submit_button.addClass('d-none');

    before_submit_div.removeClass('d-none');
    post_submit_div.addClass('d-none');
    after_submit_logo.addClass('d-none');


});


// var myModal = document.getElementById('myModal');
// myModal.addEventListener('shown.bs.modal', function() {});


// Show the dropzone when dragging files (not folders or page
// elements). The dropzone is hidden after a timer to prevent 
// flickering to occur as `dragleave` is fired constantly.
/*
var dragTimer;
$(document).on('dragover', function(e) {
	e.preventDefault()
	e.stopPropagation()
  var dt = e.originalEvent.dataTransfer;
  if (dt.types && (dt.types.indexOf ? dt.types.indexOf('Files') != -1 : dt.types.contains('Files'))) {
    $("#dropzone").show();
	before_submit_div.addClass("d-none");
    window.clearTimeout(dragTimer);
  }
});

$(document).on('dragleave dragend dragstop', function(e) {
	e.preventDefault()
	e.stopPropagation()
    window.clearTimeout(dragTimer);
    dragTimer = window.setTimeout(function() {
		alert();

        $("#dropzone").hide();
		before_submit_div.removeClass("d-none");
    }, 85);
});
$(document).on('drop', function(e) {
	$("#dropzone").hide();
	before_submit_div.removeClass("d-none");
	e.preventDefault()
	e.stopPropagation()
	//read drag and drop filename
	var fileName = e.originalEvent.dataTransfer.files[0];
	alert(fileName.name);
	$('#import_csv_CSV_file').files = fileName;
	$('#import_csv_CSV_file').val(fileName);
	alert($('#import_csv_CSV_file').files[0]);
	$('#import_csv__token').val(fileName);
});

var myModal = document.getElementById('myModal');
myModal.addEventListener('shown.bs.modal', function() {});

var inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs, function(input) {
    var label = input.nextElementSibling,
        labelVal = label.innerHTML;

    input.addEventListener('change', function(e) {
        var fileName = '';
        if (this.files && this.files.length > 1)
            fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        else
            fileName = e.target.value.split('\\').pop();

        if (fileName)
            label.querySelector('span').innerHTML = fileName;
        else
            label.innerHTML = labelVal;
    });
});
*/