import $ from 'jquery';
import _ from 'lodash';
import './body.css';

function updateCounter() {
    const count = $("#count").data('clicks') || 0;
    $('#count').data('clicks', count + 1);
    $('#count').text(`${count + 1} clicks on the button`);
}
$(function() {
    $('body').append('<button id="start-btn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('#start-btn').on('click', _.debounce(updateCounter, 500));
});