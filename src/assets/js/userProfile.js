var tab = "My Profile";
var tabs= ["My Profile" , "My wishList" , "My orders"]
var tabBody = document.querySelectorAll(".card-container");
var tabLinks = document.querySelector("#manageLinks");
var tabLink = tabLinks.querySelectorAll("button");

for (let i = 0 ; i < tabLink.length;i++){
    tabLink[i].addEventListener("click",accountFunc);
}


function accountFunc(){
    tab = this.innerText;
    var x = tabs.findIndex((t)=>{
        return t == tab
    })
    for (let i = 0 ; i < tabBody.length;i++){
        tabBody[i].classList.remove("active");
        tabLink[i].classList.remove("active");
        
    }
    displayCards(x)
}

function displayCards(x){
    console.log(x);
    
    tabBody[x].classList.add("active");
    tabLink[x].classList.add("active");
    
    console.log(tabBody[x]);
}