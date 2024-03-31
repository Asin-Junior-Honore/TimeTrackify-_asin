const inFo = [
  {
    fig: 1,
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    fig: 2,
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    fig: 3,
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
];
const inFo2 = [
  {
    fig: 4,
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    fig: 5,
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    fig: 6,
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

let Work = document.getElementById("work");
let Hour = document.querySelectorAll(".hours");
let Week = document.getElementById("target");
let Weekbtn = document.getElementById("week");
let Dailybtn = document.getElementById("daily");
let monthbtn = document.getElementById("month");
let BOXcont = document.querySelector(".box-cont");
let BOXcont2 = document.querySelector(".box-cont2");

//dailybtn

Dailybtn.addEventListener("click", function () {
  let displayMenu = inFo.map(function (items) {
    return `
    <div class="box1"  id=box-${items.fig}>
        <div class="little">
            <p id="work">${items.title}</p>
            <p>...</p>
        </div>
        <div class="innerbox">
            <h1 class="hours">${items.timeframes.daily.current}hrs</h1>
            <p id="target">Yesterday - ${items.timeframes.daily.previous}hrs </p>

        </div>
    </div>`;
  });

  displayMenu = displayMenu.join("");
  BOXcont.innerHTML = displayMenu;

  //info2 starts
  let displayMenu2 = inFo2.map(function (items) {
    return `
    <div class="box1" id=box-${items.fig}>
        <div class="little">
            <p id="work">${items.title}</p>
            <p>...</p>
        </div>
        <div class="innerbox">
            <h1 class="hours">${items.timeframes.daily.current}hrs</h1>
            <p id="target">Yesterday - ${items.timeframes.daily.previous}hrs </p>

        </div>
    </div>`;
  });

  displayMenu2 = displayMenu2.join("");
  BOXcont2.innerHTML = displayMenu2;
});

//weekbtn
Weekbtn.addEventListener("click", function () {
  let displayMenu = inFo.map(function (items) {
    return `
    <div class="box1" id=box-${items.fig}>
        <div class="little">
            <p id="work">${items.title}</p>
            <p>...</p>
        </div>
        <div class="innerbox">
            <h1 class="hours">${items.timeframes.weekly.current}hrs</h1>
            <p id="target">Last week - ${items.timeframes.weekly.previous}hrs </p>

        </div>
    </div>`;
  });

  displayMenu = displayMenu.join("");
  BOXcont.innerHTML = displayMenu;

  //info2 starts
  let displayMenu2 = inFo2.map(function (items) {
    return `
    <div class="box1" id=box-${items.fig}>
        <div class="little">
            <p id="work">${items.title}</p>
            <p>...</p>
        </div>
        <div class="innerbox">
            <h1 class="hours">${items.timeframes.weekly.current}hrs</h1>
            <p id="target">Last week - ${items.timeframes.weekly.previous}hrs </p>

        </div>
    </div>`;
  });

  displayMenu2 = displayMenu2.join("");
  BOXcont2.innerHTML = displayMenu2;
});

//monthbtn
monthbtn.addEventListener("click", function () {
  let displayMenu = inFo.map(function (items) {
    return `
    <div class="box1" id=box-${items.fig}>
        <div class="little">
            <p id="work">${items.title}</p>
            <p>...</p>
        </div>
        <div class="innerbox">
            <h1 class="hours">${items.timeframes.monthly.current}hrs</h1>
            <p id="target">Last month - ${items.timeframes.monthly.previous}hrs </p>

        </div>
    </div>`;
  });

  displayMenu = displayMenu.join("");
  BOXcont.innerHTML = displayMenu;

  //info2 starts
  let displayMenu2 = inFo2.map(function (items) {
    return `
    <div class="box1" id=box-${items.fig}>
        <div class="little">
            <p id="work">${items.title}</p>
            <p>...</p>
        </div>
        <div class="innerbox">
            <h1 class="hours">${items.timeframes.monthly.current}hrs</h1>
            <p id="target">Last month - ${items.timeframes.monthly.previous}hrs </p>

        </div>
    </div>`;
  });

  displayMenu2 = displayMenu2.join("");
  BOXcont2.innerHTML = displayMenu2;
});
