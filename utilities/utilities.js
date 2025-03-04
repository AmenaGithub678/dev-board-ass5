
function getInputValueByID(id) {
    const value = document.getElementById(id).textContent;  
    const convertedValue = parseInt(value);  
    return convertedValue;
}


function changeColor(color) {
    // Change the background color of the body
    document.body.style.background = color;

    // Also change the background color of the theme button
    themeBtn.style.background = color;
}


