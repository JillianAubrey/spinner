let spinChars = ['|', '/', '-', '\\'];
let delay = 0;
let spins = 5;

for (let i = 0; i < spins; i++) {
  for (const char of spinChars) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, delay);
    delay += 100;
  }
}

setTimeout(() => {
  console.log();
}, delay);