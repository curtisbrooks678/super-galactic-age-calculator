import SpaceHuman from './spacehuman.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#triangle-checker-form').submit(function(event) {
    event.preventDefault();
    const age1 = $('#age').val();
    const lifeExpect1 = $('#life-expectancy').val();
    const user = new SpaceHuman(age1, lifeExpect1);
    user.mercury();
    $('#space-ages').html("<p> Age on Mercury: " + user.inputAge + "</p>");
  });
});