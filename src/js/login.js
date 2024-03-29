// 로그인 & 로그아웃
const login_wrapper = document.querySelector('.login_wrapper');
const logout_wrapper = document.querySelector('.logout_wrapper');
const login_btn = document.querySelector('#login_btn');

//로그인 여부 (로그인 토큰 유효시간 동안 true, 초깃값 : false)
//새로고침해도 변하지 않도록 localStorage에 저장

let isLoginActive = localStorage.getItem('isLoginActive');

//로그인샘플데이터
let id = "";
let pw = "";

// login시 페이지 로딩이 다시되기 때문에 페이지 노출 즉시, 로그인 여부를 검사하고 로그인/로그아웃 ui를 나타내거나 숨기는 코드를 init() 함수에 추가함
const init = () => {
    if (isLoginActive == true){
        logout_wrapper.style.display = 'flex';
        login_wrapper.style.display = 'none';
        console.log("페이지 초기화 - 로그인상태");
        console.log(isLoginActive);
        }
    else{
        logout_wrapper.style.display = 'none';
        login_wrapper.style.display = 'flex';
        console.log("페이지 초기화 - 로그아웃상태");
        }
    }
// 새로고침시 페이지 초기화
init();

// 로그인 함수를 정의합니다.
function login() {
    //로컬 스토리지를 이용한 테스트용 로그인 방식2
    console.log("id,pw :" + id,pw);
    if(id=="sample"&&pw=="0000"){
        localStorage.setItem('isLoginActive', true);
        console.log("login()함수 실행, 로그인 성공!");
    }
    else{
        localStorage.setItem("isLoginActive", false);
        console.log("login()함수 실행, 로그인 실패!");
        alert("올바른 값을 입력해주세요.");
    }
	/* jwt 토큰 이용한 로그인 방식 함수 구현 예정
    try {
	// 로그인 API 엔드포인트로 POST 요청을 보냅니다.
	// action 속성 백엔드 링크로 요청
        
        //내용 없을 때 오류남....
        id = document.getElementById('userId').value;
        pw = document.getElementById('userPw').value;
		
       const response = await axios.post('http://백엔드api주소/login', {
        key: value
		id: id,
		password: pw
		});
	
	// 서버로부터 받은 토큰을 로컬 스토리지에 저장합니다.
	// 실제 구현에서는 보안을 위해 적절한 저장 방법을 고려해야 합니다.
	//localStorage.setItem('token', response.data.token);
	//console.log('로그인 성공:', response.data);
    
    //로그인 성공 -> 로그아웃 display 활성화, login display 비활성화
    logout_wrapper.style.display = 'flex';
    login_wrapper.style.display = 'none';

    isActiveLogin = true;

	} catch (error) {
		console.error('로그인 실패:', error.response);
	}
    */
}

// 로그인 버튼 클릭시 함수 실행
login_btn.addEventListener('click', (e)=>{
    try{
        id = document.getElementById('userId').value;
        pw = document.getElementById('userPw').value;
        console.log("로그인시도 by 버튼클릭");
        login(id, pw);
    } catch{
        console.log('로그인실패 by 버튼클릭')
    }
    });

// 로그아웃 -> 로그아웃 display 비활성화, 로그인 display 활성화
function Logout() {
    logout_wrapper.style.display = 'none';
    login_wrapper.style.display = 'flex';
    localStorage.setItem('isLoginActive', false);
}

/* 개발 초기 테스트용 로그인 함수1
const id = "name";
const pw = "1234";
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
*/