const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Mis on praegune õhutemperatuur väljas? (°C) ', temp => {
  if (Number(temp) > 4) {
    oht = 'Ei ole  ohtu, et auto jäätuks.';
  } else {
    oht = 'On oht, et auto jäätub.';
  }
    console.log(oht);
    readline.close();
});