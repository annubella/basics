const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Mitu täringut sa tahad veeretada? ', count => {
  for(let i = 1; i <= count; i++){
    console.log(Math.ceil(Math.random() * 6));
  }
  readline.close();
});