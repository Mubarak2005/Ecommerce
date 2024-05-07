let clothes = document.querySelector("#Featured .clothes");
let main2 = document.querySelector(".main2");
let sCart = document.querySelector(".s-cart");
let section = document.querySelectorAll(".section");

const featuredData = [
  {
    img: "https://i.pinimg.com/564x/a4/79/74/a47974eb9369523c42a35f2106c37127.jpg",
    desc: "The Best Jean Jackets for Men to Wear",
    cost: "1500",
    rate: "(1.4k)",
    place: "fplace1",
    qty: "1",
  },
  {
    img: "https://i.pinimg.com/564x/4e/bb/53/4ebb534fbdd4759f459ce3c4efd5f438.jpg",
    desc: "Cotton Long-Sleeved Shirt",
    cost: "999",
    rate: "(1.4k)",
    place: "fplace2",
    qty: "1",
  },
  {
    img: "https://i.pinimg.com/564x/6f/bc/21/6fbc21e09012154395ce7ceef40d451e.jpg",
    desc: "Men's pure cotton long-sleeved shirt spring",
    cost: "799",
    rate: "(1.4k)",
    place: "fplace3",
    qty: "1",
  },
  {
    img: "https://i.pinimg.com/564x/71/2d/24/712d248e3911cbd4f7f50410fd1aba2b.jpg",
    desc: "100% Cotton Long Sleeve Shirt Men Casual Slim Fit",
    cost: "500",
    rate: "(1.4k)",
    place: "fplace4",
    qty: "1",
  },
  {
    img: "https://i.pinimg.com/564x/8d/00/64/8d00647253d0a8ccf3a3245a68d85845.jpg",
    desc: "Men's Silk Casual Trousers - 31 / Dark Gray",
    cost: "499",
    rate: "(1.4k)",
    place: "fplace5",
    qty: "1",
  },
  {
    img: "https://i.pinimg.com/564x/1f/80/a5/1f80a5d9949f05a85421be761658155a.jpg",
    desc: "Men's pure cotton long-sleeved shirt spring new yellow",
    cost: "540",
    rate: "(1.4k)",
    place: "fplace6",
    qty: "1",
  },
  {
    img: "https://i.pinimg.com/564x/a8/52/37/a85237736b10f8bc5029e94077dac398.jpg",
    desc: "Mens Cotton Plaid Lapel Drop Shoulder Relaxed Fit",
    cost: "499",
    rate: "(1.4k)",
    place: "fplace7",
    qty: "1",
  },
  {
    img: "https://i.pinimg.com/564x/5e/8c/3b/5e8c3ba4846164f762beb26affa2e619.jpg",
    desc: "Chaquetas sueltas de ajuste relajado con solapa de",
    cost: "850",
    rate: "(1.4k)",
    place: "fplace8",
    qty: "1",
  },
];

function featuredDataFun() {
  let clutter = "";
  featuredData.forEach((e, idx) => {
    clutter += `<div id="${e.place}" class="cloth h-[450px] font-medium border-black bg-white rounded-xl relative">
        <div class="img h-[300px] w-full">
            <img class="h-full w-full object-cover rounded-t-xl" src="${e.img}" alt="">
        </div>
        <div class="cloth-desc h-[70px] text-[1rem] overflow-hidden p-2">
            <h1>${e.desc}</h1>
        </div>  
        <div class="w-full bottom flex justify-between absolute bottom-0 left-0 p-2 mt-3">
            <div class="ml-1">
                <div class="cloth-price text-[1rem]"><h1>₹${e.cost}</h1></div>
                <div class="rate">
                    <h1><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-line"></i> ${e.rate}</h1>
                </div>
            </div>
            <div class="favcart text-2xl flex justify-center items-center gap-4 mr-5">
                <div data-fav="${idx}" class="p-1 cursor-pointer"><i data-fav="${idx}" class="fav ri-heart-line"></i></div>
                <div data-idx="${idx}" class="Plus-cart p-1 cursor-pointer"><i data-idx="${idx}" class="ri-add-circle-fill"></i></div>
            </div>
        </div>
    </div>`;
  });
  document.querySelector("#Featured .clothes").innerHTML = clutter;
}
featuredDataFun();

function addTocartFun1(idx1) {
  let dropdown = document.getElementById("numberDropdown");
  let selectedOption = 1;
  dropdown.addEventListener("change", () => {
    selectedOption = dropdown.options[dropdown.selectedIndex].textContent;
    // console.log(selectedOption);
  });

  document.querySelector(".s-cart button").addEventListener("click", () => {
    newCartData.push({
      img: `${featuredData[idx1].img}`,
      desc: `${featuredData[idx1].desc}`,
      cost: `${featuredData[idx1].cost}`,
      costf: `${featuredData[idx1].cost * selectedOption}`,
      rate: `${featuredData[idx1].rate}`,
      qty: selectedOption,
    });
    updateCartUI();
  });
}

clothes.addEventListener("click", function (dets) {
  let index = dets.target.dataset.idx;
  sCartFun1(index);
});

function sCartFun1(index) {
  if (index >= 0) {
    main2.style.zIndex = 4;
    main2.style.backgroundColor = "#00000065";
    sCart.style.display = "block";
    section.forEach(function (e) {
      e.style.zIndex = -1;
    });

    sCart.innerHTML = `<div class="cloth h-full w-full font-medium aspect-h-1 aspect-w-1 flex justify-between flex-col lg:flex-row border-black bg-white rounded-xl relative p-4">
        <div class="img h-1/2 w-full lg:h-full lg:w-1/2">
            <img class="h-full w-full object-cover rounded-xl lg:rounded-l-xl" src="${featuredData[index].img}" alt="">
        </div>
        <div class="right h-1/2 w-full lg:h-full lg:w-1/2 flex justify-between flex-col px-3">
            <div class="s-close w-fit flex justify-end cursor-pointer absolute top-7 right-6 md:top-4 md:right-4">
                <div class="text-3xl"><i class="p-[.4rem] text-white rounded-lg bg-[#00000060] ri-close-line"></i></div>
            </div>
            <div class="cloth-desc text-[1rem] mt-2">
                <h1>${featuredData[index].desc}</h1>
            </div> 
            <div class="right2 h-full w-full flex flex-col justify-end gap-1 md:gap-3">
                <div class="w-full items-end flex justify-between">
                    <div class="cloth-price text-[1rem]"><h1>₹${featuredData[index].cost}</h1></div>
                    <div class="rate">
                        <h1><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-line"></i> ${featuredData[index].rate}</h1>
                    </div>
                </div>

                <div class="addsub w-full flex gap-1 justify-end items-center">
                <div class="p-2 flex gap-2 items-center bg-[#e7e6e6] rounded-md">
                    <h1 class="font-medium ">Quantity</h1>
                    <select id="numberDropdown" class="p-[.5rem] bg-[#e7e6e6] outline-none">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                </div>

                <button class="bg-blue-300 hover:bg-blue-400 active:bg-blue-300 p-4 font-bold rounded-md mb-2">Add to Cart</button>
            </div>    

        </div>
    </div>`;

    document.addEventListener("click", function (event) {
      if (event.target.closest(".s-close")) {
        main2.style.zIndex = -1;
        main2.style.backgroundColor = "transparent";
        sCart.style.display = "none";
        section.forEach(function (e) {
          e.style.zIndex = 2;
        });
      }
    });
    addTocartFun1(index);
  }
}

document.addEventListener("click", function(event) {
    if (event.target.closest(".s-cart button")) {
        document.querySelector(".s-cart button").textContent = "Added";
    }
});
