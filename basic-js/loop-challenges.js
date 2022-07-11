// Print odds 1-20
console.log('**** 1.Print odds 1-20 ****');
for (let i = 0; i < 21; i++) {
    if (i % 2 != 0) console.log(`${i} is odd`);
}

// Decreasing Multiples of 3
console.log("**** 2.Decreasing Multiples of 3 ****");
for (let i = 101; i > 0; i--) {
    if (i % 3 == 0) console.log(`${i} is divisible by 3`);
}
// Print the sequence
console.log("**** 3.Print the sequence ****")
for (let i = 4; i > -4; i -= 1.5) {
    console.log(i);
}

// Sigma
console.log("**** 4. Sigma ****");
let sum = 0;
for (let i = 1; i < 101; i++) {
    sum += i;
}
console.log(sum);

// Factorial
console.log("**** 4. Factorial ****");
let product = 1;
for (let i = 1; i < 13; i++) {
    product *= i;
}
console.log(product);