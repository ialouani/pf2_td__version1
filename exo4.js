function fv1(s,v){
//s est decroissant.
    let sv1=s[0];let k=0;
    while(sv1!=v && k<s.length){
	let h=1;sv1=s[k];
    while(sv1<v){
	sv1+=s[h+k];h++;}
	k++;}
    if(sv1===v) return true;
    return false;}
console.log(fv1([1,3,3,7],14));
console.log(fv1([1,3,3,7],16));
console.log(fv1([1,3,3,7],9));
console.log(fv1([1,3,3,7],10));
console.log(fv1([1,3,3,7],12));
console.log("***************");
function mini(s){
    let ai1=s[0];
    let h=1;
    while(h<s.length){
	if(s[h]<ai1) ai1=s[h];
	h++;}
    return ai1;}
function sum(s){
    let res=0;
    for(let k=0;k<s.length;k++){res+=s[k];}
    return res;}
function inv(s,m){
    let g=0;
    while(g<s.length){
	if(s[g]===m) return true;g++;}
    return false;}
function inv2(s,m){
 let g=0;
    while(g<s.length){
	if(s[g]===m) return g;g++;}
    return false;}
function indc(s,a){
 let g=0;
    while(g<s.length){
	if(s[g]<=a) return g;g++;}
    return false;}//1er indice tel que en celui ci on a une valeur <=a.
function fv2(s,v){
    if(sum(s)<v) return false;
    if(sum(s)===v) return true;
    if(s[0]===v) return true;
    else{
    let sss=indc(s,sum(s)-v);
	//if(sss===false) return false;(equivalente a la premiere).
	let len=s.length;
    let s2=s.slice(sss,len);
	return fv2(s2,sum(s)-v);}}
console.log(fv2([7,3,3,1],4));
console.log(fv2([7,3,3,1],10));
console.log(fv2([7,3,3,1],3));
console.log(fv2([7,3,3,1],14));
console.log(fv2([7,3,3,1],16));
console.log(fv2([7,3,3,1],8));
console.log(fv2([7,3,3,1],6));
console.log(fv2([7,3,3,1],16));
console.log("*****************");
let memo={};
function fg1(s,v){
    let str=[[s],v];return str;}//traduction en '${s},${v}'.//
//toujours en dictio[] mieux que dictio.??()/.
//sinon ca prend une reference au nom des dictios Globale..+++.//////.
//attention:[s] ou s ne change pas la commande avant vue./////
function fv2_2(s,v){
    if(memo[fg1(s,v)]){console.log("passage evolut+");return memo[fg1(s,v)];}
    else{
    if(sum(s)<v){memo[fg1(s,v)]=false; return false;}
    if(sum(s)===v){memo[fg1(s,v)]=true; return true;}
    if(s[0]===v){memo[fg1(s,v)]=true; return true;}
    else{
    let sss=indc(s,sum(s)-v);
	//if(sss===false) return false;(equivalente a la premiere).
	let len=s.length;console.log("passage");
	let s2=s.slice(sss,len);console.log("passage");
	if(sss===false) return memo[fg1(s,v)]=false;
	return memo[fg1(s,v)]=fv2_2(s2,sum(s)-v);}}}

console.log(fv2_2([9,3,3,2],14));console.log(memo);
console.log(fv2_2([9,3,3,2],16));console.log(memo);
console.log(fv2_2([7,3,3,1],10));console.log(memo);
console.log(fv2_2([3,3,1],4));console.log(memo);
console.log(fv2_2([3,3,2],3));console.log(memo);
console.log("***********************");
function v3(){
    let memo1={};
function fv2_2(s,v){
    if(memo1[fg1(s,v)]){console.log("passage evolut+");return memo1[fg1(s,v)];}
    else{
    if(sum(s)<v){memo1[fg1(s,v)]=false; return false;}
    if(sum(s)===v){memo1[fg1(s,v)]=true; return true;}
    if(s[0]===v){memo1[fg1(s,v)]=true; return true;}
    else{
    let sss=indc(s,sum(s)-v);
	//if(sss===false) return false;(equivalente a la premiere).
	let len=s.length;console.log("passage");
	let s2=s.slice(sss,len);console.log("passage");
	if(sss===false) return memo1[fg1(s,v)]=false;
	return memo1[fg1(s,v)]=fv2_2(s2,sum(s)-v);}}}
    return fv2_2;}
let fff=v3();
console.log(fff([9,3,3,2],14));
console.log(fff([9,3,3,2],16));
console.log(fff([7,3,3,1],10));
console.log(fff([3,3,1],4));
console.log(fff([3,3,2],3));
console.log("******************");
//memo2 est inconnu ici && bien regle via lappel de v3()(s,v)..///

function f4(s,v){
    console.log(s,v);
    if(sum(s)<v) return s;
    if(s[0]===v) return [s[0]] ;
    else{
	let sss=indc(s,sum(s)-v); 
	if(sss===false) return false;
	let len=s.length;
	let s2=s.slice(sss,len);
	return f4(s2,sum(s)-v);}}
function union(s1,s2){
    let at=[];
    let j=0;let ik=0;
    while(j<s1.length){at.push(s1[j]);j++;}
while(ik<s2.length){at.push(s2[ik]);ik++;}
    return at;}
function f4ae(s,v){
    let ss2=s;
    while(sum(s)!==v){
	let s21=f4(s,v)[0];let sd=inv2(s,s21);
	if(sd===0){
	    return union(ss2.slice(0,inv2(ss2,s[0])),ss2.slice(inv2(ss2,s[s.length-1])+1,ss2.length));}
	s=union(s.slice(0,sd),s.slice(sd+1,s.length));}
    return s;}
console.log(f4ae([7,3,3,1],10));
console.log(f4ae([7,4,3,1],11));
console.log(f4ae([7,3,2,1],8));
console.log(f4ae([7,3,3,2],12));
console.log(f4ae([7,2,2,1],11));
console.log(f4ae([7,3,2,1],11));
console.log(f4ae([7,3,3,2,1],13));
console.log(f4ae([7,2,2,1],11));//reste la version recursive + 
//optimisation avec un dictionnaire de valeurs predecessees EN stockage.
//cette version est iterative..../

//dans ce genre de retour en [,,,] ca affiche nntab_array<<<< par laffichage
//de la traduction reference STR => ,,,""+console.log((())) donc ,,,ss 
//espacements.
console.log("*******************");
//2IEME JET():::
//on retourne avec s,v entrees le sous-ensemble dont la somme est v.
//MAIS:()()quand on fait avec sum(s)-v le s2 tire
//les elements susceptibles detre dedans le sum(s)-v soit le complementaire
//des elements possibles dans lexpression de v via les objets|| de S.///
function enlevf(s,i){
    let j=0;let ss=[];
    while(j!=i) {ss.push(s[j]);j++;}
    let jj=j+1;
    while(jj<s.length){
	ss.push(s[jj]);jj++;}
    return ss;}
console.log(enlevf([7,3,3,1],0));
console.log(enlevf([7,3,3,1],1));
console.log(enlevf([7,3,3,1],2));
console.log(enlevf([7,3,3,1],3));
console.log(enlevf([7,3,3,1],4));
console.log("*********************");
function version0(s,v){
    if(sum(s)<v) return false;
    if(sum(s)===v) return true;
    if(s[0]===v) return true;
    else{
    let sss=indc(s,sum(s)-v);
	if(sss===false) return false;
	let len=s.length;
    let s2=s.slice(sss,len);
	return version0(s2,sum(s)-v);}}
console.log(version0([7,3,3,1],10));
console.log("*********************");
function ain(s,a){
    let j=0;
    while(j<s.length){
	if(s[j]===a) return j;
	j++;}
    return false;}
function hjas(s1,s){
    let lmm=[];
    let stg=[];//s1 est INCLUSE dans s.
    for(let k=0;k<s1.length;k++){
	stg+=ain(s,s1[k]);}
	//stg lesindices des elements a enlever.
    for (let m=0;m<stg.length;m++){
	s[stg[m]]=0;}
    for (let mm=0;mm<s.length;mm++){
	if(s[mm]!=0){lmm.push(s[mm]);}}
    return lmm;}
console.log(hjas([1,3],[2,1,5,3,100]));
console.log("***************************");
function fed3(s,v){
//soit s oui donc la fin ca sera un ensemble soit [] soit nn vide.
    
    if(v<0) {return [];}
    if(v===0) {return [];}
    if(s[0]===v) {return [s[0]];}
    
//avant il y a 3 cas les 2 premiers si v<=0
//le suivant si v!=0=> la recherche se fait dans s
//suivant les derniers appels il se peut que le recherche
//soit s[0] ou une somme si s[0] retour sinn faire ce qui suit.
	else{

	let sss=indc(s,sum(s)-v);
	let len=s.length;
	let s2=s.slice(sss,len);//a ce stade
//s.slice(0,sss) est quelques elements qui constituent le ss-ensemble
//recherche.
//si s[0]>sum(s)-v donc sum(s)-v nn s => fed3(,)=fed3(///)===false.
	if(sss===false){return [];}
	    let str1=s.slice(0,sss);
//on retourne DONC str1 + la meme chose sur s2 en prenant 
//v=v-sum(str1).
	    
	    if(sss===0){
		let som=sum(s)-v;console.log(s,v);
		if(ain(s,v)){
		    let aind=ain(s,v);
		    return [s[aind]];}
		else{
		  return hjas(fed3(s,som),s);}
	    }

	    return str1+=fed3(s2,v-sum(str1));}}
console.log(fed3([7,3,3,1],10));
console.log(fed3([7,4,3,1],11));
console.log(fed3([7,3,3,1],8));
console.log(fed3([7,3,3,2],12));
console.log(fed3([7,2,2,1],11));
console.log(fed3([7,3,2,1],11));
console.log(fed3([7,3,3,2,1],13));
console.log(fed3([7,2,2,1],11))
console.log("**********************");
//AVEC optimisation.
let mmm={};
function fed32(s,v){
//soit s oui donc la fin ca sera un ensemble soit [] soit nn vide.
    if(mmm[fg1(s,v)])
    {console.log("passage evolut++");return mmm[fg1(s,v)];}
    if(v<0) {return mmm[fg1(s,v)]=[];}
    if(v===0) {return mmm[fg1(s,v)]=[];}
    if(s[0]===v) {return mmm[fg1(s,v)]=[s[0]];}
    
//avant il y a 3 cas les 2 premiers si v<=0
//le suivant si v!=0=> la recherche se fait dans s
//suivant les derniers appels il se peut que le recherche
//soit s[0] ou une somme si s[0] retour sinn faire ce qui suit.
	else{

	let sss=indc(s,sum(s)-v);
	let len=s.length;
	let s2=s.slice(sss,len);//a ce stade
//s.slice(0,sss) est quelques elements qui constituent le ss-ensemble
//recherche.
//si s[0]>sum(s)-v donc sum(s)-v nn s => fed3(,)=fed3(///)===false.
	    if(sss===false){return mmm[fg1(s,v)]=[];}
	    let str1=s.slice(0,sss);
//on retourne DONC str1 + la meme chose sur s2 en prenant 
//v=v-sum(str1).

	    
	    if(sss===0){
		let som=sum(s)-v;
		if(ain(s,v)){
		    let aind=ain(s,v);
		    return mmm[fg1(s,v)]=[s[aind]];}
		else{
		    return mmm[fg1(s,v)]=hjas(fed32(s,som),s);}
	    }
	    
	     return mmm[fg1(s,v)]=str1+fed32(s2,v-sum(str1));}}
console.log(fed32([7,3,3,1],10));
console.log(fed32([7,4,3,1],11));
console.log(fed32([7,3,3,1],8));
console.log(fed32([7,3,3,2],12));
console.log(fed32([7,2,2,1],11));
console.log(fed32([7,3,2,1],11));
console.log(fed32([7,3,3,2,1],13));
console.log(fed32([7,2,2,1],11));
console.log(fed32([2,1],1));
console.log(mmm);//version qui marche de retour ss-ensemble avec optimisation
//via mmm.