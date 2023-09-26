const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisesatge oma nimi: ', nimi => {
  readline.question('Sisestage lubatud kiirus (km/h): ', Lkiirus => {
    readline.question('Sisestage tegelik kiirus (km/h):', Tkiirus => {
      let trahv = (Number(Tkiirus) - Number(Lkiirus)) * 3;
      let oigeTrahv = Math.min(190, trahv);
      console.log(nimi + ', teie kiiruse ületamise eest trahv on ' + oigeTrahv + ' eurot.');
      readline.close();
    })
  })
})