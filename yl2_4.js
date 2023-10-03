const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Kas soovite istekohta valida ("ise") või loosida ("loos")? ', valimine => {
  let istekoht
  let suvaline
  if (valimine == 'loos') {
    istekoht = 'istekoht loositi, '
    if (Math.round(Math.random() * 3) == 1){
      suvaline = 'Aknakoht'
    } else {
      suvaline = 'Vahekäigukoht'
    }
    console.log(istekoht + suvaline)
    readline.close();
  }

  if (valimine == 'ise'){
  
  //readline.close()
  //})
  readline.question('kas soovite istuda akna ääres ("aken") või mujal ("muu")? ', iste => {
    let istekoht
    if (iste == 'aken'){
      istekoht = 'Valisite ise. Aknakoha'
    } else if (iste == 'muu'){
      istekoht = 'valisite ise. Vahekäigukoha'
    }
    console.log(istekoht)
    readline.close();
  });
}
})


//if (valimine == 'ise')