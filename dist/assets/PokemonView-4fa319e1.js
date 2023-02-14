import{_,P as d,b as h,r as k,o as n,c as t,a as o,t as s,d as c,F as p,e as a,f as g}from"./index-09ac2df5.js";const v={components:{PokemonCard:d},data(){return{pokemon:{},evolutionChain:[]}},name:"PokemonView",mounted(){h.get("https://pokedex.herokuapp.com/api/v1/pokemon/"+this.$route.params.id).then(i=>{this.pokemon=i.data,this.pokemon.evolutions.forEach(u=>{h.get("https://pokedex.herokuapp.com/api/v1/pokemon/"+u.id).then(r=>{this.evolutionChain.push(r.data)}).catch(r=>{console.log(r)})})}).catch(i=>{console.log(i)})}},f={class:"container border-0 mb-5"},x={class:"row d-flex justify-content-center"},w={class:"row"},b=["src"],C=o("strong",null,"Description: ",-1),V=o("strong",null,"Types: ",-1),y=o("strong",null,"Abilities: ",-1),P=o("strong",null,"Height: ",-1),B=o("strong",null,"Weight: ",-1),E={class:"row"},N=o("h2",null,"Evolution Chain",-1),D={class:"col-lg-4 mb-2 d-flex align-items-stretch"};function F(i,u,r,T,e,j){const m=k("pokemon-card");return n(),t("div",f,[o("div",x,[o("h1",null,s(e.pokemon.name),1),o("div",w,[o("img",{src:e.pokemon.sprite,class:"w-50 p-3 mx-auto"},null,8,b)]),o("h5",null,[C,c(" "+s(e.pokemon.description),1)]),o("p",null,[V,(n(!0),t(p,null,a(e.pokemon.types,l=>(n(),t("span",null,s(l.name)+" | ",1))),256))]),o("p",null,[y,(n(!0),t(p,null,a(e.pokemon.abilities,l=>(n(),t("span",null,s(l.name)+" | ",1))),256))]),o("p",null,[P,c(" "+s(e.pokemon.height),1)]),o("p",null,[B,c(" "+s(e.pokemon.weight),1)])]),o("div",E,[N,(n(!0),t(p,null,a(e.evolutionChain,l=>(n(),t("div",D,[g(m,{pokemon:l},null,8,["pokemon"])]))),256))])])}const H=_(v,[["render",F]]);export{H as default};
