

// Index to blog and blog to index back code.
 
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


// Background Color Changed

let themeBtn = document.getElementById("themeBtn");

const myChangeColors = ["#B6FFA1", "#16C47F", "#FDAB9E", "#F2E2B1", "#C1D8C3"];

let currentColorIndex = 0;

function myFunc() {
    
    changeColor(myChangeColors[currentColorIndex]);

   
    if (currentColorIndex === myChangeColors.length - 1) {
        currentColorIndex = 0;  
    } else {
        currentColorIndex += 1; 
    }
}
themeBtn.addEventListener("click", myFunc);

// Calender Date time change

document.addEventListener("DOMContentLoaded", function () {
    const dayNameElement = document.getElementById("dayName");
    const localFullDateElement = document.getElementById("localFullDate");
  
 
    const now = new Date();
  

    const optionsDay = { weekday: "short" };
    const dayName = now.toLocaleDateString("en-US", optionsDay);
  

    const optionsDate = { month: "short", day: "2-digit", year: "2-digit" };
    const formattedDate = now.toLocaleDateString("en-US", optionsDate);
  

    dayNameElement.textContent = dayName + ",";
    localFullDateElement.textContent = formattedDate.replace(",", " Year");
  
  });

// Task assigned , value increase and activity log status

const taskCountElement = document.getElementById("taskVal");
let taskCount = parseInt(taskCountElement.textContent);

const totalTaskElement = document.getElementById("total-task");
let totalCount = parseInt(totalTaskElement.textContent);

const activityLog = document.getElementById("activity-log");

const completeButtons = document.getElementsByClassName("collect-btn");

for (let i = 0; i < completeButtons.length; i++) {
    completeButtons[i].addEventListener("click", function () {
        alert("Board update successfully");

        //complete button disable
        this.disabled = true;
        this.style.backgroundColor = "gray";

        // Get the task title dynamically
        let taskTitleElement = this.closest(".bg-gray-100").querySelector("#task-title");
        let taskTitle = taskTitleElement ? taskTitleElement.textContent : "Unknown Task";

        // Decrease task count and increase completed count
        taskCount -= 1;
        taskCountElement.textContent = taskCount;

        totalCount += 1;
        totalTaskElement.textContent = totalCount;

        // Date formet for activity log sec
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        let formattedTime = `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;

        // Create activity log entry
        const stausEntry = document.createElement("p");
              stausEntry.innerText = `You have completed the task ${taskTitle} at ${formattedTime}`;
              stausEntry.classList.add("bg-gray-100", "p-2", "rounded-xl" ,"mb-4");

        // Append log entry to activity log
        activityLog.appendChild(stausEntry);

        // Check if all tasks are completed
        if (taskCount === 0) {
            setTimeout(() => {
                alert(" Congrats! You have completed all the current tasks!");
            }, 500);
        }
    });
}

// My clear history button code

const clearHistoryBtn = document.getElementById("clear-history");

clearHistoryBtn.addEventListener("click", function () {
    activityLog.innerHTML = ""; 
});


    
         















