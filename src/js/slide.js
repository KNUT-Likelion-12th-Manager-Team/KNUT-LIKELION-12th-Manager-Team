const sliderWrap = document.querySelector(".slider-wrap");
const mainSlide = document.querySelector(".main-slide");       // 보여지는 영역
const slider = document.querySelector(".slider");   // 움직이는 영역
const slide = document.querySelectorAll(".slide");            // 이미지

let currentIndex = 0;                       // 현재 이미지
let sliderCount = slide.length;            // 이미지 갯수
let sliderWidth = mainSlide.offsetWidth;    // 이미지 가로값


// 이미지 이동
function gotoSlide(num){
    slider.style.transition = "all 400ms";
    slider.style.transform = "translateX("+ -sliderWidth * num +"px)";
    currentIndex = num;
}

// 버튼 클릭했을 때
document.querySelectorAll(".slider-btn-box button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let prevIndex = (currentIndex + (sliderCount -1)) % sliderCount;
        let nextIndex = (currentIndex + 1) % sliderCount;

        if(btn.classList.contains("prev")){
            gotoSlide(prevIndex);
        } else {
            gotoSlide(nextIndex);
        }
    });
})