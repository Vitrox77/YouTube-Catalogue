import '../styles/search.css';
const $ = require('jquery');


$(document).ready(function() {
$(document).on("click", ".tag", function() {
  
    alert('clicked');
    $(".tag").on('click', function() {
        //(... rest of your JS code)
        alert('clicked');
    });
});});