let Cart = [];
let CartPrice = 0.0;
let CartAmount = Cart.length;
const CartTex = document.createElement("i");
const CartBTN = document.getElementById("CARBTN");
const CartDiv = document.getElementById("products");
const ContinueShopingHref = document.createElement("a");
const ContinueShopingBTN = document.createElement("button");
const CartText = document.createElement("h2");
console.log("You have " + CartAmount + " product");
if (CartAmount == 0){
    CartTex.textContent = "0";
    CartText.textContent = "عربة التسوق فارغة...";
    ContinueShopingBTN.textContent = "تابع التسوق";
    ContinueShopingHref.href ="index.html";
    CartDiv.append(CartText);
    CartBTN.append(CartTex);
    CartDiv.append(ContinueShopingHref);
    ContinueShopingHref.append(ContinueShopingBTN);
}