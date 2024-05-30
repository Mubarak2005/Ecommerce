const mFavIcon = document.querySelector(".m-fav-icon");
const favClose = document.querySelector(".fav-close");
const favInner = document.querySelector(".fav-inner-section");
let favRed = document.querySelector(".fav-red");

const favData = [];

function updateFavoritesUI() {
    let clutter = "";
    favData.forEach((e,idx) => {
        clutter += `<div class="fav-cloth w-full h-[12vh] flex items-end justify-between rounded-md bg-[#f8f7f78f]">
        <div class="h-full w-full flex justify-start items-start">
            <div class="img w-[10vh] h-full flex items-center p-1 rounded-md ml-2">
                <img class="object-cover rounded-md" src="${e.img}" alt="">
            </div>
            <div class="fav-desc h-full w-full md:w-[30vh] p-3 text-[.7rem] md:text-[.9rem] flex items-start overflow-hidden">
                <h1 class="h-full w-full whitespace-wrap overflow-hidden text-ellipsis" >${e.desc}</h1>
            </div>
        </div>    
        <div class="fav-cost h-full w-[10vh] flex flex-col justify-center gap-3 items-center p-2">
            <i class="text-xl md:text-2xl ri-heart-fill"></i>
            <button data-idx="${idx}" class="py-[2px] rounded-md delete-fav"><i data-idx="${idx}" class="delete-fav text-[1rem] md:text-[1.3rem] text-red-400 ri-delete-bin-5-line"></i></button>
        </div>
    </div>`;
    });
    document.querySelector(".fav-inner-section").innerHTML = clutter;
    favRed.style.display = "block";
    favRed.innerHTML = `<span class="h-full w-full flex justify-center items-center" >${favData.length}</span>`;
}


function initializeFavorites() {
    mFavIcon.addEventListener("click", () => {
        document.querySelector(".fav-outer-section").style.right = 0;
    });
    favClose.addEventListener("click", () => {
        document.querySelector(".fav-outer-section").style.right = "-200%";
    });

    clothes.addEventListener("click", (e) => {
        let fIndex = e.target.dataset.fav;
        if (fIndex !== undefined) {
            favData.push(featuredData[fIndex]);
            updateFavoritesUI();
        }
    });
    clothes1.addEventListener("click", (e) => {
        let fIndex = e.target.dataset.fav;
        if (fIndex !== undefined) {
            favData.push(springData[fIndex]);
            updateFavoritesUI();
        }
    });
    clothes2.addEventListener("click", (e) => {
        let fIndex = e.target.dataset.fav;
        if (fIndex !== undefined) {
            favData.push(summerData[fIndex]);
            updateFavoritesUI();
        }
    });
    clothes3.addEventListener("click", (e) => {
        let fIndex = e.target.dataset.fav;
        if (fIndex !== undefined) {
            favData.push(tShirtData[fIndex]);
            updateFavoritesUI();
        }
    });
    
   
}

favInner.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-fav")) {
        const favId = e.target.dataset.idx;
        // console.log(favId);
        if (favId >= 0) {
            // console.log("click")
            favData.splice(favId, 1);
            updateFavoritesUI();
        }
        if (favData.length === 0) {
            favRed.style.display = "none";
        }
    }
});

initializeFavorites();

const favIcons = document.querySelectorAll(".fav");
favIcons.forEach((e) => {
    let fi = true;
    e.addEventListener("click", () => {
        
        if(fi){
            e.classList.remove("ri-heart-line")
            e.classList.add("ri-heart-fill")
            fi = false;
        }
        else{
            e.classList.add("ri-heart-line")
            e.classList.remove("ri-heart-fill")
            fi = true;
        }
    });
});

