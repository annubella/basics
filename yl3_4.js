const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let apples = 14
readline.question('Mitu pöialpoissi 6 seast tahab õunu? ', gnomes => {
  for(let i = 1; i <= gnomes; i++){
    let applesforgnomes = Math.ceil(Math.random() * 2)
    console.log('põialpoiss saab ' + applesforgnomes + ' õuna')
    apples = apples - applesforgnomes
  }
    console.log('Lumivalgekesele jäi seejärel ' + apples + ' õuna');
    readline.close();
});