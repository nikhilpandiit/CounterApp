const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElemet = document.querySelector("#seconds");
const counterTimer = document.querySelector(".counterTimer");
const heading = document.getElementById("h1");

const seconds = 1000,
  minutes = 60 * seconds,
  hours = 60 * minutes,
  days = 24 * hours;

const timerFunction = () => {
  let now = new Date(),
    dd = String(now.getDate()).padStart(2, "0"),
    mm = String(now.getMonth() + 1).padStart(2, "0"),
    yyyy = now.getFullYear();

  const enteredDay = prompt("Enter Day").padStart(2, "0");
  const enteredMonth = prompt("Enter Month").padStart(2, "0");

  now = ` ${mm}/${dd}/${yyyy}`;

  let targetDate = ` ${enteredMonth}/${enteredDay}/${yyyy}`;

  if (now > targetDate) {
    targetDate = ` ${enteredMonth}/${enteredDay}/${yyyy + 1}`;
  }

  const intervalId = (setInterval = () => {
    const timer = new Date(targetDate).getTime();
    const today = new Date().getTime();

    const differnce = timer - today;

    const leftDay = Math.floor(differnce / days);
    const leftHours = Math.floor((differnce % days) / hours);
    const leftMinutes = Math.floor((differnce % hours) / minutes);
    const leftSeconds = Math.floor((differnce % minutes) / seconds);

    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHours;
    minutesElement.innerText = leftMinutes;
    secondsElemet.innerText = leftSeconds;

    if (differnce < 0) {
      counterTimer.style.display = "none";
      heading.innerText = "Times' Up";
      clearInterval(intervalId);
    }
  });
  0;
};

timerFunction();
