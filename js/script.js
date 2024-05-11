//Logica: l'utente che scrive negli imput di testo deve ricevere come feedback un biglietto/frase in cui viene riportato il nome dell'utente, i km percorsi e il prezzo, con o senza sconto




let nomePasseggero;

//nell'esempio del prof avviene un evento collegato al bottone, che innesca la funzione "prompt('come ti chiami')" e quindi trasforma il value dell'imput di testo nel nome desiderato...


let etaPasseggero;

let trattaPercors;
let trattaPercorsa = document.getElementById('km')

const bigliettoKM    = 0.21;

const stampa = document.getElementById('stamp');




button.addEventListener('click', function(){

  nomePasseggero = document.querySelector('#nome').value;
  
 //questa cosa non funziona
  trattaPercors = parseInt(document.querySelector('.test').value);
  
  etaPasseggero  = document.querySelector('#età').value;

  const costoBiglietto = bigliettoKM * trattaPercors;

  const costoBig20 = costoBiglietto - (costoBiglietto * 0.2);

  const costoBig40 = costoBiglietto - (costoBiglietto * 0.4);

  console.log('costo del biglietto senza sconti', costoBiglietto);

  if(etaPasseggero < 18){
    console.log('utente20%');
    document.getElementById('content').innerHTML =` Buon viaggio ${nomePasseggero}, hai diritto ad uno sconto del 20%. Prezzo finale: ${costoBig20.toFixed(2)}€ 
    grazie e arrivederci.`
  }else if(etaPasseggero >= 65){
    console.log('utente40%');
    document.getElementById('content').innerHTML =` Buon viaggio ${nomePasseggero}, hai diritto ad uno sconto del 40%. Prezzo finale: ${costoBig40.toFixed(2)}€ grazie e arrivederci`
  }else{
    console.log('utenteNaN%');
    document.getElementById('content').innerHTML =` Buon viaggio ${nomePasseggero}, non ci sono sconti disponibili per te. Prezzo finale: ${costoBiglietto}€ `
  } 
});
