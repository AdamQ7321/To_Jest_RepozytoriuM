


class Liczba_zespolona{

    private re: number;
    private im: number;

    constructor(re:number, im: number){
        this.re=re;
        this.im=im;
    }

    add(liczba_zespolona2:Liczba_zespolona){

        let re=this.re+liczba_zespolona2.re;
        let im=this.im+liczba_zespolona2.im;

        return new Liczba_zespolona(re,im);

    }
    substract(liczba_zespolona2:Liczba_zespolona){

        let re=this.re-liczba_zespolona2.re;
        let im=this.im-liczba_zespolona2.im;

        return new Liczba_zespolona(re,im);
    }

    toString() {

        console.log(this.re, this.im);
    }
}

let a= new Liczba_zespolona(10,6);
let b=new Liczba_zespolona(5,6);
let c= a.add(b);
c.toString();

// tsc complex.ts
//node complex.js                       Konsola
//tsc -p tsconfig.json
