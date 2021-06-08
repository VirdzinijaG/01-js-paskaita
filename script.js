       
      "use strict" // rezimas is ne griezto i grieztas, padeda isvengti logikos klaidu
      // kintamojo apibrezimas
       var x;
       var y;
       var z, g, p, i; //kelios reiksmes kintamajame, eilute visada baigiasi ;
       // Reiksmes kintamajam priskyrimas
       x = 16;
       y = 16.6; // vietoj kablelio taskas
       z = "Labas pasauli"; // gali buti dvigubos kabutes" arba viengubos '
       g = 'Labas pasauli';
       p = "Imone 'Geri studentai'";
       i = 'Imone "Geri studentai"';


       // Sudetis
       var suma, a, b; 
       a = 5;
       b = 6;
       suma = a + b; // 11

       // skirtumas 
       var skirtumas;
       a = 11;
       b = 3;
       skirtumas = a - b; // 8

       a = suma; // 11

       // daugyba
       var sandauga;
       sandauga = a * b; //33, nes nuskaite paskutinius nurodymus a = 11 b= 3

       // dalyba 
       var rez;
       rez = sandauga / 2 // 33/2 = 16.5


       // liekanos skaiciavimas
       var liekana;
       liekana = sandauga % 2; // 33/2 = 1

       // Kelimas laipsniu
       rez = 5 ** 2; // kelimas laipsniu ** zymimas

       sandauga++; // ++ pridejimas per viena skaiciu 34 rezulatats 33+1
       sandauga = sandauga + 1; // prie 34 pridejo 1 rezultatas 35

       sandauga-- // atemimas per viena skaiciu 34 35-1

       sandauga += 1; // 35 prie sandaugos pridejo 1


       //
       var tekstas, skaicius;
       tekstas = "Tekstas";
       skaicius = 5;
       suma = tekstas + skaicius; // visa kintamaji konvertuoja i teksta tekstas5

       // dalyba is 0
       var isnulio = 5/0; // ismeta infinity begalybe

       var bendrastekstas; // string
       bendrastekstas = "Suma:" + suma + " Skirtumas: " + skirtumas + " Sandauga: " + sandauga;


       var elementas;
       elementas = document.querySelector(".tekstas");

       var neigiami, sakni;
       neigiami = -5 + (-4);

       sakni = Math.sqrt(4) // saknies traukimas 

       alert(neigiami);

       // Kintamuju isvedimas
       console.log(suma);
       console.log(skirtumas);
       console.log(sandauga);
       console.log(rez);
       console.log(a);
       console.log(liekana);
       console.log(rez);
       console.log(isnulio);
       console.log(bendrastekstas);
       console.log(neigiami);
       console.log(sakni);
       
       

        //console.log("Labas pasauli");
        //console.log(document.querySelector(".tekstas"));
        //console.log(document.querySelector(".tekstas").classList);
        //console.log(document.querySelector(".tekstas").textContent);

        //document.querySelector(".tekstas").classList.add('javascript-klase');
        //document.querySelector(".tekstas").classList.remove('negrazus-tekstas');

        //console.log(document.querySelector(".tekstas").classList);