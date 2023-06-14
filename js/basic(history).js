const elHeaderwrap = this.document.querySelector('.header_wrap')

window.addEventListener('scroll', function() {
    if(scrollY >= 45){
      elHeaderwrap.classList.add('active')
    } else {
      elHeaderwrap.classList.remove('active')

    }
  });

  // window.addEventListener('scroll', function() {
  //   if (window.scrollY >= 45) {
  //     alert('스크롤 45px 이상 내려감');
  //   }
  // });


// Gnb Deps show&hide for mouseover
// Gnb length : 7 > deps length : 4 
// => use the if, Gnb === deps+2 : becuse Array start index is 0, so 3 length = 2
const elGnbBg = document.querySelectorAll('.main_gnb')
const elGnb = document.querySelectorAll('.main_gnb > li')
const elDeps1 = document.querySelectorAll('.gnb_dep2 > li') //deps start index +3(+2)


//Gnb menu loop function
elGnb.forEach(function(element,index1){
    //mouseover event active
    element.addEventListener('mouseover',function(){
        elDeps1.forEach(function(element2,index2){
            //contains Gnb length to deps length
            if(index1 === index2+2){ 
                //mouse position change, closed other deps
                elDeps1.forEach(function(element3){ 
                    element3.classList.remove('active')
                })
                //deps active
                elDeps1[index2].classList.add('active')
            }
        })
    })
})
//if mouse position change the header area, then closed the deps function
//Gnb menu loop function
elGnbBg.forEach(function(element) {
    //mouseleave event active
    element.addEventListener('mouseleave', function() {
        //remove the class active(display:none)
        elDeps1.forEach(function(element) {
        element.classList.remove('active');
        });
    });
});
//if mouse position is not change the deps area,then still show deps
//if mouse position is leave the deps,then hide deps
//deps loop function
elDeps1.forEach(function(element) {
    //check the mouseover
    element.addEventListener('mouseover', function() {
      element.classList.add('active');
    });
    //check the mouseleave
    element.addEventListener('mouseleave', function() {
      element.classList.remove('active');
    });
  });

  
//click the reservaiton
const elCalBtn = document.querySelector('.check_active_box')
const elCal = document.querySelector('.open_content')
const elShowRsv = document.querySelector('.showRsv') 
const elArest = document.querySelector('.showRsv > a') 
const elHideRsv = document.querySelector('.hide')
const elCheckinout = document.querySelector('.checkin_out')

//kill function for A in elShowRsv
elArest.addEventListener('click', function(event) {
  event.preventDefault();
});


function activeON_toggle (element1,element2){ //toggle btn
  if(element1.classList.contains('active')){
    element1.classList.remove('active')
    element2.classList.remove('active')
  } else {
    element1.classList.add('active')
  }
}
function activeOFF (element1,element2){
  element1.classList.remove('active')
  element2.classList.remove('active')
}

elShowRsv.addEventListener('click',function(){
  activeON_toggle(elCheckinout,elCal)
})
elHideRsv.addEventListener('click',function(){
  activeOFF(elCheckinout,elCal)
})





function active_toggle (element){ //toggle btn
  if(element.classList.contains('active')){
    element.classList.remove('active')
  } else {
    element.classList.add('active')
  }
}

elCalBtn.addEventListener('click', function(){
  active_toggle(elCal);
})



//calendar
const calendars = document.querySelectorAll('.calendar');
const nextBtn = document.querySelector('.calendar_next');
const prevBtn = document.querySelector('.calendar_prev');
let currentMonth = new Date().getMonth() + 1;
let currentYear = new Date().getFullYear();
let nextMonth = currentMonth + 1;


nextBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 12) {
    // currentMonth > 12 => currentMonth = 1 && currentYear +1
    currentMonth = 1;
    currentYear++;
  } else if (currentMonth < 1) { 
    // currentMonth < 1 => currentMonth = 12 && currentYear -1
    currentMonth = 12;
    currentYear--;
  }
  updateCalendar(currentMonth); 
  updateCalendars2(currentMonth); 
});

prevBtn.addEventListener('click', () => {
    if (currentMonth > 1) {
      currentMonth--;
      // currentMonth > 12 => currentMonth = 1 && currentYear +1
      updateCalendar(); 
      updateCalendars2(); 
    } else {
      currentMonth = 12;
      // currentMonth < 1 => currentMonth = 12 && currentYear -1
      currentYear--;
      updateCalendar();
      updateCalendars2();
    }
  });


function updateCalendar() {
  const calendar = calendars[0]; // currendCalendar(0) update

  const year = currentYear;
  const month = currentMonth;
  const firstDateOfMonth = new Date(year, month - 1, 1);
  const lastDateOfMonth = new Date(year, month, 0);
  const firstDayOfWeek = firstDateOfMonth.getDay();
  const dayList = calendar.querySelector('.day_list');
  const currentYearMonth = calendars[0].querySelector('.current_date');
  let position = firstDayOfWeek === 0 ? 7 : firstDayOfWeek;
  let dayCount = 1;

  if (dayList) {
    // dayList remove all
    while (dayList.firstChild) {
    dayList.removeChild(dayList.firstChild);
    }
  }

  if (dayList) {
  // find first week what first-day position
    for (let i = 0; i < firstDayOfWeek; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.classList.add('day_number');
    a.textContent = "";
    li.appendChild(a);
    dayList.appendChild(li);
    position++;
    }
  }
  let dayListLi = dayList.getElementsByTagName('li')
  let selectedDates = Array.from(dayListLi);
  // show this month
  while (dayCount <= lastDateOfMonth.getDate()) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  li.classList.add('date');
  li.classList.add('day_number');
  a.textContent = dayCount;
  dayListLi = dayList.getElementsByTagName('li')
  const today = new Date();
  let firstSelectedDate = today.getDate();
  let secondSelectedDate = firstSelectedDate + 1;
  let totalSelectedDate = secondSelectedDate - firstSelectedDate
  let firstSelectedMonth = month
  


  function addSelectedClass(startIndex, endIndex) {
    const lis = document.querySelectorAll('.day_number');
    for (let i = startIndex; i <= endIndex; i++) {
      lis[i].classList.add('selected');
    }    
  }
  function activeBoxAdd(start,end,total,month){
    const activeBox = document.querySelector('.check_active_box')
    activeBox.innerHTML = `<span class="activeBoxAdd">${month}월${start}일</span>/<span class="activeBoxAdd">${total}박</span>/<span class="activeBoxAdd">${month}월${end}일</span>`

  }

a.addEventListener('click', (event) => {
  const li = event.target.parentNode;
  const lis = document.querySelectorAll('.day_number');
  const clickedDate = new Date(year, month - 1, event.target.textContent); // 클릭한 날짜의 Date 객체 생성
  const selCount = document.querySelectorAll('.day_number.selected').length;

  if (clickedDate < today) {
    return;
  } else {
    if (li.classList.contains('selected')) {
      lis.forEach(function(removeLis){
        removeLis.classList.remove('selected')
        removeLis.classList.remove('onF');
        removeLis.classList.remove('onE');
      })
    } else if (selCount < 2) {
      if(selCount === 0){
        li.classList.add('selected');
        li.classList.add('onF');
      } else if(selCount === 1){
        li.classList.add('selected');
        li.classList.add('onE');
      }
      if(selCount === 1){
        const selectedIndices = [];
        lis.forEach((selecteds, index) => {
          if (selecteds.classList.contains('selected')) {
            selectedIndices.push(index);
          }
          const startIndex = Math.min(...selectedIndices);
          const endIndex = Math.max(...selectedIndices);
          addSelectedClass(startIndex, endIndex);
          if (selectedIndices.length > 0) {
            firstSelectedDate = lis[startIndex].innerText;
          }
          if (selectedIndices.length > 0) {
            secondSelectedDate = lis[endIndex].innerText;
          }
          totalSelectedDate = secondSelectedDate - firstSelectedDate
        })
        activeBoxAdd(firstSelectedDate,secondSelectedDate,totalSelectedDate,firstSelectedMonth)
      } 
    } else if(selCount === 2){
      lis.forEach(function(elements){
        elements.classList.remove('selected')
        elements.classList.remove('onF');
        elements.classList.remove('onE');
      })
      li.classList.add('selected')
    } else if(selCount > 2){
      lis.forEach(function(elements){
        elements.classList.remove('selected')
        elements.classList.remove('onF');
        elements.classList.remove('onE');
      })
      if(selCount === 0){
        li.classList.add('selected');
        li.classList.add('onF');
      } else if(selCount === 1){
        li.classList.add('selected');
        li.classList.add('onE');
      }
      }
    }
  });
  activeBoxAdd(firstSelectedDate,secondSelectedDate,totalSelectedDate,firstSelectedMonth)

    li.appendChild(a);
    if (dayList) {
    dayList.appendChild(li);
    }
    // br active when every weeks end
    if (position % 7 === 0) {
    li.classList.add('sunday');
    position = 0;
    } else if (position % 7 === 1) {
    li.classList.add('monday');
    }
    position++;
    dayCount++;
  }
  // span tag change (date update text)
  const dateString = year + "년 " + month + "월 ";
  currentYearMonth.textContent = dateString;
}

updateCalendar();

function updateCalendars2() {
  const calendar = calendars[1]; // nextCalendar update
  const index = 1;
  const year = currentMonth === 12 ? currentYear + 1 : currentYear;

  const month = currentMonth === 12 ? 1 : currentMonth + index;
  const firstDateOfMonth = new Date(year, month - 1, 1);
  const lastDateOfMonth = new Date(year, month, 0);
  const firstDayOfWeek = firstDateOfMonth.getDay();
  const dayList = calendar.querySelector('.nt_day');
  const currentYearMonth = calendars[1].querySelector('.next_date');
  let position = firstDayOfWeek === 0 ? 7 : firstDayOfWeek;
  let dayCount = 1;


  const nt_dayList = calendar.querySelector('.nt_day');
    if (nt_dayList) {
    while (nt_dayList.firstChild) {
    nt_dayList.removeChild(nt_dayList.firstChild);
    }
  }

  if (nt_dayList) {
  // find first week what first-day position
    for (let i = 0; i < firstDayOfWeek; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.classList.add('day_number');
    a.textContent = "";
    li.appendChild(a);
    nt_dayList.appendChild(li);
    position++;
    }
  }
  // show this month
  while (dayCount <= lastDateOfMonth.getDate()) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  li.classList.add('date');
  li.classList.add('day_number');
  a.textContent = dayCount;
  const today = new Date();
  let firstSelectedDate = today.getDate();
  let secondSelectedDate = firstSelectedDate + 1;
  let totalSelectedDate = secondSelectedDate - firstSelectedDate
  let firstSelectedMonth = month
  


  function addSelectedClass(startIndex, endIndex) {
    const lis = document.querySelectorAll('.day_number');
    for (let i = startIndex; i <= endIndex; i++) {
      lis[i].classList.add('selected');
    }    
  }
  function activeBoxAdd(start,end,total,month){
    const activeBox = document.querySelector('.check_active_box')
    activeBox.innerText = `${month}월${start}일 / ${total}박 / ${month}월${end}일`

  }

a.addEventListener('click', (event) => {
  const li = event.target.parentNode;
  const lis = document.querySelectorAll('.day_number');
  const selCount = document.querySelectorAll('.day_number.selected').length;
    if (li.classList.contains('selected')) {
      lis.forEach(function(removeLis){
        removeLis.classList.remove('selected')
        removeLis.classList.remove('onF');
        removeLis.classList.remove('onE');
      })
    } else if (selCount < 2) {
      if(selCount === 0){
        li.classList.add('selected');
        li.classList.add('onF');
      } else if(selCount === 1){
        li.classList.add('selected');
        li.classList.add('onE');
      }
      if(selCount === 1){
        const selectedIndices = [];
        lis.forEach((selecteds, index) => {
          if (selecteds.classList.contains('selected')) {
            selectedIndices.push(index);
          }
          const startIndex = Math.min(...selectedIndices);
          const endIndex = Math.max(...selectedIndices);
          addSelectedClass(startIndex, endIndex);
          if (selectedIndices.length > 0) {
            firstSelectedDate = lis[startIndex].innerText;
          }
          if (selectedIndices.length > 0) {
            secondSelectedDate = lis[endIndex].innerText;
          }
          totalSelectedDate = secondSelectedDate - firstSelectedDate
        })
        activeBoxAdd(firstSelectedDate,secondSelectedDate,totalSelectedDate,firstSelectedMonth)
      } 
    } else if(selCount === 2){
      lis.forEach(function(elements){
        elements.classList.remove('selected')
        elements.classList.remove('onF');
        elements.classList.remove('onE');
      })
      li.classList.add('selected')
    } else if(selCount > 2){
      lis.forEach(function(elements){
        elements.classList.remove('selected')
        elements.classList.remove('onF');
        elements.classList.remove('onE');
      })
      if(selCount === 0){
        li.classList.add('selected');
        li.classList.add('onF');
      } else if(selCount === 1){
        li.classList.add('selected');
        li.classList.add('onE');
      }
      }
  });
    li.appendChild(a);
    if (nt_dayList) {
    nt_dayList.appendChild(li);
    }
    // br active when every weeks end
    if (position % 7 === 0) {
    li.classList.add('sunday');
    position = 0;
    } else if (position % 7 === 1) {
    li.classList.add('monday');
    }
    position++;
    dayCount++;
  }
  // span tag change (date update text)
  const dateString = year + "년 " + month + "월 ";
  currentYearMonth.textContent = dateString;
  
};

updateCalendars2();








//calendar full coding history
  //calendar
  //next&prev btn
  // const nextBtn = document.querySelector('.calendar_next');
  // const prevBtn = document.querySelector('.calendar_prev');
  // const calendars = document.querySelectorAll('.calendar');
  // let currentMonth = new Date().getMonth() + 1;

  // function updateCalendars() {
  //   calendars.forEach((calendar, index) => {
  //     const year = currentMonth === 1 ? new Date().getFullYear() + 1 : new Date().getFullYear();
  //     const month = currentMonth === 13 ? 1 : currentMonth + index;
  //     const firstDateOfMonth = new Date(year, month - 1, 1);
  //     const lastDateOfMonth = new Date(year, month, 0);
  //     const firstDayOfWeek = firstDateOfMonth.getDay();
  //     const dayList = calendar.querySelector('.day_list');
  //     const currentYearMonth = calendars[0].querySelector('.current_date');
  //     const nextYearMonth = calendars[1].querySelector('.next_date');
  //     let position = firstDayOfWeek === 0 ? 7 : firstDayOfWeek;
  //     let dayCount = 1;

  //     if (dayList) {
  //       // dayList 초기화
  //       while (dayList.firstChild) {
  //         dayList.removeChild(dayList.firstChild);
  //       }
  //     }
  //     const nt_dayList = calendar.querySelector('.nt_day');
  //     if (nt_dayList) {
  //       while (nt_dayList.firstChild) {
  //         nt_dayList.removeChild(nt_dayList.firstChild);
  //       }
  //     }

  //     if (dayList) {
  //       // 첫 주 시작 위치를 계산합니다.
  //       for (let i = 0; i < firstDayOfWeek; i++) {
  //         const li = document.createElement('li');
  //         const a = document.createElement('a');
  //         li.classList.add('day_number');
  //         a.textContent = "";
  //         li.appendChild(a);
  //         dayList.appendChild(li);
  //         position++;
  //       }
  //     }
  //     // 이번 달의 날짜를 표시합니다.
  //     while (dayCount <= lastDateOfMonth.getDate()) {
  //       const li = document.createElement('li');
  //       const a = document.createElement('a');
  //       li.classList.add('date');
  //       li.classList.add('day_number');
  //       a.textContent = dayCount;
  //       a.addEventListener('click', (event) => {
  //         // 예약 날짜 선택 로직 추가
  //       });
  //       li.appendChild(a);
  //       if (dayList) {
  //         dayList.appendChild(li);
  //       }

  //       // 일주일이 끝나면 줄을 바꿉니다.
  //       if (position % 7 === 0) {
  //         li.classList.add('sunday');
  //         position = 0;
  //       } else if (position % 7 === 1) {
  //         li.classList.add('monday');
  //       }
  //       position++;
  //       dayCount++;
  //     }
  //     // span 태그의 내용을 변경
  //     const dateString = year + "년 " + month + "월 ";
  //     currentYearMonth.textContent = dateString;
      
  //     // 두번째 캘린더의 현재 년/월 정보 변경
  //     const dateString2 = year + "년 " + month + "월 ";
  //     nextYearMonth.textContent = dateString2;
  //   });
  // }

  // updateCalendars();

  // nextBtn.addEventListener('click', () => {
  //   currentMonth += 1;
  //   updateCalendars();
  // });

  // prevBtn.addEventListener('click', () => {
  //   currentMonth -= 1;
  //   updateCalendars();
  // });

  // //current monthly calendar
  // //this month 간소화.ver
  // // 현재 날짜 객체 생성
  // const currentDate = new Date();

  // // 스팬에 현재 날짜 정보 표시
  // const currentDateString = currentDate.getFullYear() + "년 " + (currentDate.getMonth() + 1) + "월 ";
  // document.querySelector(".current_date").textContent = currentDateString;

  // // 달력이 표시될 div 엘리먼트와 일자를 표시할 ul 엘리먼트 가져오기
  // const calendarContainer = document.querySelector('.calendar');
  // const dayList = calendarContainer.querySelector('.day_list')

  // // 해당 월의 첫 번째 날짜와 마지막 날짜 가져오기
  // const firstDateOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  // const lastDateOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  // // 첫 번째 날짜의 요일과 첫 주 시작 위치 계산
  // const firstDayOfWeek = firstDateOfMonth.getDay();
  // let position = firstDayOfWeek === 0 ? 7 : firstDayOfWeek;

  // // 첫 주의 공백 채우기
  // for (let i = 0; i < firstDayOfWeek; i++) {
  //   const li = document.createElement('li');
  //   const a = document.createElement('a');
  //   li.classList.add('day_number');
  //   a.textContent = "";
  //   dayList.appendChild(li);
  //   position++;
  // }

  // // 이번 달의 날짜 표시하기
  // for (let dayCount = 1; dayCount <= lastDateOfMonth.getDate(); dayCount++) {
  //   const li = document.createElement('li');
  //   const a = document.createElement('a');
  //   li.classList.add('date', 'day_number');
  //   a.textContent = dayCount;
  //   a.addEventListener('click', (event) => {
  //     // 클릭한 날짜 정보 표시하기
  //     const inDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayCount);
  //     const inMonth = inDate.getMonth() + 1;
  //     const inDay = inDate.getDate();
  //     const inWeek = ['일', '월', '화', '수', '목', '금', '토'][inDate.getDay()];
  //     const inInfo = `${inMonth}월 ${inDay}일(${inWeek})`;
  //     document.querySelector(".in_day").textContent = inInfo;
  //   });
  //   li.appendChild(a);
  //   dayList.appendChild(li);

  //   // 일주일이 끝나면 줄을 바꾸기
  //   if (position % 7 === 0) {
  //     li.classList.add('sunday');
  //     position = 0;
  //   } else if (position % 7 === 1) {
  //     li.classList.add('monday');
  //   }
  //   position++;
  // }
  // //next monthly calendar
  // //간소화.ver
  // // 현재 날짜 객체 생성
  // const nextDate = new Date();

  // // 현재 년, 월, 일 값 추출
  // const ntYear = nextDate.getFullYear();
  // const ntMonth = nextDate.getMonth() + 2;
  // const ntDate = nextDate.getDate();

  // // span 태그의 내용을 변경
  // const nextDateString = `${ntYear}년 ${ntMonth}월`;
  // document.querySelector(".next_date").textContent = nextDateString;

  // // 해당 월의 첫 번째 날짜와 마지막 날짜를 가져옵니다.
  // const ntFirstDateOfMonth = new Date(ntYear, ntMonth - 1, 1);
  // const ntLastDateOfMonth = new Date(ntYear, ntMonth, 0);

  // // 첫 번째 날짜가 무슨 요일인지 가져옵니다.
  // const ntFirstDayOfWeek = ntFirstDateOfMonth.getDay();

  // // 달력이 표시될 div 엘리먼트와 달력의 일자를 표시할 ul 엘리먼트를 가져옵니다.
  // const calendarContainer2 = document.querySelector('.calendar:last-child');
  // const ntDayList = calendarContainer2.querySelector('.nt_day');

  // // 첫 주 시작 위치를 계산합니다.
  // let ntPosition = ntFirstDayOfWeek === 0 ? 7 : ntFirstDayOfWeek;
  // let ntDayCount = 1;

  // // 첫 주의 공백을 채웁니다.
  // for (let i = 0; i < ntFirstDayOfWeek; i++) {
  // const li = document.createElement('li');
  // li.classList.add('day_number');
  // ntDayList.appendChild(li);
  // ntPosition++;
  // }

  // // 이번 달의 날짜를 표시합니다.
  // while (ntDayCount <= ntLastDateOfMonth.getDate()) {
  // const li = document.createElement('li');
  // li.classList.add('date', 'day_number');
  // li.innerHTML = `<a>${ntDayCount}</a>`;
  // li.querySelector('a').addEventListener('click', (event) => {
  // // 예약 날짜 선택 로직 추가
  // });
  // ntDayList.appendChild(li);

  // // 일주일이 끝나면 줄을 바꿉니다.
  // if (ntPosition % 7 === 0) {
  // li.classList.add('sunday');
  // ntPosition = 0;
  // } else if (ntPosition % 7 === 1) {
  // li.classList.add('monday');
  // }
  // ntPosition++;
  // ntDayCount++;
  // }
  //---


  //----------- mobile ----------------
  
  const elHam = document.querySelector('.ham')
  const elHamBar = document.querySelector('.ham span')
  const elHamMenu = document.querySelector('.main_gnb_M')

  function hamMove(){
    if(!elHamBar.classList.contains('on')){
      elHamBar.classList.add('on')
      elHamMenu.classList.add('active')
      // console.log('add') 
    } else{
      elHamBar.classList.remove('on')
      elHamMenu.classList.remove('active')
      // console.log('remove')
    }
  }

  elHam.addEventListener('click',hamMove)

  const elMobileMenu = document.querySelectorAll('.main_gnb_M > li')
  const elMobileSub = document.querySelectorAll('.main_gnb_M > li > ul')
  const elMobileA = document.querySelectorAll('.main_gnb_M > li > ul a')

  // console.log(elMobileMenu)
  elMobileMenu.forEach(function (element, index) {
    element.addEventListener('click', function (event) {
      event.preventDefault(); // 기본 동작 중지
      elMobileSub.forEach(function (subElement) {
        subElement.classList.remove('active'); // 모든 하위 메뉴 비활성화
      });
      const targetSub = element.querySelector('ul'); // 클릭한 메뉴 아이템의 하위 메뉴 참조
      targetSub.classList.add('active'); // 클릭한 메뉴 아이템에 해당하는 하위 메뉴 활성화
    });
  });
