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
                addTagUser(elem.val());
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
            if(elem.val().length == 0){
                resetTagUser();
            }
        });

        
    });
    
    $(document).on("click", ".tag", function() {
        var elem = $(this);
        alert(elem.text());
    });
});

function addTagUser(tag) {
    var div_data = "<div class=\"col-4 tags-wrap\"><div class=\"tag m-2\">" + tag + "</div><div>";
    $('#tag-user').html(div_data);
}
function resetTagUser(){
    $('#tag-user').html('');
}

function addTagVideo(tag){
    $('#search-tag').val(tag);
    $('#search-results').html('');
}