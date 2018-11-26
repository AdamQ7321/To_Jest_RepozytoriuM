"use strict";
class Liczba_zespolona {
    constructor(re, im) {
        this.re = re;
        this.im = im;
    }
    add(liczba_zespolona2) {
        let re = this.re + liczba_zespolona2.re;
        let im = this.im + liczba_zespolona2.im;
        return new Liczba_zespolona(re, im);
    }
    substract(liczba_zespolona2) {
        let re = this.re - liczba_zespolona2.re;
        let im = this.im - liczba_zespolona2.im;
        return new Liczba_zespolona(re, im);
    }
    toString() {
        console.log(this.re, this.im);
    }
}
let a = new Liczba_zespolona(10, 6);
let b = new Liczba_zespolona(5, 6);
let c = a.add(b);
c.toString();
// tsc complex.ts
//node complex.js
