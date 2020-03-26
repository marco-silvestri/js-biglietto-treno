/* TODO Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
Mostrare a schermo il prezzo del biglietto, indicando anche se è stato applicato un eventuale sconto. */

//1 Declare inputs

var tripKm;
var passengerYob;

//2 Declare variables;

var priceKm = 0.21;
var priceDiscount;
var priceGross;
var priceNet;
var todayYear = new Date().getFullYear();
var passengerAge;
var discount;

//3 Declare output references

var outputPrice = document.getElementById('outputLine1');
var outputDiscount = document.getElementById('outputLine2');
var outputDebug = document.getElementById('debugging');

//4 Main logic

tripKm = parseInt(prompt('Please, tell us the number of Km you would like to travel'));

if (tripKm >= 10 && tripKm <= 100000) {
  passengerYob = parseInt(prompt('Please, insert your year of birth (YYYY)'));
  if (passengerYob >= 1903 && passengerYob <= todayYear) {
    priceGross = priceKm * tripKm;
    passengerAge = todayYear - passengerYob;
    if (passengerAge < 18 ) {
      discount = '20%';
      priceDiscount = priceGross * 0.2;
      priceNet = priceGross.toFixed(2) - priceDiscount.toFixed(2);
      outputPrice.innerHTML = 'The total cost of the ticket is ' + priceNet + ' euro.';
      outputDiscount.innerHTML = 'A discount of ' + discount + '  was applied. the original price was ' + priceGross.toFixed(2) + ' euro.';
    }
    else if (passengerAge > 65) {
      discount = '40%';
      priceDiscount = priceGross * 0.4;
      priceNet = priceGross.toFixed(2) - priceDiscount.toFixed(2);
      outputPrice.innerHTML = 'The total cost of the ticket is ' + priceNet + ' euro.';
      outputDiscount.innerHTML = 'A discount of ' + discount + ' was applied. the original price was ' + priceGross.toFixed(2) + ' euro.';
    }
    else {
      priceNet = priceGross.toFixed(2);
      outputPrice.innerHTML = 'The total cost of the ticket is ' + priceNet + ' euro.';
      outputDiscount.innerHTML = 'We could not apply any discont.';
    }
  }
  else if (passengerYob < 1903) {
    outputDebug.innerHTML = 'We are sorry, but do not serve ghosts!';
  }
  else if (passengerYob >= todayYear) {
    outputDebug.innerHTML = 'Are you sure that your mum has even planned you?';
  }
  else if (isNaN(passengerYob)) {
    outputDebug.innerHTML = 'Error 42: contact an admin to restart the universe.';
  }
}
else if (tripKm < 10) {
  outputDebug.innerHTML = 'Sorry, we do not serve such short routes.';
}
else if (tripKm > 100000) {
  outputDebug.innerHTML = 'To buy the Space Shuttle\'s ticket, please go to the next till.';
}
else {
  outputDebug.innerHTML = 'Executing Order 66, terminating all the Jedi.';
}
