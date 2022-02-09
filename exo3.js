function fact(n,p){
    if(n<=1) return p;
    else return fact(n-1,n*p);//n est 1 donc  *2*,=>retour p_new===n!(car|2///).
}
//console.log(fact(10,1));(//)//..///
function sum(a,b){
    if(b==0) return a;
    else return sum(a+1,b-1);}
/*function sum(a,b){
    if(b==0) return a;
    else return sum(a+1,b-1);}
console.log(sum(12000000,235485498)); MAXIMUM CALLS.//
//CAD: =.empilation ainsi de suite....>>===.....empilation espace dispo VIDE
//+>MESSAGE ERROR..*/


/*console.log(fact(200,1));//INFINITY car depasseEN>>MAX_value en NUmber ().
//MAIS attention la pile nexplose pas.
console.log(fact(223293,1));//retour pas infinity mais stack size exceeded
//car la pile explose en cours.(cas plus haut: infinity infinity operations
//triviales rslt .....(pile d'appels reste en nn saturee >FIN..)).///
*/
function max_frt(){
    let s=null;
    let h=2;
    while(s===null){
	try{
	    fact(h,1);}
	catch(error){
	    if(error instanceof RangeError){
		s=h-1;}}
	h++;}
    return s;}
function max_frtv00(){
    let s=null;
    let a=0;let b=2;
    while(s===null){
	try{
	    sum(a,b);}
	catch(error){
	    if(error instanceof RangeError){
		s=b/2;}}
	b=2*b;}
    return s;}
//console.log(max_frtv00());
//console.log(max_frt());
console.log("();()//***********************");
//infinity..(optimize...) && appels interferes +()////=>..///././.
function analyze(n){
    let g=function(){return fact(n,1);};//[Function].
    let h=function facto(n){return fact(n,1);};
    function f(){return fact(n,1);}//[Function:""nom""].
    //return [g,f,h];
    return function(){return fact(n,1);};
}//retour de fonction objet f cest a dire de cle primaire le nom type() 
//Function et de sa valeur==f.
//si let f=... RETURN f (comme le cas de g) une instance de la classe function()
//(function f(){.....}) cad objet==[]??... NN!
//pas instance...car nnNEW.. => f ok! =>ci-dessus g..:::
//=>>>g variable de valeur a cet instant (n)=>fact(n,1); DONC 
//g est une variable (str=a,str=b=>str ne change pas mais la projection de celle
//ci oui) qui change pas seulement sa projection donc affichage
//de type_CORRELE CAD>>...+:>   str=a puis b laisse str avoir
//le type de string cad en objet~[String](string donc ~it.deString_CLASS
//=>[value en g++<=>String]<=>objet resume en instance ...DE la classe.
//resumons: f=>[Function:f] en modele OBJET && g=>[Function] en modele objet.
//et h=>[Function: facto].
//resume memnotechnique...:let g=function(){}=>g~[Function]
//let h=///facto(){};==>>>h~[...:facto] et de meme pour f.
console.log(analyze(5));
console.log("********************************");
//QST3:>>>>>:
function frozenFact(n,p){
    if(n<=1) return p;
     return function(){return frozenFact(n-1,n*p);};}//retour
//fontion anonyme [Function] ()pas geree en cours=>aucune valeur
//stockee dans la pile d'appel.()
console.log(frozenFact(4,1));
console.log(frozenFact(4,1)()()());
console.log("********");
function trampoline(a){
    while(typeof(a)==="function"){a=a();}
    return a;}
function tr0(a){
    if(typeof(a)!=="function") return a;
    else return tr0(a());}
console.log(tr0(frozenFact(23,1))===fact(23,1));
console.log("**********");
function factTotal(n,p){
    //let f=frozenFact(n,p);
    return trampoline(frozenFact(n,p));}
console.log(factTotal(50,1)===fact(50,1));
console.log(factTotal(1000000,1));
//console.log(fact(1000000,1));
//ci-dessus(2)permet un calcul sans avoir l'erreur dexplosion de la stack_CALLS.
//VOILA!.///
console.log("************************************************");
console.log("************************************************");
function fibo(n){
    if(n<=2) return 1;
    else return fibo(n-1)+fibo(n-2);}
function fibo_gen(n,a,b){
    if(n==1) return a;
    else return fibo_gen(n-1,b,a+b);}
console.log(fibo(14)===fibo_gen(14,1,1));
//console.log(fibo_gen(1000000,1,1));error..////.
function frozen_v2(n,a,b){
    if(n===1) return a;
    else return function(){return frozen_v2(n-1,b,a+b);};}
function fibo_V3(n,a,b){
    return trampoline(frozen_v2(n,a,b));}
console.log(fibo_V3(20,1,1)===fibo(20));
console.log(fibo_V3(10000000,1,1));//pas d'erreur//./



