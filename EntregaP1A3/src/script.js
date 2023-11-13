document.querySelector(".hamburger").addEventListener("click", () =>
document.querySelector(".container").classList.toggle("show-menu")
);

function dropdown1(p){
    var e = document.getElementsByClassName('dropDown')[0];
    var d = ['block','none'];
 
    e.style.display = d[p];
 
    var t = ['0px', '0px,-10px'];
    setTimeout(function(){
     e.style.transform = 'translate('+t[p]+')';
    },0);


 }

 function dropdown2(p){
    var e = document.getElementsByClassName('dropDown')[1];
    var d = ['block','none'];
 
    e.style.display = d[p];
 
    var t = ['0px', '0px,-10px'];
    setTimeout(function(){
     e.style.transform = 'translate('+t[p]+')';
    },0);
 }

 function dropdown3(p){
    var e = document.getElementsByClassName('dropDown')[2];
    var d = ['block','none'];
 
    e.style.display = d[p];
 
    var t = ['0px', '0px,-10px'];
    setTimeout(function(){
     e.style.transform = 'translate('+t[p]+')';
    },0);
 }
 
 
function category(x){
    var category = document.getElementById('category-'+x).innerHTML;
    document.getElementsByTagName('input')[1].value = category;
} 

function platform(x){
    var platform = document.getElementById('platform-'+x).innerHTML;
    document.getElementsByTagName('input')[2].value = platform;
}

function status(x){
    var status = document.getElementById('status-'+x).innerHTML;
    document.getElementsByTagName('input')[3].value = status;
}




