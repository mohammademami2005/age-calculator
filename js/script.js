$(document).ready(function () {
  $("button").click(function (event) {
    // جلوگیری از ارسال پیش‌فرض فرم
    event.preventDefault();
    // دریافت مقادیر از فیلدهای ورودی
    var day = parseInt($("#day").val(), 10);
    var month = parseInt($("#months").val(), 10);
    var year = $("#years").val();
    var errorMessage = "";
    // اعتبارسنجی روز
    if (isNaN(day) || day < 1 || day > 31) {
        errorMessage += "Please enter a valid day (1-31).<br>"    }
    // اعتبارسنجی ماه
    if (isNaN(month) || month < 1 || month > 12) {
        errorMessage += "Please enter a valid month (1-12).<br>"; 
    }
    // اعتبارسنجی سال
    if (year.length !== 4 || isNaN(year)) {
        errorMessage += "Please enter a valid year (4 digits).<br>"; 
    }
    // نمایش پیام‌های خطا یا ادامه
    if (errorMessage) {
      $("#error-message").html(errorMessage);
    } else {
      $("#error-message").html("ورودی‌ها معتبر هستند!");
      // فراخوانی تابع محاسبه سن
      ageCalculator(day, month, year);
    }
  });
  
  // تابع محاسبه سن
  function ageCalculator(day, month, year) {
    var today = new Date();
    var day2 = today.getDate(); // روز کنونی
    var month2 = 1 + today.getMonth(); // ماه کنونی
    var year2 = today.getFullYear(); // سال کنونی
    var month3 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // تعداد روزهای هر ماه
    
    // اگر روز تولد بیشتر از روز کنونی باشد
    if (day > day2) {
      day2 = day2 + month3[month2 - 1]; // روزهای ماه قبل را به روز کنونی اضافه می‌کند
      month2 = month2 - 1; // ماه کنونی را یک ماه کاهش می‌دهد
    }
    
    // اگر ماه تولد بیشتر از ماه کنونی باشد
    if (month > month2) {
      month2 = month2 + 12; // 12 ماه به ماه کنونی اضافه می‌کند
      year2 = year2 - 1; // سال کنونی را یک سال کاهش می‌دهد
    }
    
    // محاسبه سن
    var Day = day2 - day;
    var Month = month2 - month;
    var Year = year2 - year;
    
    // نمایش سن محاسبه شده
    $("#dayShow").text(Day);
    $("#monthsShow").text(Month);
    $("#yearsShow").text(Year);
  }
});