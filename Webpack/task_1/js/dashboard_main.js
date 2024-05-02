import $ from 'jquery';
import { debounce } from 'lodash';

function updateCounter(){
    const count = $('#count').data('clicks') || 0;
    $('#count').data('clicks', count + 1);
    $('#count').text(`${count + 1} clicks on the button`);
}

$(document).ready(function() {
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="start-btn">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

$('#start-btn').on('click', debounce(updateCounter, 500));
});