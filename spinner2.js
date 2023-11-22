const spinner = (arr) => {
  let timer = 100;
  for (const sym of arr){
    setTimeout(() => {
      process.stdout.write('\r' + sym);
    }, timer)
    timer += 200;
  }
}
const arr = ['| ', '/ ', '- ','\\ ', '/ ', '- ', '\\ ', '| ', '\n'];

spinner(arr);




// setTimeout(() => {
//   process.stdout.write('\r| ')
// }, 100)

// setTimeout(() => {
//   process.stdout.write('\r/ ')
// }, 300)

// setTimeout(() => {
//   process.stdout.write('\r- ')
// }, 500)
// setTimeout(() => {
//   process.stdout.write('\r\\ ')
// }, 700)
// setTimeout(() => {
//   process.stdout.write('\r/ ')
// }, 900)
// setTimeout(() => {
//   process.stdout.write('\r- ')
// },1100)
// setTimeout(() => {
//   process.stdout.write('\r\\ ')
// },1300)
// setTimeout(() => {
//   process.stdout.write('\r| ')
// },1500)