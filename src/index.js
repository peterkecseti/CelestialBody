"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Planet_1 = require("./Planet");
console.log("asd");
document.addEventListener("DOMContentLoaded", () => {
    let inputName = document.getElementById('inputName');
    let inputAge = document.getElementById('inputAge');
    let inputSize = document.getElementById('inputSize');
    let inputWaterContent = document.getElementById('inputWaterContent');
    let btnSubmit = document.getElementById('btnSubmit');
    let errorContainer = document.getElementById('errorContainer');
    let planetsData = document.getElementById('planetsData');
    let planets = [];
    btnSubmit === null || btnSubmit === void 0 ? void 0 : btnSubmit.addEventListener('click', () => {
        let name = inputName.value;
        let age = inputAge.value;
        let size = inputSize.value;
        let waterContent = inputWaterContent.value;
        let nameRegex = new RegExp("^[a-zA-Z\s]*$");
        let ok = true;
        errorContainer.innerHTML = "";
        if (!nameRegex.test(name)) {
            ok = false;
            generateErrMessage('A név csak az angol ABC betűiből és szóközből állhat');
        }
        if (name == "") {
            ok = false;
            console.log('nev off');
            generateErrMessage('A név nem lehet üres!');
        }
        console.log(age);
        if (parseInt(age) <= 0 || age == "") {
            ok = false;
            generateErrMessage('Az életkornak pozitív számnak kell lennie!');
        }
        if (parseInt(size) < 1500 || size == "") {
            ok = false;
            generateErrMessage('A méretnek legalább 1500km-nek kell lennie!');
        }
        if (parseInt(waterContent) < 0 || parseInt(waterContent) > 100 || waterContent == "") {
            ok = false;
            generateErrMessage('A víztartalomnak 0 és 100% között kell lennie!');
        }
        if (ok) {
            planets.push(new Planet_1.Planet(name, parseInt(age), parseInt(size), parseInt(waterContent)));
            console.log(planets);
            showData();
        }
        //
        console.log(ok);
        function showData() {
            let count = planets.length;
            let avgAge = 0;
            for (let i = 0; i < planets.length; i++) {
                avgAge += planets[i].age;
            }
            avgAge = avgAge / planets.length;
            console.log(avgAge);
            planetsData.innerHTML = 'Bolygók átlag életkora: ' + avgAge + ', bolygók darabszáma: ' + planets.length;
        }
        function generateErrMessage(errMessage) {
            console.log(errMessage);
            let row = document.createElement('div');
            row.className = 'row padding';
            errorContainer.appendChild(row);
            let col = document.createElement('div');
            col.className = 'col d-flex justify-content-center';
            row.appendChild(col);
            let span = document.createElement('span');
            span.className = 'errorMessage';
            span.innerHTML = errMessage;
            col.appendChild(span);
        }
    });
});
