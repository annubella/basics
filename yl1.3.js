const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('sisestage astme alus: ', alus => {
  readline.question('sisesatge astendaja: ', aste => {
    console.log('vastus on ' + Number(alus**aste));
    readline.close();
  })
});