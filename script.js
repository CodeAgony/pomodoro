window.addEventListener("DOMContentLoaded", init);

function init(){
  const display = document.querySelector(".main__timer");
  const tomato = document.getElementById("tomatoButton");

  function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.querySelector(".main__timer").textContent = (`${minutes}:${seconds}`);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
  
  tomato.addEventListener("click", startTimer(1500));
}