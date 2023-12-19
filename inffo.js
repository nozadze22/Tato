const div = document.querySelector("#div");
const divv = document.querySelector("#divv");
const arrow = document.querySelector("#arrow");
const lists = document.querySelector("#lists");
const secondArrow = document.querySelector("#secondArrow");


arrow.addEventListener("click", () => {
    if(div.style.display === 'none' ){
        div.style.display = 'block';
        arrow.innerHTML = arrowChange.up;
    }else {
        div.style.display = "none";
        arrow.innerHTML = arrowChange.down;
    }
});


secondArrow.addEventListener("click", () => {
if(divv.style.display === "none") {
    divv.style.display = "block";
    secondArrow.innerHTML = arrowChange.up;
}else {
    divv.style.display = "none";
    secondArrow.innerHTML = arrowChange.down;
}
});



const arrowChange = {
    down:'<i class="fa-solid fa-chevron-down"></i>',
    up:'<i class="fa-solid fa-chevron-up"></i>' 
};