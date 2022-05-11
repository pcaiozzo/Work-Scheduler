// Current Day at the top of scheduler
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMM Do, YYYY "));

const nineAm = $("#hour-9");
const tenAm = $("#hour-10");
const elevenAm = $("#hour-11");
const twelvePm = $("#hour-12");
const onePm = $("#hour-1");
const twoPm = $("#hour-2");
const threePm = $("#hour-3");
const fourPm = $("#hour-4");
const fivePm = $("#hour-5");

var timeArray = [
  nineAm,
  tenAm,
  elevenAm,
  twelvePm,
  onePm,
  twoPm,
  threePm,
  fourPm,
  fivePm,
];

function init() {
  timeColor();

  for (let i = 0; i < timeArray.length; i++) {
    const element = timeArray[i];
    $(element).on("click", function (event) {
      if (event.target.className == "btn saveBtn col-md-2") {
        var eventBlock = $(event.target).siblings();
        var hour = $(event.target).parent().attr("id");
        console.log(hour);
        localStorage.setItem(hour, eventBlock[1].value);
      }
    });
    const text = localStorage.getItem($(element).attr("id"));
    $(element).children("textarea")[0].value = text;
  }
};

function timeColor() {
  for (let i = 0; i < timeArray.length; i++) {
    const element = timeArray[i];
    const currentTime = i + 9;
    if (currentTime < moment().format("H")) {
      $(element).addClass("past");
      $(element).removeClass("future");
      $(element).removeClass("present");
    } else if (currentTime > moment().format("H")) {
      $(element).addClass("future");
      $(element).removeClass("past");
      $(element).removeClass("present");
    } else if (currentTime == moment().format("H")) {
      $(element).addClass("present");
      $(element).removeClass("future");
      $(element).removeClass("past");
    }
  }
}

init();
