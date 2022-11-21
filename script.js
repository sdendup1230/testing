document.querySelectorAll("header ul li").forEach(function(page) {
    page.onclick = () => {
        let pageName = page.id.split("-")[1];
        showPage(pageName);
    }
});

function showPage(pageName) {
    clearPages();
    const current_page = document.getElementById(pageName);
    current_page.style.display = "block";
}

function clearPages() {
    const pages = document.querySelectorAll("#page-wrapper > div");
    
    for(var i = 0; i < pages.length; i++){
        pages[i].style.display = "none";
    }
}

showPage("home");

// function changeHead(elem){
//     const item = elem.value
// }
const uniformSize = document.getElementById("uniformSelect");
const bootSize = document.getElementById("bootSelect");
const shirtSize = document.getElementById("shirtSelect");
// console.log(x.value)

function summitUniform(){
    event.preventDefault();
    const size = uniformSelect.value;
    localStorage.setItem("uniform", "Orange Uniform");
    localStorage.setItem("uniformSize", uniformSize.value);
    document.getElementById("uniformSubmitted").innerHTML = "Uniform Added to cart!"
    setTimeout(()=>{
        document.getElementById("uniformSubmitted").innerHTML = " "
    },2000)
}
document.getElementById("selectedUniform").innerHTML = `You have selected : ${localStorage.getItem("uniform")}, size: ${localStorage.getItem("uniformSize")}`



function summitBoot(){
    event.preventDefault();
    const size = uniformSelect.value;
    localStorage.setItem("boot", "Magnum Boot");
    localStorage.setItem("bootSize", bootSize.value);
    document.getElementById("bootSubmitted").innerHTML = "Boot Added to cart!";
    setTimeout(()=> {
        document.getElementById("bootSubmitted").innerHTML = " "; 
    },2000)
}
document.getElementById("selectedBoot").innerHTML = `You have selected : ${localStorage.getItem("boot")}, size: ${localStorage.getItem("bootSize")}`



function summitShirt(){
    event.preventDefault();
    const size = shirtSelect.value;
    localStorage.setItem("shirt", "Orange Shirt");
    localStorage.setItem("shirtSize", shirtSize.value);
    document.getElementById("shirtSubmitted").innerHTML = "Shirt Added to cart!";
    setTimeout(()=>{
        document.getElementById("shirtSubmitted").innerHTML = " ";
    },2000)
}
document.getElementById("selectedShirt").innerHTML = `You have selected : ${localStorage.getItem("shirt")}, size: ${localStorage.getItem("shirtSize")}`



// localStorage.clear()

function confirm(){
    alert("Your order is successfull! check your email for Payment to be done!");
    showPage("home");

}
