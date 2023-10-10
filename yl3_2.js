const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Mitu  ringi jooksed? ', ring => {
  let sumcarrots = 0
  for(let i = 1; i <= ring; i++){
    if(i % 2 == 0){
      sumcarrots = sumcarrots + i
    }
  }
  console.log('Joostud ringide eest saad ' + sumcarrots + ' porgandit');
  readline.close();
});