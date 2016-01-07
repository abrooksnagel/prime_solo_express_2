/**
 * Created by abrooksnagel on 1/7/16.
 */
$(function() {
    $('.kickOff').on('click',function() {
        console.log('clicked');
        $.ajax('/getData').then(function(response) {
            //console.log(response);
            $('.content').append('<p>' + response + "</p>");
        });
    });
});