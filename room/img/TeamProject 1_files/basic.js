// const elA = document.querySelectorAll('a[href="#"]')

// elA.forEach(function(event){
//   event.addEventListener('click', function(event) {
//     event.preventDefault();
//     alert('미구현 페이지입니다') // 기본 동작을 중단시킵니다.
//   });
// })


const elHeaderwrap = this.document.querySelector('.header_wrap')




window.addEventListener('scroll', function() {
    if(scrollY >= 45){
      elHeaderwrap.classList.add('active')
    } else {
      elHeaderwrap.classList.remove('active')

    }
  });
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
const elCalBtn2 = document.querySelector('.information_box')
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
elHideRsv.addEventListener('click',function(event){
  event.preventDefault();
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

elCalBtn2.addEventListener('click', function(){
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
//-----------------select people count-----------------
const chooses = document.querySelectorAll('.choose') //3
const minBtns = document.querySelectorAll('.min') //3 adult
const addBtns = document.querySelectorAll('.add') //3 adult
const cMinBtns = document.querySelectorAll('.cmin') //3 child
const cAddBtns = document.querySelectorAll('.cadd') //3 child
const adultCount = document.querySelectorAll('.a_count') //3 adult
const childCount = document.querySelectorAll('.p_count') //3 child
let findMinIndex, findAddIndex
let aCount = 1
let pCount = 0

function aCountSum() {
  const choosesActive = document.querySelectorAll('.choose.active') //3
  choosesActive.forEach(function (event) {  
    const adultCountText = event.querySelector('.choose_adult .people').innerText; // adult-count 요소에서 텍스트 추출
    const adultCount = adultCountText.match(/\d+/g)[0]; // 정규식으로 adult-count에서 숫자 추출
    const childCountText = event.querySelector('.choose_child .people').innerText; // child-count 요소에서 텍스트 추출
    const childCount = childCountText.match(/\d+/g)[0]; // 정규식으로 child-count에서 숫자 추출
    console.log(`adultCount: ${adultCount}, childCount: ${childCount}`);
  });
}

//adult count function
minBtns.forEach(function(item,index){
  item.addEventListener('click',function(event){
    aCount --
    if(aCount < 1){
      aCount = 1
    } 
    adultCount[index].innerText = aCount
    aBox.innerText = `${aCount}`
  })
})
addBtns.forEach(function(item,index){
  item.addEventListener('click',function(event){
    aCount ++
    if(aCount >= 2){
      aCount = 2
    } 
    adultCount[index].innerText = aCount
    aBox.innerText = `${aCount}`
  })
})
//child count function
cMinBtns.forEach(function(item,index){
  item.addEventListener('click',function(event){
    pCount --
    if(pCount < 0){
      pCount = 0
    } 
    childCount[index].innerText = pCount
    pBox.innerText = `${pCount}`
  })
})
cAddBtns.forEach(function(item,index){
  item.addEventListener('click',function(event){
    pCount ++
    if(pCount >= 1){
      pCount = 1
    } 
    childCount[index].innerText = pCount
    pBox.innerText = `${pCount}`
  })
})




const roomsAdd = document.querySelector('.add_choose')
const room2 = document.querySelector('.choose:nth-child(2)')
const room3 = document.querySelector('.choose:nth-child(3)')
const closeRoom = document.querySelectorAll('.choose_close') // close
const maxRoom = document.querySelector('.max_choose')

const infoBox = document.querySelector('.information_box')
const roomBox = document.createElement('span')
roomBox.className = 'roomCount'
roomBox.innerText = 1
const aBox = document.createElement('span')
aBox.className = 'aCount'
aBox.innerText = 1
const pBox = document.createElement('span')
pBox.className = 'pCount'
pBox.innerText = 0

infoBox.append(roomBox)
infoBox.append(aBox)
infoBox.append(pBox)
let roomCount = 1
//infoBox.innerText = `${roomCount}${aCount}${pCount}`


roomsAdd.addEventListener('click',function(){
  if(!room2.classList.contains('active')){
    room2.classList.add('active')
  }
  else if(room2.classList.contains('active')){
    room3.classList.add('active')
    roomsAdd.classList.add('off')
    maxRoom.classList.add('on')
  }
  roomCount++
  roomBox.innerText = `${roomCount}`
})

closeRoom.forEach(function(item,index){
  item.addEventListener('click',()=>{
    if(room3.classList.contains('active')){
      room3.classList.remove('active')
      roomsAdd.classList.remove('off')
      maxRoom.classList.remove('on')
    } else {
      room2.classList.remove('active')
    }
    roomCount--
    roomBox.innerText = `${roomCount}`
  })
})

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

  const elSubmenu = document.querySelector('.main_gnb_M > li:nth-child(3)')
  const elDeps = document.querySelector('.main_gnb_M > li:nth-child(3) > ul')


  elSubmenu.addEventListener('click',(event)=>{
    // event.preventDefault();
    elDeps.classList.add('active')
  })