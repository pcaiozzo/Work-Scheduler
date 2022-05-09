// Current Day at the top of scheduler

var timeKey;
var currentHour = moment().format("H");
console.log(currentHour);
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMM Do, YYYY "));
console.log(currentDay);

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

let textArea = $(".text-area");
//console.log(textArea.val());

let button = $(".saveBtn");

function getFromLocalStorage() {
  textArea.text = localStorage.getItem("");
}

function init() {
  getFromLocalStorage();

  for (let i = 0; i < timeArray.length; i++) {
    const element = timeArray[i];
    $(element).on("click", function (event) {
      if (event.target.className == "btn saveBtn col-md-1") {
        var eventBlock = $(event.target).siblings();
        var hour = $(event.target).parent().attr("id");
        localStorage.setItem(hour, eventBlock[1].value);
        //console.log(hour);
      }
    });
    //$("#" +timeKey).children().children()
    localStorage.getItem(timeKey);
    //console.log($("#" + timeKey).children().children());
    //use time-array instead of timeKey
    
  }
};
//hii

init();
