import '../styles/search.css';
const $ = require('jquery');

$(document).ready(function() {
    $('#search-tag').each(function() {
        var elem = $(this);
        // Save current value of element
        elem.data('oldVal', elem.val());

        // Look for changes in the value
        elem.bind("keyup input paste", function(event) {

            if (elem.data('oldVal') != elem.val()) {
                // addTagUser(elem.val());
                // Updated stored value
                elem.data('oldVal', elem.val());

                // Do AJAX call to get the tag corresponding to the search
                $.ajax({
                    url: '/search/get/' + elem.val(),
                    type: 'GET',
                    data: {
                        'tagName': elem.val()
                    },
                    dataType: 'json',
                    success: function(data) {
                        alert(data);
                        var parsed_data = JSON.parse(data);
                        // alert(parsed_data[0].name);

                        resetAllTags();
                        parsed_data.forEach(element => {
                            if (element.isTagPerso) {
                                addTagUser(element.name, element.id);
                            } else {
                                addTagVideo(element.name, element.id);
                            }
                        });
                    }
                });
            }
            if (elem.val().length == 0) {
                resetAllTags();
            }
        });


    });

    $(document).on("click", ".tag", function() {
        var elem = $(this);
        alert(elem.text());
    });
});

function addTagUser(tagName, tagId) {
    var div_data = $('#tag-user').html() + "<div class=\"col-4 tags-wrap\"><div class=\"tag m-2\">" + tagName + "</div><div>";
    $('#tag-user').html(div_data);
}

function resetAllTags() {
    $('#tag-user').html('');
    $('#tag-video').html('');
}

function addTagVideo(tagName, tagId) {
    var div_data = $('#tag-video').html() + "<div class=\"col-4 tags-wrap\"><div class=\"tag m-2\">" + tagName + "</div><div>";
    $('#tag-video').html(div_data);
}