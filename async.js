// CODICE ASINCRONO IN JS
// JS è in linguaggio basato su un sistema ad eventi "non-blocking" -> l'esecuzione di JS non si ferma mai, e per sua natura
// NON attenderà la conclusione di un'operazione asincrona (come un timeout, una chiamta di rete etc.) prima di proseguire.

const countUntilThree = function () {
  setTimeout(function () {
    console.log('conto fino a 3...')
  }, 3000)
}

const pageStart = function () {
  countUntilThree()
  console.log('FINITO!')
}

// pageStart()

// 1) risolviamo questo problema con le callback
// una callback è una funzione passata come parametro ad un'altra funzione

const countUntilThreeWithCallback = function (nextCode) {
  // lavorare con le callbacks prevede che la funziona asincrona (countUntilThreeWithCallback) venga invocata GIÀ
  // con il pezzo di istruzione successivo da eseguire
  // perchè è solo lei (countUntilThreeWithCallback) che saprà quando sarà terminata
  console.log('conto fino a 3...')

  setTimeout(() => {
    nextCode()
  }, 3000)

  // più elegantemente potrebbe venire scritto anche così
  // setTimeout(nextCode, 3000)
}

const pageStartWithCallback = function () {
  countUntilThreeWithCallback(function () {
    // questo parametro rappresenta COSA FARE DOPO IL TERMINE DELL'OPERAZIONE ASYNC (il setTimeout)
    console.log('FINITO!')
  })
}

pageStartWithCallback()
