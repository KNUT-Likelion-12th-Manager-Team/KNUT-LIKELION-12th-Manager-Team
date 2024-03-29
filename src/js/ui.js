// 스크롤 한 번에 한 페이지씩 내리기
const wrap = document.getElementsByClassName('container_wrapper')[0]; // 보일 영역
const container = document.getElementsByClassName('container');
let page = 0; // 영역 포지션 초기값
const lastPage = container.length - 1; // 마지막 페이지

window.addEventListener('wheel',(e)=>{
    e.preventDefault();
    if(e.deltaY > 0){
        page++;
    }else if(e.deltaY < 0){
        page--;
    }
    if(page < 0){
        page=0;
    }else if(page > lastPage){
        page = lastPage;
    }
    wrap.style.top = page * - 100 + 'vh';
},{passive:false}); // 디폴트 스크롤 기능 제거


// nav 메뉴 클릭시 스크롤 페이지 이동
// page 변수만 바꿔주면 window이벤트리스너 함수를 통해 이동
function navScroll(name) {
    switch(name){
        case "home":
            page = 0;
            break;
        case "info":
            page = 1;
            break;
        case "members":
            page = 2;
            break;
        case "daily_check":
            page = 3;
            break;
        default:
            break;
    }
}
