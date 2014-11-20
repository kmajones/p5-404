
//Random Message Generator - Various RoosterTeeth Quotes, sligthly altered
$(document).ready(function(){

var msg = ['\"Ask me about my Zombie Plan\"', '\"Technical Difficulties\"', '\"This website looks even better in slow motion\"', '\"This page is still in the air. Please contact Haywood Airlines for further inquiries.\"', '\"Mogar is not ready\"', '\"We are sorry. Team Lads action News is out of office.\" ', '\"Goddammit Barb!\"', '\"Drunk Burnie: Youre all drunk\"','\"Lets Play\"'];

var randomValue = msg[Math.floor(msg.length * Math.random())];



console.log(randomValue);
$('.message').text(eval('randomValue'));

  $(".message").squishy({maxWidth:500});
  });