import '../styles/search.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
const $ = require('jquery');

// array of video id
var videosId = ["1","2"];
// array of tag id
var tagsId = [];
// Timeout pour la recherche des tags
var inputSearchTimeout
// Event listener for the search input
var inputSearch = $('#search-tag');

var tooltipTriggerList = []

$(document).ready(function() {
    toggleAllTooltips();
    $('#tagsModal').on('shown.bs.modal', function () {
        alert()
        $('#search-tag').focus();
    });
    var elem = inputSearch;
    // Save current value of element
    elem.data('oldVal', elem.val());

    // Look for changes in the value
    elem.bind("keyup input paste", function(event) {
        if (elem.data('oldVal') != elem.val()) {
            //set timeout of start finding tags
            clearTimeout(inputSearchTimeout);
            startSearchingTags(elem)
        }
        
        if (elem.val().length == 0) {
            resetAllTags();
            hideCreateTagButton();
        }
    });
    

    $(document).on("click", ".tag", function() {
        var elem = $(this);
        addTagRecap(elem.text(), elem.attr('id'));
    });
    $(document).on("click", ".tag-recap-selected", function() {
        var elem = $(this);
        removeTagRecap(elem.attr('id'));
    });

    // when clicking on button add tag, we add all the video to the video list 
    $('#addTagButton').click(function() {
        $('.form-check-video-res:checkbox:checked').each(function () {
            videosId.push($(this).attr('id'));
        });
        alert(videosId);
        
    });
    // when clicking on button submit tag, call the function submitTags
    $('#submit-tags').click(function() {
        // alert(videosId)
        // alert(tagsId)
        submitTags();
        resetTagRecap();
        
    });
    // when clicking on button add tag, call the function addNewTag
    $('#create-tag').click(function() {
        // collect the string if the input called search-tag
        var tagName = $('#search-tag').val();
        var tagId = $('#search-tag').attr('id');
        alert(tagId);
        // alert(tagName);
        if(tagName.length > 0) {
            addNewTag(tagName);
        }
    });
});

function startSearchingTags(elem) {
    // alert("Searching tags");
    inputSearchTimeout = setTimeout(function() {
        // Updated stored value
    elem.data('oldVal', elem.val());
    // do a set timeout of the rest of the function
    
    if(elem.val() != ''){
        // Do AJAX call to get the tag corresponding to the search
        $.ajax({
            url: '/search/get/' + elem.val(),
            type: 'GET',
            data: {
                'tagName': elem.val()
            },
            dataType: 'json',
            success: function(data) {
                if (data.length == 2) {
                    showCreateTagButton();
                }else {
                    hideCreateTagButton();
                }
                var parsed_data = JSON.parse(data);        
                resetAllTags();
                parsed_data.forEach(element => {
                    if (element.isTagPerso) {
                        addTagUser(element.name, element.id);
                    } else {
                        addTagVideo(element.name, element.id);
                    }
                });
                toggleAllTooltips();
            },
            error: function(data) {
                // alert();
                showCreateTagButton();
            }
        });
    }
    
    }, 400);
}
function toggleAllTooltips(){
    console.log("Toggle all tooltips");
    tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
}
function hideAllTooltips(){
    console.log("hidding all tooltips");
    $(".bs-tooltip-top").remove();
    tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl).hide();
    });
}

function addTagUser(tagName, tagId) {
    var div_data = $('#tag-user').html() + "<div class=\"col-4 tags-wrap\" data-bs-toggle='tooltip' data-bs-placement='top' title='"+tagName+"'><div class=\"tag ellipsis m-2\" id=\""+ tagId +"\" >" + tagName + "</div><div>";
    $('#tag-user').html(div_data);
}

function addTagVideo(tagName, tagId) {
    var div_data = $('#tag-video').html() + "<div class=\"col-4 tags-wrap\" data-bs-toggle='tooltip' data-bs-placement='top' title='"+tagName+"'><div class=\"tag ellipsis m-2\" id=\""+ tagId +"\">" + tagName + "</div><div>";
    $('#tag-video').html(div_data);
}

function addTagRecap(tagName, tagId) {
    if($.inArray(tagId, tagsId) == -1){
        var div_data = $('#tag-recap').html() + "<div class=\"col-12 tags-wrap\" data-bs-toggle='tooltip' data-bs-placement='top' title='"+tagName+"'><div class=\"tag-recap-selected ellipsis m-2\" id=\"recap-"+ tagId +"\">" + tagName + "</div><div>";
        $('#tag-recap').html(div_data);
        // add the tag id to the array tagsId
        tagsId.push(tagId);
        hideAllTooltips();
        toggleAllTooltips();

    }else{
        //Do not hide this alert
        alert("Tag already added")
    }
}

function removeTagRecap(tagId) {
    $("#"+tagId).remove();
    tagsId.splice( $.inArray(tagId, tagsId), 1);
    hideAllTooltips();
}

function resetTagRecap(tagId) {
    $('#tag-recap').html('');
}

function resetAllTags() {
    $('#tag-user').html('');
    $('#tag-video').html('');
}

function showCreateTagButton() {
    $('#create-tag').show();
}

function hideCreateTagButton() {
    $('#create-tag').hide();
}

function submitTags() {
    videosId.forEach(videoId => {
        tagsId.forEach(tagId => {
            $.ajax({
                url: 'search/insert/tag/' + videoId + '/' + tagId,
                type: 'GET',
                data: {
                    'videoId': videoId,
                    'tagId': tagId,
                },
                dataType: 'json',
                success: function(data) {
                    // alert(data);
                }
            });
        });
    });
}

function addNewTag(tagName) {
    $.ajax({
        url: 'search/create/tag/' + tagName,
        type: 'POST',
        data: {
            'tagName': tagName
        },
        dataType: 'json',
        success: function(data) {
            // alert(data);
            clearTimeout(inputSearchTimeout);
            startSearchingTags(inputSearch);
        }
    });
}