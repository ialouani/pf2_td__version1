function summ(a,b){
    if(b===0) return a;
    else return summ(a,b-1)+1;}
console.log(summ(32,12));
function summ_t(a,b,c){
    if(c===0) return b;  
    else return summ_t(a,b+1,c-1);}
console.log(summ_t(32,12,32));
function summ_t2(a,b){
    if(b===0) return a;  
    else return summ_t2(a+1,b-1);}
console.log(summ_t2(32,12));
console.log("*************");
function prodd(a,b){
    if (b===1) return a;
    else return a+prodd(a,b-1);}
function prodd_t(a,b,c){
    if(b===0) return c;
    else return prodd_t(a,b-1,a+c);}
function prodd_t_v3_p(a,b){
//si b pair donc a*b=sum(a,a)*b/2.
    if(b%2===0) return summ(a,a)*b/2;
//si b pas pair(2p+1): sum(a,a)*ceil(b/2)=2*a*p=2*a*(b-1)/2=a*b-a.
    else return summ(a,a)*Math.floor(b/2)+a;}
//USING summ(a,b).(..)/////
//suivant ce principe on calcule 2a ..///puis >RETOUR_TER(a+a,??)
//avec a retour finale. a+a doit seffectuer tel que (cardinal fois)
//telque a,,2a,4a,8a suite de puissance2*a~2*a*puiss--
//puiss--~~b/2 en e(.).// return fffff(a+a,b/2) aveccas de base
//(analyse...) b<2 et RETOUR a.(facile si b paire)
//enfin...
//sinn: par ceil(b/2) et ajout de a.
//a+a+a+a+a==mults(a,5) cad retour (cas::5%2!=0) mults(a+a,ceil(b/2))+a
//version nn terminale.
//on peut faire visee AdapTATION a+......<=>mults(a+......,??)
//on ajoute a acet etape..EXEMPLE: a*b a calculer avec b impair
//donc b-1 fois et ajout de a.. soit???<=>!!![[return {fghkl(a+mults(a,b-1),1);
//}]].
function mults(a,b){
    if(b<2) return a;
    else{
	if (b%2===0) return mults(a+a,b/2);
	else return mults(a+mults(a,b-1),1);}}
console.log(prodd(21,23));
console.log(prodd_t(21,23,0));
console.log(prodd_t_v3_p(21,23));
console.log(prodd_t_v3_p(21,26));
console.log("**************");
console.log(mults(123,75));//ca marche!!!.///
//FIN EXO1.



