function showCross(item) {
    item.classList.toggle("active");
}

function showMenu() {
    document.querySelector(".dropdown").classList.toggle("show");
}

function toggleBookingForm() {
    document.querySelector(".booking").classList.toggle("active");
}

let counter = 0;

function changeReview(direction) {
    const reviewBlock = document.querySelector(".review__block");
    const carousel = reviewBlock.querySelector(".review__items");
    const reviewsLength = carousel.querySelectorAll(".review_item").length;
    let reviewWidth = reviewBlock.querySelector(".review_item").offsetWidth;
    let windowWidth = document.body.offsetWidth;
    let translateX = 0;
    let n;
 // console.log(windowWidth)
 

    if (windowWidth < 768) {
        n = 1;
    } else if (windowWidth >= 768 && windowWidth < 992) {
        n = 2;
    } else {
        n = 3
    }

    switch (direction) {
        case 'prev':
            counter <= 0 ? counter = reviewsLength - n : counter--;
            translateX = translateX - reviewWidth * counter;
            break;

        case 'next':
            counter > reviewsLength - n - 1 ? counter = 0 : counter++;
            translateX = -reviewWidth * counter - 20;
            break;
    }
    carousel.style.transform = `translateX(${translateX}px)`;
}

document.querySelector('.review__arrow.prev').addEventListener('click', () => changeReview('prev'));
document.querySelector('.review__arrow.next').addEventListener('click', () => changeReview('next'));








var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var checkinElem = document.querySelector("#checkin-date");
var checkoutElem = document.querySelector("#checkout-date");

checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
}