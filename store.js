var like = document.querySelectorAll(".like")

for (let i=0;i<like.length;i++) {
    like[i].addEventListener("click",function () {
        like[i].classList.toggle("red");

    })};

var remove = document.querySelectorAll(".btn-remove")
for (let i=0;i<remove.length;i++){
    remove[i].addEventListener("click",function(){
        remove[i].parentNode.parentNode.remove();
        Total()
    });
    
}

var plus = document.querySelectorAll(".btnplus")
for (let i=0;i<plus.length; i ++ ){
    plus[i].addEventListener("click",function()
    {
        plus[i].nextElementSibling.innerHTML++;
        Total()
    });
    
}
var minus = document.querySelectorAll('.btnmins')

for (let i=0;i<plus.length; i ++ ){
    minus[i].addEventListener("click",function()
    {if (minus[i].previousElementSibling.innerHTML > 0)
        minus[i].previousElementSibling.innerHTML--;
        Total()
    });
    
}

  
function Total() {
    var price = document.querySelectorAll(".shop-item-price");
    var quantity = document.querySelectorAll(".quantity");
    var sum = 0;
    var totalprise = document.querySelector(".total")
    for (var i = 0; i < quantity.length; i++) {
    
    sum += parseInt(price[i].innerText) * parseInt(quantity[i].innerText)
    }
   // console.log(sum);
   totalprise.innerHTML = sum
   
    }
