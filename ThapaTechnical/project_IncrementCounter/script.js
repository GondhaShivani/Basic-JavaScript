const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  //console.log(counter);

  counter.innerHTML = 0; //initial value

  const updateCounter = () => {
    /* 
    const targetCount = counter.getAttribute("data-target");
    console.log(targetCount);
    console.log(typeof targetCount); //string - need to convert into number 
    */

    const targetCount = +counter.getAttribute("data-target");
    //console.log(targetCount);
    //console.log(typeof targetCount); //after adding unary operator its convert into number.

    const startingCount = Number(counter.innerHTML);

    const gap = targetCount / 200; //increment in gap of 100 like 0 100 200 300...target

    if (startingCount < targetCount) {
      counter.innerHTML = `${Math.round(startingCount + gap)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerHTML = targetCount;
    }
  };
  updateCounter();
});

//-------ways to convert string to number

//1. using unary plus operator
//var n = +str;

//2. the number constructor
//var n = Number(str);

//3. the parseFloat func
//var n = parseFloat(str);
