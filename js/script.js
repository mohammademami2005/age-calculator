$(document).ready(function () {
  setupInputValidation();

  $("button").click(function (event) {
    // Prevent default form submission
    event.preventDefault();
    // Get values ​​from input fields
    var day = parseInt($("#day").val(), 10);
    var month = parseInt($("#months").val(), 10);
    var year = $("#years").val();
    var errorMessage = "";

    // day validation
    if (isNaN(day) || day < 1 || day > 31) {
      $("#dayLable").css("color", "red");
      $("#day").css("border", "2px solid red");
      $("#dayErrorText").text("Must be a valid day");
    }

    // Month validation
    if (isNaN(month) || month < 1 || month > 12) {
      $("#monthLabel").css("color", "red");
      $("#months").css("border", "2px solid red");
      $("#monthErrorText").text("Must be a valid month");
    }

    // validating the year
    if (year.length !== 4 || isNaN(year)) {
      $("#yearLabel").css("color", "red");
      $("#years").css("border", "2px solid red");
      $("#yearErrorText").text("Must be a valid year");
    }

    // Calling the age calculation function
    ageCalculator(day, month, year);
  });

  // age calculation function
  function ageCalculator(day, month, year) {
    var today = new Date();
    var day2 = today.getDate(); // current day
    var month2 = 1 + today.getMonth(); // current month
    var year2 = today.getFullYear(); // current year
    var month3 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Number of days in each month

    // If the birthday is greater than the current day
    if (day > day2) {
      day2 = day2 + month3[month2 - 1]; // روزهای ماه قبل را به روز کنونی اضافه می‌کند
      month2 = month2 - 1; // ماه کنونی را یک ماه کاهش می‌دهد
    }

    // If the birth month is greater than the current month
    if (month > month2) {
      month2 = month2 + 12; // 12 ماه به ماه کنونی اضافه می‌کند
      year2 = year2 - 1; // سال کنونی را یک سال کاهش می‌دهد
    }

    // Calculate the age
    var Day = day2 - day;
    var Month = month2 - month;
    var Year = year2 - year;

    // Display the calculated age
    $("#dayShow").text(Day);
    $("#monthsShow").text(Month);
    $("#yearsShow").text(Year);
  }

  function setupInputValidation() {
    $("input")
      .on("mouseenter", function () {
        $(this).css("border", "2px solid hsl(259, 100%, 65%)");
      })
      .on("mouseleave", function () {
        $(this).css("border", "");
      })
      .on("input", function () {
        // Validate day input
        var day = parseInt($("#day").val(), 10);
        if (isNaN(day) || day < 1 || day > 31) {
          $("#dayLabel").css("color", "red");
          $("#day").css("border", "2px solid red");
          $("#dayErrorText").text("Must be a valid day");
        } else {
          $("#dayLable").css("color", "green");
          $("#day").css("border", "");
          $("#dayErrorText").text("");
        }

        // Validate month input
        var month = parseInt($("#months").val(), 10);
        if (isNaN(month) || month < 1 || month > 12) {
          $("#monthLabel").css("color", "red");
          $("#months").css("border", "2px solid red");
          $("#monthErrorText").text("Must be a valid month");
        } else {
          $("#monthLabel").css("color", "green");
          $("#months").css("border", "");
          $("#monthErrorText").text("");
        }

        // Validate year input
        var year = $("#years").val();
        if (year.length !== 4 || isNaN(year)) {
          $("#yearLabel").css("color", "red");
          $("#years").css("border", "2px solid red");
          $("#yearErrorText").text("Must be a valid year");
        } else {
          $("#yearLabel").css("color", "green");
          $("#years").css("border", "");
          $("#yearErrorText").text("");
        }
      });
  }
});
