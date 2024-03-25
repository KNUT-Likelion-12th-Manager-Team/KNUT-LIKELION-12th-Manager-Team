const daysContainer = document.querySelector(".days"), // 날짜 컨테이너 요소
  nextBtn = document.querySelector(".next-btn"), // 다음 달 버튼 요소
  prevBtn = document.querySelector(".prev-btn"), // 이전 달 버튼 요소
  month = document.querySelector(".month"), // 월 표시 요소
  todayBtn = document.querySelector(".today-btn"); // 오늘 버튼 요소

const months = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
]; // 월 배열

const days = ["일", "월", "화", "수", "목", "금", "토"]; // 요일 배열

// 현재 날짜 가져오기
const date = new Date();

// 현재 월 가져오기
let currentMonth = date.getMonth();

// 현재 연도 가져오기
let currentYear = date.getFullYear();

// 달력 날짜 렌더링하는 함수
function renderCalendar() {
  // 이전 달, 현재 달, 다음 달의 날짜 가져오기
  date.setDate(1);
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const lastDayIndex = lastDay.getDay();
  const lastDayDate = lastDay.getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0);
  const prevLastDayDate = prevLastDay.getDate();
  const nextDays = 7 - lastDayIndex - 1;

  // 헤더에 현재 연도와 월 업데이트
  month.innerHTML = `${currentYear}년 ${months[currentMonth]}`;

  // 날짜 업데이트
  let days = "";

  // 이전 달의 날짜 HTML
  for (let x = firstDay.getDay(); x > 0; x--) {
    days += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
  }

  // 현재 달의 날짜 HTML
  for (let i = 1; i <= lastDayDate; i++) {
    let checkStatus = localStorage.getItem(`${currentYear}-${currentMonth + 1}-${i}`);
    // 오늘이면 today 클래스 추가
    if (
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      days += `<div class="day today" onclick="markAttendance(${i})">${i} ${checkStatus ? checkStatus : ''}</div>`;
    } else {
      days += `<div class="day" onclick="markAttendance(${i})">${i} ${checkStatus ? checkStatus : ''}</div>`;
    }
  }

  // 다음 달의 날짜 HTML
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next">${j}</div>`;
  }

  // 달력 렌더링 후 해당 함수 실행
  hideTodayBtn();
  daysContainer.innerHTML = days;
}

renderCalendar();

nextBtn.addEventListener("click", () => {
  // 현재 월을 한 달 증가
  currentMonth++;
  if (currentMonth > 11) {
    // 월이 11보다 크면 0으로 만들고 연도를 증가
    currentMonth = 0;
    currentYear++;
  }
  // 달력 다시 렌더링
  renderCalendar();
});

// 이전 달 버튼
prevBtn.addEventListener("click", () => {
  // 한 달 감소
  currentMonth--;
  // 0보다 작으면 11로 만들고 연도 감소
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

// 오늘로 이동 버튼
todayBtn.addEventListener("click", () => {
  // 현재 날짜와 연도로 설정
  currentMonth = date.getMonth();
  currentYear = date.getFullYear();
  // 달력 다시 렌더링
  renderCalendar();
});

// 여기 주석 해제하면 출석 체크 가능해짐
// 출석 표시 함수
function markAttendance(day) {
  const currentDate = new Date();
  const clickedDate = new Date(currentYear, currentMonth, day);

  // 클릭한 날짜가 오늘인지 확인 
  // 로컬스토리지 내장객체를 사용함
  if (currentDate.getDate() === day && currentDate.getMonth() === currentMonth && currentDate.getFullYear() === currentYear) {
    let attendanceStatus = localStorage.getItem(`${currentYear}-${currentMonth + 1}-${day}`);
    if (!attendanceStatus) {
      localStorage.setItem(`${currentYear}-${currentMonth + 1}-${day}`, "✓");
    } else {
      alert("이미 완료된 출석입니다.");
    }
    renderCalendar(); // 출석 표시 후 달력 렌더링
  } else {
    alert("오늘만 출석을 표시할 수 있습니다.");
  }
}


// 현재 월이면 오늘 버튼 숨기기
function hideTodayBtn() {
  if (
    currentMonth === new Date().getMonth() &&
    currentYear === new Date().getFullYear()
  ) {
    todayBtn.style.display = "none";
  } else {
    todayBtn.style.display = "flex";
  }
}
