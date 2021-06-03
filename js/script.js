// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi anche "Fizz" di fianco al numero e per i multipli di 5 stampi "Buzz". Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz". :collisione:
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

var num;
var arrayNum = [];

// stampare i numeri da 1 a 100
for(var i=0; i<100; i++){
    num = i+1;
    
    // se multipli di 3 aggiungere Fizz
    if(num % 3 == 0 && num % 5 != 0){
        arrayNum.push(num+'Fizz');
    } // se multipli di 5 aggiungere Buzz
    else if(num % 5 == 0 && num % 3 != 0){
        arrayNum.push(num+'Buzz');
    } // se divisibile sia per e che per 5
    else if(num % 3 == 0 && num % 5 == 0){
        arrayNum.push(num+'FizzBuzz');
    } else {
        arrayNum.push(num);
    }
}

console.log(arrayNum);

