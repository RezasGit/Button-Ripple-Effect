/*
*  Whenever a hover action is performed over a targeted button =>
*  An .addEventListner() function is triggered by the element of that button
*  This .addEventListner() function sets some calculated offset values for the CSS properties: left and top
*  These "left" and "top" values along with pixel, indiacte the beginning point of the Ripple Effect to start
*/

//Creating variable to target the elements of .btn class
const btnE1 = document.querySelector(".btn");

btnE1.addEventListener("mouseover", (event)=>{
    const x = event.pageX - btnE1.offsetLeft;        //Vertical Point Measurement: Space between the Left edge of content box and the event point at the box
    const y = event.pageY - btnE1.offsetTop;         //Horizontal Point Measurement: Space between the Top edge of the content box and the event point at the box
    btnE1.style.setProperty("--xPos", x + "px");     //Passing the vertical point value to set the left CSS property (inside .btn::before)
    btnE1.style.setProperty("--yPos", y + "px");     //Passing the Horizontal point value to set the top CSS property (inside .btn::before)
});