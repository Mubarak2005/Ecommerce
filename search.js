let sOutput = document.querySelector(".search-output-div");

const searchData = [];

const combinedData = featuredData.concat(summerData,springData,tShirtData);
// console.log(combinedData);

function searchFun(){
    clutter = "";
    searchData.forEach((e)=>{
        clutter += `<div class="output h-[7vh] w-full  border-[#393939] border-b-[1px]">
        <a class="h-full flex justify-start items-center gap-2 pl-2" href="#${e.place}">
            <div class="img h-[2.5rem] w-[2.5rem] overflow-hidden border-[#5b5a5a] border-[1px]">
                <img class="image-container w-[2.5rem] h-[2.5rem] object-cover" src="${e.img}" alt="">
            </div>
            <div class="desc whitespace-nowrap overflow-hidden text-ellipsis">
                <span>${e.desc}</span>
            </div>
        </a>
    </div>`
    })
    sOutput.innerHTML = clutter;
}


function searchOnInput() {
    input.addEventListener("input", () => {
        const searchTerm = input.value.trim().toLowerCase();
        // console.log(searchTerm);
        searchData.length = 0; // Clear previous search results
        if (searchTerm !== '') {
            sOutput.style.display = "block";
            combinedData.forEach((e) => {
                const descLowerCase = e.desc.toLowerCase();
                if (descLowerCase.includes(searchTerm)) {
                    searchData.push(e);
                }
            });
        }else{
            sOutput.style.display = "none";
        }
        // console.log(searchData);
        searchFun();
        document.querySelectorAll(".search-output-div .output a").forEach((e)=>{
            e.addEventListener("click",()=>{
                sOutput.style.display = "none";
                // console.log("click")
            })
        })
        
    });
}


searchOnInput();
