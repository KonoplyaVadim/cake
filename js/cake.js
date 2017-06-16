/**
 * Created by konoplya on 16.06.2017.
 */
window.addEventListener("load",function(){
    var formCake=document.forms[0];
    var buy=document.getElementById("buy");
    var cakePrice;
    var delivPrice;
    var finPrice;
    var priceStr;
    formCake.fName.addEventListener("change",function (e) {
        var pattern = /\w{2,}/;
        if(!pattern.test(this.value)) {
            buy.disabled="true";
            alert("Заполните все поля корректно");
        }
        else{
            buy.removeAttribute("disabled");
        }
    });
    formCake.email.addEventListener("change",function () {
        var pattern = /\w{2,}/;
        if(!pattern.test(this.value)) {
            buy.disabled="true";
            alert("Заполните все поля корректно");
        }
        else{
            buy.removeAttribute("disabled");
        }
    });
    formCake.phone.addEventListener("change",function () {
        var pattern = /\d{7,}/;
        if(!pattern.test(this.value)) {
            buy.disabled="true";
            alert("Заполните все поля корректно");
        }
        else{
            buy.removeAttribute("disabled");
        }
    });

    var small=document.getElementById("small");
    var middle=document.getElementById("middle");
    var big=document.getElementById("big");
    small.onclick=price;
    middle.onclick=price;
    big.onclick=price;
    function price(e){
        if(e.target==small){
            cakePrice=150;
        }
        else if (e.target==middle){
            cakePrice=200;
        }
        else if(e.target==big){
            cakePrice=250;
        }
        console.log(cakePrice);
    }

    var pickup=document.getElementById("pickup");
    var courier=document.getElementById("courier");
    pickup.onclick=delPrice;
    courier.onclick=delPrice;

    function delPrice(e){
        if(e.target==pickup){
            delivPrice=20;
        }
        else if (e.target==courier){
            delivPrice=0;
        }
        console.log(delivPrice);
    }
    document.getElementById("calculate").addEventListener("click",function () {
        finPrice=cakePrice+delivPrice;
        priceStr=finPrice.toString();
        document.getElementById("Price").value=priceStr;
        console.log(priceStr);
    });
});