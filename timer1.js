const timer = process.argv.slice(2);
let numArray = [];

if (timer.length === 0)
{
  return;
}

for(let i = 0; i < timer.length; i++)
{
  numArray.push(Number(timer[i]));
}

for(let i = 0; i < numArray.length; i++)
{
 if(!isNaN(numArray[i]) && numArray[i] > 0){
  setTimeout(() => {
    process.stdout.write('\x07');
  },numArray[i] * 1000);
  }
}