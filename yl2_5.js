const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage kirja suurus: ', suurus => {
  readline.question('Sisestage kirja teema pealkiri: ', nimi => {
    readline.question('Kas kirjaga on kaasas fail: ', fail => {
      if(nimi == "" || (fail == "jah" && suurus > 1)){
        console.log("Kiri on spämm")
      } else {
        console.log("Kiri ei ole spämm")
      }
      readline.close()
    })
  })
})