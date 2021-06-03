// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi anche "Fizz" di fianco al numero e per i multipli di 5 stampi "Buzz". Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz". :collisione:
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

//esercizio sopra
// for(var i=1; i<=100; i++){  
//     if(i % 3 == 0 && i % 5 == 0){
//         document.getElementById('numList').innerHTML +=(i+'FizzBuzz <br>');
//     } else if(i % 5 == 0){
//         document.getElementById('numList').innerHTML +=(i+'Buzz <br>');
//     } else if(i % 3 == 0){
//         document.getElementById('numList').innerHTML +=(i+'Fizz <br>');
//     } else {
//         document.getElementById('numList').innerHTML +=(i+'<br>');
//     }
// }

//%6 - bonus

for(var i=1; i<=100; i++){
    document.getElementById('numList').innerHTML +=('<br>'+i);
    if (i % 3 == 0){
        document.getElementById('numList').innerHTML += ('Fizz');
    }
    if (i % 5 == 0){
        document.getElementById('numList').innerHTML += ('Buzz');
    }
    if (i % 6 == 0){
        document.getElementById('numList').innerHTML += ('Boolean');
    }
}




