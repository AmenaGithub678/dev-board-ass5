
// Index to blog and blog to index back code.
document.addEventListener("DOMContentLoaded", function () {
    const discoverBtn = document.getElementById("discoverBtn");
    const backBtn = document.getElementById("backBtn");

    if (discoverBtn) {
        discoverBtn.addEventListener("click", function (event) {
            window.location.href = "./blog.html";
        });
    }

    if (backBtn) {
        backBtn.addEventListener("click", function (event) {
            window.location.href = "./index.html";
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const dayNameElement = document.getElementById("dayName");
    const localFullDateElement = document.getElementById("localFullDate");
  
    // Get current date
    const now = new Date();
  
    // Get the day name (short version)
    const optionsDay = { weekday: "short" };
    const dayName = now.toLocaleDateString("en-US", optionsDay);
  
    // Get the date in "Mar 03 Year 25" format
    const optionsDate = { month: "short", day: "2-digit", year: "2-digit" };
    const formattedDate = now.toLocaleDateString("en-US", optionsDate);
  
    // Update the HTML elements
    dayNameElement.textContent = dayName + ",";
    localFullDateElement.textContent = formattedDate.replace(",", " Year");
  
  });





