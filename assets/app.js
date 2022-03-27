/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

require('bootstrap');
const $ = require('jquery');

var submit_button = $('#import_csv_submit');
var import_scv_reset= $('#import_csv_reset');
var before_submit_button = $('#before-submit-button');
var before_submit_div = $('#before-submit-div');
var div_logo_csv_post_submit = $('#modal-div-logo-post-submit');
var modal_btn_csv = $('.modal-btn-CSV');
var after_submit_logo = $('#after-submit-logo');

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
		import_scv_reset.html('<i class="bi bi-x-circle"></i>');

		//Changement du texte affiché sur la fenêtre
		before_submit_div.addClass('d-none');
		after_submit_logo.removeClass('d-none');
	});
});

//event listener on click bouton reset
import_scv_reset.on('click', function() {
	//Gestion du bouton de reset et du bouton d'upload
	$('#import_csv_CSV_file').val('');
	$('#import_csv__token').val('');
	import_scv_reset.addClass('d-none');
	modal_btn_csv.html("Browse files"); 
	modal_btn_csv.addClass("btn btn-danger");

	submit_button.addClass('d-none');

	before_submit_div.removeClass('d-none');
	after_submit_logo.addClass('d-none');
	
});



