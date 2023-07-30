let siteName = document.querySelector(".SiteName");
let siteUlr = document.querySelector(".SiteUlr");
let addbtn = document.querySelector("#addbtn");
let tableBady = document.querySelector(".tableBady");

let bookArr;

    if (localStorage.getItem("bookArr") == "") {
    bookArr = [];
    } else {
    bookArr = JSON.parse(localStorage.getItem("bookArr"));
    displayData(bookArr);
    }

    addbtn.addEventListener("click", function () {
    if (addbtn.innerHTML == "updata your site") {
        changeData();
        // addbtn.innerHTML = "Add your site";
        // let bookData = {
        // namebook: siteName.value,
        // ulrbook: siteUlr.value,
        // };
        // bookArr.splice(mainIdex,1,bookData)
    } else {
        let bookData = {
        namebook: siteName.value,
        ulrbook: siteUlr.value,
        };
        bookArr.push(bookData);
    }
    localStorage.setItem("bookArr", JSON.stringify(bookArr));
    displayData(bookArr);
    clearInput();
    });




    //display data
    function displayData(bookArr) {
    let box = ``;
    for (let i = 0; i<bookArr.length; i++) {
        box += `
            <tr>
                    <td>#${i + 1}</td>
                    <td>${bookArr[i].namebook}</td>
                    <td><button class="btn btn-info"><a href="${bookArr[i].ulrbook}" class="text-white text-decoration-none">visit</a></button></td>
                    <td><button class="btn btn-danger" onclick="updataItem(${i})">updata</button></td>
                    <td><button class="btn btn-dark" onclick="deleteItem(${i})">delete</button></td>
                </tr> 
            `;
    }
    tableBady.innerHTML = box;
    }

    // clear input
    function clearInput() {
    siteName.value = "";
    siteUlr.value = "";
    }

    //delete item
    function deleteItem(i) {
    bookArr.splice(i, 1);
    localStorage.setItem("bookArr", JSON.stringify(bookArr));
    displayData(bookArr);
    }
    let mainIdex;
    //updata item
    function updataItem(i) {
    siteName.value = bookArr[i].namebook;
    siteUlr.value = bookArr[i].ulrbook;
    addbtn.innerHTML = "updata your site";
    mainIdex = i;
    }
    function changeData() {
    bookArr[mainIdex].namebook = siteName.value;
    bookArr[mainIdex].ulrbook = siteUlr.value;
    addbtn.innerHTML = "Add your site";
    localStorage.setItem("bookArr", JSON.stringify(bookArr));
    displayData(bookArr);
    }

    function searchItem(term) {
    let searchList = [];
    for (let i = 0; i < bookArr.length; i++) {
        if (bookArr[i].namebook.toLowerCase().includes(term.toLowerCase())) {
        searchList.push(bookArr[i]);
        }
    }
    displayData(searchList);
    }
