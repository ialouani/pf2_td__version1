function fibo(n){
    if(n<=2) return 1;
    else return fibo(n-1)+fibo(n-2);}

/*let b1=Date.now();
console.log(fibo(5));//4,3=>3,2,2,1=>2+3=5.
console.log(fibo(42));//a ce stade ca devient un peu LONG.../////
let b2=Date.now();
console.log(b2-b1);*/
console.log(fibo(5));//retourne 5,ok/ ..
//console.log(fibo(41));!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!(())

/*function maxx(){
    let ajk=Number.MAX_VALUE;
    let ajk2=Math.log(ajk);
    return ajk2;}
console.log(maxx());*/
//console.log("************");

function fgt(){
    let j=3;let b1=0;let b2=0;
    while(b2-b1<2000){//temps nn raisonnable=>t_isTOT>=2000ms=2s.
	b1=Date.now();
	fibo(j);
	b2=Date.now();j++;}
    return j;}
/*console.log("n max tel que fibo(n) dure un temps ok:");
console.log(fgt()-1);//n tel que fibo(n)===fibo(41) dure (action.//) plus de 2s
//en egalite large.
console.log("la valeur en cet endroit sera evidemment fibo(n)=fibo(41) soit");
console.log(fibo(fgt()-1));*/
//prend assez de temps..///
//IMPORTANT.
//console.log("*************");
//1ERE METHODE.
console.log("******************************");
//QST2: calcul de fibo(n) avec TERMiNALE + a valeur en 1,b valeur en 2.
function fiboGen(n,a,b){
    if(n==1) return a;
    if(n==2) return b;
    else return fiboGen(n-1,a,b)+fiboGen(n-2,a,b);}
console.log(fiboGen(5,1,1));
console.log("******************************");//pas chose extremement nouvelle.
//QST3: 
//fiboo(n,a,b)=fiboo(n-1,b,a+b).
function fibo_gen(n,a,b){
    if(n==1) return a;
    if(n==2) return b;//ca change rien car la reccurence est ok pour n>=2
//dans laquelle en{2,a,b}=>==1,b,a+b=b!!///  .////
    else return fibo_gen(n-1,b,a+b);}
console.log(fibo_gen(20,1,1));console.log(fibo(20));
console.log("*****************************************");
//rq: traduction en terminale algo recursif reposant sur une 2 reccurence
//implique ajout option(s)/// de 2 parametres pour l'annexe=f(precedente_--////)
//voila!/.//
//elle possede la propriete detre la traduction pas seulement cellela"" de
//lalgo fibo(n) recursif en mode terminal.
console.log(fibo_gen(100,1,1));
//retourne le bon resultat en un temps acceptable.(ref.::=>>{{{<2000ms=2s}}}.//
