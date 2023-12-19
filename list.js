const firstList = document.querySelector("#firstList");
const secondList = document.querySelector("#secondLIst");
const thridLIst = document.querySelector("#thridLIst");
const allDivs = document.querySelector("#allDivs");



firstList.addEventListener("click", () => {
 firstList = allDivs.innerHTML = `
 
 <div id="allDivs" class="forDivs">
 <div class="filters">
     <h6>1:00 PM - 2:00 PM
         <p>1 hour</p></h6>

         <h5>Meet & Greet
             <p><i class="fa-solid fa-location-dot"></i>Main Foyer</p>
         </h5>
 </div>
 <div class="line"></div>
 
<div class="filters">
 <h6>2:00 PM - 4:00 PM <p>2 hours</p></h6>
 <h5>Sessions Stage
     <p><i class="fa-solid fa-location-dot"></i> Main Auditorium</p>
 </h5>

</div>
<div class="line"></div>




<div class="filters">
 <h6>4:00 PM - 5:00 PM
     <p>1 hour</p>
 </h6>
 <h5>
     Lunch
    
 </h5>

</div>
<div class="line"></div>



<div class="filters">

 <h6>  4:00 PM - 5:00 PM
     <p>
         2 hours
     </p>
 </h6>
 <h5>Awards <p>
     <i class="fa-solid fa-location-dot"></i>  Main Auditorium
 </p></h5>
</div>
<div class="line"></div>




<div class="filters">
<h6>
 4:00 PM - 5:00 PM
 <p>
     1 hour
 </p>
</h6>
<h5>
 Q & A Session

 <p>
     <i class="fa-solid fa-location-dot"></i>Main Auditorium
 </p>
</h5>
</div>
<div class="line"> </div>


<div class="filters">
<h6>
 5:00 PM - 6:00 PM
 <p>
     1 hour
 </p>
 <h5>
     Closing Drinks
     <p>
         <i class="fa-solid fa-location-dot"></i>   Main Foyer
     </p>
 </h5>
</h6>
</div>

 `;
});

secondList.addEventListener("click", () => {
    secondList = allDivs.innerHTML = `
    
    <div id="allDivs" class="forDivs">
    <div class="filters">
        <h6>1:00 PM - 2:00 PM
            <p>1 hour</p></h6>

            <h5>Meet & Greet
                <p><i class="fa-solid fa-location-dot"></i>Main Foyer</p>
            </h5>
    </div>
    <div class="line"></div>
    
<div class="filters">
    <h6>2:00 PM - 4:00 PM <p>2 hours</p></h6>
    <h5>Sessions Stage
        <p><i class="fa-solid fa-location-dot"></i> Main Auditorium</p>
    </h5>

</div>
<div class="line"></div>
    
    `;
   
});



thridLIst.addEventListener("click", () => {
    thridLIst = allDivs.innerHTML = `
   
    <div class="filters">

    <h6>  4:00 PM - 5:00 PM
        <p>
            2 hours
        </p>
    </h6>
    <h5>Awards <p>
        <i class="fa-solid fa-location-dot"></i>  Main Auditorium
    </p></h5>
</div>
<div class="line"></div>




<div class="filters">
<h6>
    4:00 PM - 5:00 PM
    <p>
        1 hour
    </p>
</h6>
<h5>
    Q & A Session

    <p>
        <i class="fa-solid fa-location-dot"></i>Main Auditorium
    </p>
</h5>
</div>
<div class="line"> </div>


<div class="filters">
<h6>
    5:00 PM - 6:00 PM
    <p>
        1 hour
    </p>
    <h5>
        Closing Drinks
        <p>
            <i class="fa-solid fa-location-dot"></i>   Main Foyer
        </p>
    </h5>
</h6>
</div>


    `;
});