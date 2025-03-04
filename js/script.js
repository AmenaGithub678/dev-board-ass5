
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


 
// update task & value count
function updateTaskCount() {
    
    const taskCountElement = document.getElementById("taskVal");  
    let taskCount = getInputValueByID("taskVal"); 

    const  totalTaskElement = document.getElementById("total-task");
    let totalCount = getInputValueByID("total-task");


    const completeButtons = document.getElementsByClassName("collect-btn");  

 
    for (let i = 0; i < completeButtons.length; i++) {
        completeButtons[i].addEventListener("click", function () {
            alert("Board update successfully");

         
            this.disabled = true;
            this.style.backgroundColor = "gray";  

           
            taskCount -= 1;
            taskCountElement.textContent = taskCount;

            totalCount +=1;
            totalTaskElement.textContent = totalCount;


            if (taskCount === 0) {
                alert(" Congrats! You have completed all the current tasks!");
            }
        });
    }
}


document.addEventListener("DOMContentLoaded", function () {
    updateTaskCount();  
});






