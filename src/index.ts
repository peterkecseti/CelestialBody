import { off } from "process";
import { Planet } from "./Planet";
console.log("asd");

document.addEventListener("DOMContentLoaded", ()=>{

    let inputName         = document.getElementById('inputName'        ) as HTMLInputElement;
    let inputAge          = document.getElementById('inputAge'         ) as HTMLInputElement;
    let inputSize         = document.getElementById('inputSize'        ) as HTMLInputElement;
    let inputWaterContent = document.getElementById('inputWaterContent') as HTMLInputElement;
    let btnSubmit         = document.getElementById('btnSubmit'        ) as HTMLInputElement;
    let errorContainer    = document.getElementById('errorContainer'   ) as HTMLElement     ;
    let planetsData       = document.getElementById('planetsData'      ) as HTMLElement     ;

    let planets : Planet[] = [];

    btnSubmit?.addEventListener('click', ()=>{
        let name : string = inputName.value;
        let age  : string = inputAge.value;
        let size : string = inputSize.value;
        let waterContent : string = inputWaterContent.value;

        let nameRegex : RegExp = new RegExp("^[a-zA-Z\s]*$")
        let ok : boolean = true;

        errorContainer.innerHTML = "";

        if(!nameRegex.test(name)){
            ok = false;
            generateErrMessage('A név csak az angol ABC betűiből és szóközből állhat');
            
        }
        
        if(name == ""){
            ok = false;
            console.log('nev off')
            generateErrMessage('A név nem lehet üres!');
            
        }
        console.log(age)
        if(parseInt(age) <= 0 || age == ""){
            ok = false;
            generateErrMessage('Az életkornak pozitív számnak kell lennie!');
        }
        if(parseInt(size) < 1500 || size == ""){
            ok = false
            generateErrMessage('A méretnek legalább 1500km-nek kell lennie!')
        }
        if(parseInt(waterContent) < 0 || parseInt(waterContent) > 100 || waterContent == ""){
            ok = false;
            generateErrMessage('A víztartalomnak 0 és 100% között kell lennie!')
        }
        
        if(ok){
            planets.push(new Planet(name, parseInt(age), parseInt(size), parseInt(waterContent)))
            console.log(planets)
            showData();
        }

        //
        console.log(ok)

        function showData(){
            let count = planets.length;
            let avgAge = 0;
            for(let i = 0; i<planets.length; i++){
                avgAge += planets[i].age;
            }
            avgAge = avgAge / planets.length;
            console.log(avgAge)
            planetsData.innerHTML = 'Bolygók átlag életkora: ' + avgAge + ', bolygók darabszáma: ' + planets.length;

        }

        function generateErrMessage(errMessage : string){
            console.log(errMessage)
            let row = document.createElement('div');
            row.className = 'row padding'
            errorContainer.appendChild(row)

            let col = document.createElement('div')
            col.className = 'col d-flex justify-content-center'
            row.appendChild(col);

            let span = document.createElement('span');
            span.className = 'errorMessage'
            span.innerHTML = errMessage
            col.appendChild(span);

        }
    })

})