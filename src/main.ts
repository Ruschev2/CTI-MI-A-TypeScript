//fizzBuzz in typescript
const fizzBuzz = (num : number)  => {
    for (let i = 1; i <= num; i++) {
        //if the num is divisible by 3 and 5, we print both the num and 'fizzbuzz'
        if (i % 15 === 0) {
            console.log(i + " fizzbuzz");
        }
        //if the num is divisible by 3, we print both the num and 'fizz'
        else if (i % 3 === 0) {
            console.log(i + " fizz");
        }
        //if the num is divisible by 5, we print both the num and 'buzz'
        else if (i % 5 === 0) {
            console.log(i + " buzz");
        }
        //if the num is not divisible by 3 or 5, we only print the num
        else {
            console.log(i);
        }
    }
};

//executing function
fizzBuzz(100);