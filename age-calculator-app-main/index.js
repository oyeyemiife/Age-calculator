//output
const years = document.querySelector(".years");
const months = document.querySelector(".months");
const days = document.querySelector(".days");
const btn = document.querySelector(".btn")

//input
let numbers = false
const YYYY = document.querySelector("#year");
const MM = document.querySelector("#month");
const DD = document.querySelector("#day");

const ey = document.querySelector(".ey");
const em = document.querySelector(".em");
const ed = document.querySelector(".ed");

btn.addEventListener('click', calculate)
DD.addEventListener("input", (e) => {
    if (+DD.value > 31) {
        ed.textContent = "Must be a valid day";
        numbers = false;
        return;
    } else {
        numbers = true;
        ed.textContent = "";
    }
    if (+DD.value === 0) {
        numbers = false;
        ed.textContent = "This field is required";
        numbers = false;
        return;
    } else {
        ed.textContent = "";
    }
});
MM.addEventListener("input", (e) => {
    if (+MM.value > 12) {
        em.textContent = "Must be a valid month";
        numbers = false;
        return;
    } else {
        numbers = true;
        em.textContent = "";
    }
    if (+MM.value === 0) {
        numbers = false;
        em.textContent = "This field is required";
        numbers = false;
        return;
    } else {
        em.textContent = "";
    }
});
YYYY.addEventListener("input", (e) => {
    if (+YYYY.value > 2023) {
        ey.textContent = "Must be a valid year";
        numbers = false;
        return;
    } else {
        numbers = true;
        ed.textContent = "";
    }
    if (+YYYY.value === 0) {
        numbers = false;
        ey.textContent = "This field is required";
        numbers = false;
        return;
    } else {
        ey.textContent = "";
    }
});

function calculate() {
    if (numbers) {
        let birth = '${MM.value}/${DD.value}/${YYYY.value}';
        console.log(birth);
        let birthObj = new date(birth);
        let ageDiffMill = date.now() - birthObj;
        let agedate = new date(ageDiffMill);
        let ageyears = agedate.getUTCFullyear() - 1970;
        let agemonth = agedate.getUTCmonth();
        let ageday = agedate.getUTCday() - 1;
        days.textContent = ageday;
        months.textContent = agemonth;
        years.textContent = ageyears;
    } 
    else {
        alert("error");
    }
}
