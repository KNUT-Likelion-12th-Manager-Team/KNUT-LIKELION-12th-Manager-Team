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
    console.log(e.deltaY)
    wrap.style.top = page * -100 + 'vh';
},{passive:false}); // 디폴트 기능 제거 - 스크롤

// 로그인 & 로그아웃

//임시 아이디 비번
let id = "name";
let pw = "1234";
//로그인 여부 (로그인 토큰 유효시간 동안 true)
let isActiveLogin = false;

const login_wrapper = document.querySelector('.login_wrapper');
const logout_wrapper = document.querySelector('.logout_wrapper');
const logout_id = document.querySelector('#logout_id');

function Login() {
    if(id=="name" && pw=="1234"){
        logout_id.style.display = 'flex';
        login_wrapper.style.display = 'none';
        isActiveLogin = true;
    }
    else{
        alert("로그인 실패!")
    }
}

function Logout() {
    logout_id.style.display = 'none';
    login_wrapper.style.display = 'flex';
    isActiveLogin = false;
}


// login시 페이지 로딩이 다시되기 때문에 페이지 노출 즉시, 로그인 여부를 검사하고 로그인/로그아웃 ui를 나타내거나 숨기는 코드를 init() 함수에 추가함
const init = () => {
    if (isActiveLogin){
        logout_id.style.display = 'flex';
        login_wrapper.style.display = 'none';
    }
    else{
        logout_id.style.display = 'none';
        login_wrapper.style.display = 'flex';
    }
}
 
init();