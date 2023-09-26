const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage ainepunktide arv: ', ainepunkt => {
  readline.question('Sisestage nädalate arv: ', nädal => {
      let kursuseid = Number(ainepunkt) * 26;
      let nädalas = Math.round(kursuseid / Number(nädal),1);
      console.log('Ühe nädala eeldatav ajakulu on teil ' + nädalas + ' tundi' );
      readline.close();
  })
})