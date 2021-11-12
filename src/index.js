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
    user.planets();
    $('ul#space-ages').append("<li> Age on Mercury: " + user.mercuryAge + "</li>");
    $('ul#space-ages').append("<li> Age on Venus: " + user.venusAge + "</li>");
    $('ul#space-ages').append("<li> Age on Mars: " + user.marsAge + "</li>");
    $('ul#space-ages').append("<li> Age on Jupiter: " + user.jupiterAge + "</li>");

    // $('ul#space-ages').append("<li> Years Left or Years Surpassed Life Expectancy on Mercury: " + user.spaceYears + "</li>");
    
    
    // $('ul#space-ages').append("<li> Years Left or Years Surpassed Life Expectancy on Venus: " + user.spaceYears + "</li>");
    
    
    
    // $('ul#space-ages').append("<li> Years Left or Years Surpassed Life Expectancy on Mars: " + user.spaceYears + "</li>");
    
    // $('ul#space-ages').append("<li> Years Left or Years Surpassed Life Expectancy on Jupiter: " + user.spaceYears + "</li>");
  });
});