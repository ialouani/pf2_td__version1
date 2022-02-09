fed3(s,v) retourne le sous-ensemble en question.
>ANALYSE:
s,v=>s2,sum(s)-v a ce stade s-{s2} est inclus dans le sous-ensemble cherche. donc si ok alors dans le cas de base s-{s2} sa somme est v donc sum(s2)=sum(s)-v. donc entree post-[[s,v]] vu que sum(s)=v retour de s_avant(s)-{s2}.
donc si sum(s)!=v donc: il faut faire une apres post-RECHERCHE via:
retour de:   ..(recursif)+[s.slice(0,sss)]. DONC une meme recherche de v-sum(..) dans le reste de S original.
sum(s)!=v =>
etape1: s,v///sum(s)-v,s.slice(sss,s.length) donc::
s.slice(0,sss) est un sous-ensemble de V.
pour avoir tt le V il faut refaire un rappel mettant en precision VIA: une nouvelle recherche de v-sum(|V) dans s2=s.slice(sss,s.length).
donc logiquement le retour doit etre ss la forme::
return        s.slice(0,sss)+fed3(s2,v-sum(str1)) avec str1==s.slice(0,sss) ca veut tt simplement dire rechercher de plus+(!)//// les elements manquants => dans s2 le reste===v-sum(str1).
probleme: sss===0 =>cas a part ||///:>
si ain(s,v)=>v=s[ain(s,v)] donc retour de s[aind====ain(s,v)].()/////.//
sinon on refait la meme chose avec sum(s)-v avec fed3((s,sum(s)-v)) qui donne le sum(s)-v pour avoir le v il faut hjas(fed3(s,som),s) avec som==sum(s) - v. 
car SI sss===0 donc s[0]<v donc soit v appartient (ain(s,v)!=f) soit nn cad ==sum(..)=>retour DE hjas(fed3(s,som),s).
+cas de base: 
sss=false=>[] && v<0 DE MEME!
&&s[0]===v=>return [s[0]].((nn <!// car dans ce cas: ain(s,v)>=1..()///))./////
=>version optimisee:
retour de mmm[fg1(s,v)]===..(recursion en fed3_..///(s,v))
avec TEST au debut si mmm[fg1(s,v)]. 
LEXO 4 EST BIEN FAIT ET DONC TD4_pf EST FINI.

















