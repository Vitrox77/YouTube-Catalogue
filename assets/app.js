/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
//require bootstrap-datepicker
require('bootstrap-datepicker/js/bootstrap-datepicker')

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

//import datepicker
import './bootstrap';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

require('bootstrap');
const $ = require('jquery');

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

$(document).ready(function() {
    // you may need to change this code if you are not using Bootstrap Datepicker
    $('.js-datepicker').datepicker({
        format: 'yyyy-mm-dd'
    });
});