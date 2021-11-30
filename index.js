mydate = "February 3, 2022";
const dateOfDay = new Date(mydate).getTime();

let i = setInterval(function () {
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
        <h1 class="countdown-heading"><i class="far fa-calendar-alt"></i>${mydate}</h1>
        <div class="countdown-container">
            <p class="container-item">Days <span class="container-span">${days}</span></p>
            <p class="container-item">Hours <span class="container-span">${hours}</span></p>
            <p class="container-item">Minutes <span class="container-span">${minutes}</span></p>
            <p class="container-item">Seconds <span class="container-span">${seconds}</span></p>          
        </div>
    </div>  
  `;

  document.getElementById("timer").innerHTML = timerContainer;
}, 1000);
