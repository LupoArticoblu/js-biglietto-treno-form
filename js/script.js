const nomePasseggero = document.querySelector('#nome');
//const etaPasseggero  = parseInt(prompt('Digitare l\'età del passeggero, in anni compiuti'));
//const trattaPercorsa = parseInt(prompt('Digitare la destinazione, in km da percorrere'));
const bigliettoKM    = 0.21;

const costoBiglietto = bigliettoKM * trattaPercorsa;

const costoBig20 = costoBiglietto - (costoBiglietto * 0.2);

const costoBig40 =
costoBiglietto - (costoBiglietto * 0.4);

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
};
