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



$(document).ready(function() {
	$('#import_csv_CSV_file').on('change', function() {
		//get the file name
		var fileName = $(this).val();
		fileName = $(this).val().split('/').pop().split('\\').pop();
		//replace the "Choose a file" label
		$('.modal-btn-CSV').html(fileName);
		//change button class
		$('#logo-csv-post-submit').removeClass('logo-csv-post-submit');
		$('#to_replace').html('<div class="mb-4"> Le fichier a été uploadé ! </div>');
		$('#post-submit-div').removeClass('modal-post-submit-hidden');
		
	});
});




