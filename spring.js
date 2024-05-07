let clothes1 = document.querySelector("#spring-collections .clothes");
// let main2 = document.querySelector(".main2");
// let sCart = document.querySelector(".s-cart");
// let section = document.querySelectorAll(".section");

const springData = [
  {
    img: "https://i.pinimg.com/564x/5d/50/44/5d50440255eb103fe25f1f5d08832a0f.jpg",
    desc: "The Best Jean Jackets for Men to Wear with Everything",
    cost: "1100",
    place: "summer-place1",
    rate: "(1.4k)",
  },
  {
    img: "https://i.pinimg.com/564x/49/61/73/496173833263e8ffc7dea4c4c00799e2.jpg",
    desc: "Mbg Jackets & Coats | Casual Jackets For Spring Jackets",
    cost: "1199",
    place: "summer-place2",
    rate: "(1.4k)",
  },
  {
    img: "https://i.pinimg.com/564x/1d/ac/46/1dac46641e2739bb1ebe24e73fe2c0b9.jpg",
    desc: "2024 Spring Autumn jeans New Men's Light Blue Regular Fit",
    cost: "999",
    place: "summer-place3",
    rate: "(1.4k)",
  },
  {
    img: "https://i.pinimg.com/564x/15/35/37/1535379e07b4b8a1dbf04a288763a71d.jpg",
    desc: "The Best shirt for Men to Wear",
    cost: "710",
    place: "summer-place4",
    rate: "(1.4k)",
  },
];

function springDataFun() {
  let clutter = "";
  springData.forEach((e, idx) => {
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
  document.querySelector("#spring-collections .clothes").innerHTML = clutter;
}
springDataFun();

function addTocartFun2(idx1) {
  let dropdown = document.getElementById("numberDropdown");
  let selectedOption = 1;
  dropdown.addEventListener("change", () => {
    selectedOption = dropdown.options[dropdown.selectedIndex].textContent;
    // console.log(selectedOption);
  });

  document.querySelector(".s-cart button").addEventListener("click", () => {
    newCartData.push({
      img: `${springData[idx1].img}`,
      desc: `${springData[idx1].desc}`,
      cost: `${springData[idx1].cost}`,
      costf: `${springData[idx1].cost * selectedOption}`,
      rate: `${springData[idx1].rate}`,
      qty: selectedOption,
    });
    updateCartUI();
  });
}

clothes1.addEventListener("click", function (dets) {
  let index = dets.target.dataset.idx;
  sCartFun2(index);
});

function sCartFun2(index) {
  if (index >= 0) {
    main2.style.zIndex = 4;
    main2.style.backgroundColor = "#00000065";
    sCart.style.display = "block";
    section.forEach(function (e) {
      e.style.zIndex = -1;
    });

    sCart.innerHTML = `<div class="cloth h-full w-full font-medium aspect-h-1 aspect-w-1 flex justify-between flex-col lg:flex-row border-black bg-white rounded-xl relative p-4">
        <div class="img h-1/2 w-full lg:h-full lg:w-1/2">
            <img class="h-full w-full object-cover rounded-xl lg:rounded-l-xl" src="${springData[index].img}" alt="">
        </div>
        <div class="right h-1/2 w-full lg:h-full lg:w-1/2 flex justify-between flex-col px-3">
            <div class="s-close w-fit flex justify-end cursor-pointer absolute top-7 right-6 md:top-4 md:right-4">
                <div class="text-3xl"><i class="p-[.4rem] text-white rounded-lg bg-[#00000060] ri-close-line"></i></div>
            </div>
            <div class="cloth-desc text-[1rem] mt-2">
                <h1>${springData[index].desc}</h1>
            </div> 
            <div class="right2 h-full w-full flex flex-col justify-end gap-1 md:gap-3">
                <div class="w-full items-end flex justify-between">
                    <div class="cloth-price text-[1rem]"><h1>₹${springData[index].cost}</h1></div>
                    <div class="rate">
                        <h1><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-line"></i> ${springData[index].rate}</h1>
                    </div>
                </div>

                <div class="addsub w-full flex gap-1 justify-end items-center">
                <div class="p-2 flex gap-2 items-center bg-[#e7e6e6] rounded-md">
                    <h1 class="font-medium ">Quantity</h1>
                    <select id="numberDropdown" class=" p-[.1rem] bg-[#e7e6e6] outline-none">
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
    addTocartFun2(index);
  }
}

// document.addEventListener("click", function(event) {
//     if (event.target.closest(".s-cart button")) {
//         document.querySelector(".s-cart button").textContent = "Added";
//     }
// });
