(()=>{"use strict";var e={660:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Planet=void 0,t.Planet=class{constructor(e,t,n,l){this.waterContent=l,this.name=e,this.age=t,this.size=n}}}},t={};function n(l){var o=t[l];if(void 0!==o)return o.exports;var a=t[l]={exports:{}};return e[l](a,a.exports,n),a.exports}(()=>{const e=n(660);console.log("asd"),document.addEventListener("DOMContentLoaded",(()=>{let t=document.getElementById("inputName"),n=document.getElementById("inputAge"),l=document.getElementById("inputSize"),o=document.getElementById("inputWaterContent"),a=document.getElementById("btnSubmit"),s=document.getElementById("errorContainer"),r=document.getElementById("planetsData"),d=[];null==a||a.addEventListener("click",(()=>{let a=t.value,c=n.value,i=l.value,m=o.value,u=new RegExp("^[a-zA-Zs]*$"),g=!0;function p(e){console.log(e);let t=document.createElement("div");t.className="row padding",s.appendChild(t);let n=document.createElement("div");n.className="col d-flex justify-content-center",t.appendChild(n);let l=document.createElement("span");l.className="errorMessage",l.innerHTML=e,n.appendChild(l)}s.innerHTML="",u.test(a)||(g=!1,p("A név csak az angol ABC betűiből és szóközből állhat")),""==a&&(g=!1,console.log("nev off"),p("A név nem lehet üres!")),console.log(c),(parseInt(c)<=0||""==c)&&(g=!1,p("Az életkornak pozitív számnak kell lennie!")),(parseInt(i)<1500||""==i)&&(g=!1,p("A méretnek legalább 1500km-nek kell lennie!")),(parseInt(m)<0||parseInt(m)>100||""==m)&&(g=!1,p("A víztartalomnak 0 és 100% között kell lennie!")),g&&(d.push(new e.Planet(a,parseInt(c),parseInt(i),parseInt(m))),console.log(d),function(){d.length;let e=0;for(let t=0;t<d.length;t++)e+=d[t].age;e/=d.length,console.log(e),r.innerHTML="Bolygók átlag életkora: "+e+", bolygók darabszáma: "+d.length}()),console.log(g)}))}))})()})();