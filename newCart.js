const cartIcon = document.querySelector(".cart-icon");
const cartClose = document.querySelector(".cart-close");
const cartOuterSection = document.querySelector(".cart-outer-section");
const billSpan = document.querySelector(".bill");
const tBSpan = document.querySelector(".total-bill");
const cartInner = document.querySelector(".cart-outer-section .cart-inner-section");
const deleteCartButtons = document.querySelectorAll(".delete-cart");
const checkoutButton = document.querySelector(".checkout-button");
const bookedDiv = document.querySelector(".booked-div");
const bookClose = document.querySelector(".book-close");


checkoutButton.disabled = true;
checkoutButton.style.cursor = "not-allowed";

const newCartData = [];

function updateCartUI() {
    if(newCartData.length > 0){
        checkoutButton.disabled = false;
        checkoutButton.style.cursor = "pointer";
    }
    let clutter = "";
    newCartData.forEach((e, idx) => {
        clutter += `<div class="cart-cloth w-full h-[12vh] flex items-end justify-between rounded-md bg-[#f8f7f7]">
        <div class="h-full w-full flex justify-start items-start">
            <div class="img w-[10vh] h-full flex items-center p-1 rounded-md ml-2">
                <img class="object-cover rounded-md" src="${e.img}" alt="">
            </div>
            <div class="cart-desc h-full w-[90%] bg-red-500 md:w-[30vh] text-[.7rem] md:text-[.9rem] flex flex-col items-start justify-between p-2">
                <h1 class="h-[70%] overflow-hidden" >${e.desc}</h1>
                <h1>₹${e.cost}</h1>
            </div>
        </div>    
        <div class="cart-cost h-full w-[70px] text-[.8rem] md:text-[1rem] flex flex-col justify-center p-2 items-end">
            <h1>Qty: ${e.qty}</h1>
            <h1 class="font-bold" >₹${e.costf}</h1>
            <button class="py-[2px] rounded-md delete-cart"><i data-idx="${idx}" class="delete-cart text-red-400 ri-delete-bin-5-line"></i></button>
        </div>
    </div>`;
    });
    cartInner.innerHTML = clutter;
    calculateBill();
}

function calculateBill() {
    let bill = 0;
    newCartData.forEach((e) => {
        bill += Number(e.costf);
    });
    billSpan.textContent = bill;
    let tBill = bill - 110;
    tBSpan.textContent = tBill;
}

cartIcon.addEventListener("click", () => {
    cartOuterSection.style.right = 0;
});

cartClose.addEventListener("click", () => {
    cartOuterSection.style.right = "-200%";
});

cartInner.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-cart")) {
        const cartId = e.target.dataset.idx;
        if (cartId >= 0) {
            newCartData.splice(cartId, 1);
            updateCartUI();
        }
        if (newCartData.length === 0) {
            billSpan.textContent = 0;
            tBSpan.textContent = 0;
            checkoutButton.disabled = true;
            checkoutButton.style.cursor = "not-allowed";
        }
        
    }
});



checkoutButton.addEventListener("click",()=>{
    bookedDiv.style.display = "flex";
})
bookClose.addEventListener("click",()=>{
    bookedDiv.style.display = "none";
})


// // Adding event listeners to delete buttons individually
// deleteCartButtons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         let cartId = e.target.dataset.idx;
//         if (cartId >= 0) {
//             newCartData.splice(cartId, 1);
//             updateCartUI();
//         }
//         // if (newCartData.length === 0) {
//         //     billSpan.textContent = 0;
//         //     tBSpan.textContent = 0;
//         // }
//     });
// });
