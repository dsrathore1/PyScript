const namePrinter = (name = "David") => {
    console.log(`My name is ${name}`);
}

const multiply = (a=3, b) => {
    console.log(a * b);
}

namePrinter();

multiply(undefined
    , 3);