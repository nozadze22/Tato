const chek = document.querySelector("#chek");
const ticks = document.querySelector("#ticks");
const price = document.querySelector("#price");
const increment =document.querySelector("#increment");
const dicrement = document.querySelector("#dicrement");

let count = 0;

increment.addEventListener("click", () => {
    if(count < 15) {
        ticks.innerHTML = ++count; 
    }
    price.innerHTML = count  *70;
   
    if(count > 0 && count < 16){
        chek.style.color = "red";
        chek.style.cursor = "pointer";
    }
    
});

dicrement.addEventListener("click", () => {
if(count > 0) {
    ticks.innerHTML = --count;

    price.innerHTML = count  *70;

}else if (count < 1 ){
        ticks.innerHTML = `
        Tickets`;
    }
     if(count < 1 ) {
        chek.style.color = "grey";
        chek.style.cursor = "not-allowed";
    }


    
});

chek.addEventListener("click", () => {
    if(( count > 0) && (count < 16)) {
 displayAlert("well done", "success", "The Ticket is Yours");
    }
    console.log(ticks)
});


    


function displayAlert(title, icon, text = "") {
    swal.fire({ title, icon, text });
  }
  