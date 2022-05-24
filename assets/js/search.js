import '../styles/search.css';
const $ = require('jquery');



$(document).ready(function() {
    $('#search-tag').each(function() {
        var elem = $(this);
        // Save current value of element
        elem.data('oldVal', elem.val());
     
        // Look for changes in the value
        elem.bind("keyup input paste", function(event){

            if (elem.data('oldVal') != elem.val()) {

                // Updated stored value
                elem.data('oldVal', elem.val());

                // Do AJAX call to get the tag corresponding to the search
                $.ajax({
                    url: '/search',
                    type: 'POST',
                    data: {
                        'search': elem.val()
                    },
                    success: function(data) {
                        $('#search-results').html(data);
                    }
                });
            }
        });
    });
    
    $(document).on("click", ".tag", function() {
  
    alert('clicked');
    
    });
});

