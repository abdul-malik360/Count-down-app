let i = setInterval(function () {
  const displayDate = () => {
    let x = document.getElementById("dateIput").value;
    return x;
  };

  let mydate = displayDate();
  const dateOfDay = new Date(mydate).getTime();
  const timeNow = new Date().getTime();
  const tillThen = dateOfDay - timeNow;

  const days = Math.floor(tillThen / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (tillThen % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((tillThen % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((tillThen % (1000 * 60)) / 1000);

  const timerContainer = `
  <div class="timer-container">
        <h1 class="countdown-heading">Time left until<span class="countdown-heading-span"><i class="far fa-calendar-alt"></i>${mydate}</span></h1> 
        <div class="countdown-container">
            <p class="container-item">Days <span class="container-item-span">${days}</span></p>
            <p class="container-item">Hours <span class="container-item-span">${hours}</span></p>
            <p class="container-item">Minutes <span class="container-item-span">${minutes}</span></p>
            <p class="container-item">Seconds <span class="container-item-span">${seconds}</span></p>          
        </div>
    </div>  
  `;

  document.getElementById("timer").innerHTML = timerContainer;
}, 1000);
