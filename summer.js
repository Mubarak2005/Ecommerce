let clothes2 = document.querySelector("#summer .clothes");

const summerData = [
  {
    img: "https://i.pinimg.com/564x/77/9e/06/779e06e1c8c23a32b05ea5ccea5d2ecd.jpg",
    desc: "Men's shirt lapel summer short-sleeved new style",
    cost: "800",
    place: "spring-place1",
    rate: "(1.4k)",
  },
  {
    img: "https://i.pinimg.com/564x/99/16/19/9916191e06955c78866956343a7d26d9.jpg",
    desc: "GORGLITTER Men's Patchwork",
    cost: "1200",
    place: "spring-place2",
    rate: "(1.4k)",
  },
  {
    img: "https://i.pinimg.com/564x/49/46/7e/49467eadd772934a43439eda1857f4d6.jpg",
    desc: "Premium Business Summer Set",
    cost: "1499",
    place: "spring-place3",
    rate: "(1.4k)",
  },
  {
    img: "https://i.pinimg.com/564x/4b/01/9f/4b019f369da339f39a603f0623678b7c.jpg",
    desc: "Tom Harding Premium Business",
    cost: "1399",
    place: "spring-place4",
    rate: "(1.4k)",
  },
];

function summerDataFun() {
  let clutter = "";
  summerData.forEach((e, idx) => {
    clutter += `<div id="${e.place}" class="cloth h-[50vh] lg:h-[55vh] xl:h-[55vh] font-medium border-black bg-white rounded-xl relative">
        <div class="img h-[18rem] w-full">
            <img class="h-full w-full object-cover rounded-t-xl" src="${e.img}" alt="">
        </div>
        <div class="cloth-desc h-[10vh] text-[1rem] overflow-hidden p-2">
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
  clothes2.innerHTML = clutter;
}
summerDataFun();

function addTocartFun3(idx1) {
  let dropdown = document.getElementById("numberDropdown");
  let selectedOption = 1;
  dropdown.addEventListener("change", () => {
    selectedOption = dropdown.options[dropdown.selectedIndex].textContent;
    // console.log(selectedOption);
  });

  document.querySelector(".s-cart button").addEventListener("click", () => {
    newCartData.push({
      img: `${summerData[idx1].img}`,
      desc: `${summerData[idx1].desc}`,
      cost: `${summerData[idx1].cost}`,
      costf: `${summerData[idx1].cost * selectedOption}`,
      rate: `${summerData[idx1].rate}`,
      qty: selectedOption,
    });
    updateCartUI();
  });
}

clothes2.addEventListener("click", function (dets) {
  let index = dets.target.dataset.idx;
  sCartFun3(index);
});

function sCartFun3(index) {
  if (index >= 0) {
    main2.style.zIndex = 4;
    main2.style.backgroundColor = "#00000065";
    sCart.style.display = "block";
    section.forEach(function (e) {
      e.style.zIndex = -1;
    });

    sCart.innerHTML = `<div class="cloth h-full w-full font-medium aspect-h-1 aspect-w-1 flex justify-between flex-col lg:flex-row border-black bg-white rounded-xl relative p-4">
          <div class="img h-1/2 w-full lg:h-full lg:w-1/2">
              <img class="h-full w-full object-cover rounded-xl lg:rounded-l-xl" src="${summerData[index].img}" alt="">
          </div>
          <div class="right h-1/2 w-full lg:h-full lg:w-1/2 flex justify-between flex-col px-3">
              <div class="s-close w-fit flex justify-end cursor-pointer absolute top-7 right-6 md:top-4 md:right-4">
                  <div class="text-3xl"><i class="p-[.4rem] text-white rounded-lg bg-[#00000060] ri-close-line"></i></div>
              </div>
              <div class="cloth-desc text-[1rem] mt-2">
                  <h1>${summerData[index].desc}</h1>
              </div> 
              <div class="right2 h-full w-full flex flex-col justify-end gap-5">
                  <div class="w-full items-end flex justify-between">
                      <div class="cloth-price text-[1rem]"><h1>₹${summerData[index].cost}</h1></div>
                      <div class="rate">
                          <h1><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-line"></i> ${summerData[index].rate}</h1>
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
    addTocartFun3(index);
  }
}
