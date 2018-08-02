function f(x) {
    return  -x / 4 + 1.5;
}

let iteration = 0;


let a = -10;
let b = 10;
let x = null;
do {
    iteration++;
    let m = (a + b) / 2;
    console.log('Iteration ' + iteration);
    console.log(`a: ${a}, m: ${m}, b: ${b}`)
    console.log(`f(a): ${f(a)}, f(m): ${f(m)}, f(b): ${f(b)}`)


    if (f(a) === 0) {
        x = a;
        break;
    }
    if (f(b) === 0) {
        x = b;
        break;
    }
    if (f(m) === 0) {
        x = m;
        break;
    }
    // if ((f(a) > 0) && (f(m) > 0)||(f(a) < 0) && (f(m) <F 0))

    if ((f(a) > 0) && (f(m) > 0) || (f(a) < 0) && (f(m) < 0)) {
        a = m;
    }
    else {

        b = m;
    }




    if ((iteration > 1000) || (b - a < 0.1)) {
        x = m;
        break;
    }
} while (true);

console.log('Result: x =', x);