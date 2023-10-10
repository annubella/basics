const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Mitu korda äratus heliseb? ', aratus => {
  for(let i = 0; i < aratus; i++){
    console.log('Tõuse ja sära!');
  }
  readline.close();
});