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
    console.log(user);
    user.planets();
    user.years();
    $('ul#space-ages').append("<li> Age on Mercury: " + user.mercuryAge + "</li>");
    $('ul#space-ages').append("<li> Age on Venus: " + user.venusAge + "</li>");
    $('ul#space-ages').append("<li> Age on Mars: " + user.marsAge + "</li>");
    $('ul#space-ages').append("<li> Age on Jupiter: " + user.jupiterAge + "</li>");
    $('ul#space-ages').append("<li> Life Expectancy on Mercury: " + user.mercuryLifeExpectancy + "</li>");
    $('ul#space-ages').append("<li> Life Expectancy on Venus: " + user.venusLifeExpectancy + "</li>");
    $('ul#space-ages').append("<li> Life Expectancy on Mars: " + user.marsLifeExpectancy + "</li>");
    $('ul#space-ages').append("<li> Life Expectancy on Jupiter: " + user.jupiterLifeExpectancy + "</li>");
    if (parseInt(user.inputAge) < parseInt(user.lifeExpectancy)) {
      $('ul#space-ages').append("<li> Years Left on Mercury: " + user.mercuryYearsLeft + "</li>");
      $('ul#space-ages').append("<li> Years Left on Venus: " + user.venusYearsLeft + "</li>");
      $('ul#space-ages').append("<li> Years Left on Mars: " + user.marsYearsLeft + "</li>");
      $('ul#space-ages').append("<li> Years Left on Jupiter: " + user.jupiterYearsLeft + "</li>");
    }
    if (parseInt(user.inputAge) > parseInt(user.lifeExpectancy)) {  
      $('ul#space-ages').append("<li> Years Surpassed Life Expectancy on Mercury: " + user.mercuryYearsAhead + "</li>");
      $('ul#space-ages').append("<li> Years Surpassed Life Expectancy on Venus: " + user.venusYearsAhead + "</li>");
      $('ul#space-ages').append("<li> Years Surpassed Life Expectancy on Mars: " + user.marsYearsAhead + "</li>");
      $('ul#space-ages').append("<li> Years Surpassed Life Expectancy on Jupiter: " + user.jupiterYearsAhead + "</li>");
    }
  });
});