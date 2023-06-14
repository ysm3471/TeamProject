// slider(swiper plug-in)
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  touchRatio:0
});

// js

const container = document.getElementById('container');
const categorys = document.querySelectorAll('.categorys li a');
const selCategory = document.querySelector('.sel_category ul');
const aTag = document.querySelectorAll('main > a');
const contentTag = document.querySelectorAll('.hash_tag a');
const content = document.querySelectorAll('.mySwiper');

let arrCategory = ['all'];    // selCategory의 dataset을 저장하는 배열. 미리 all을 할당
let selCategoryList = [];   // 누른 list 기록을 저장하는 배열

aTag.forEach(function (item) {   // a태그 기능 초기화
  item.onclick = function (e) {
    e.preventDefault();
  }
})

// class를 추가하고 제거하는 함수
function classAdd(item) {
  categorys.forEach(function(aa) {    // contentTag에서 누를 경우를 생각해서 전체를 비교한 후에 부여하는 방식을 사용
    if (aa.textContent === item.textContent) {
      aa.classList.add('active')
    }
  })
}
function classRemove(item) {
  categorys.forEach(function(aa) {
    if (aa.textContent === item.textContent) {
      aa.classList.remove('active')  
    }
  })
}

// 배열의 특정 요소를 제외하는 함수
function filterLi(list,element) {
  list = list.filter(function(aa) {  
    return aa !== element
  })
  return list;
}

// selCategory에 li를 추가하는 함수
function addCategory(e) {   // li 복사
  const item = e.target;
  const itemTxt = item.textContent;
  const selCategorys = document.querySelectorAll('.sel_category li');   // 누를 때마다 selCategorys 목록을 받음
  
  // 누른 적이 없는 list일 때만 작동
  if (!selCategoryList.includes(itemTxt)) {    
    // li 및 하위요소 생성
    let li = document.createElement('li');
    let a = document.createElement('a');
    let cancleBtn = document.createElement('div');

    a.setAttribute('href', "#");
    a.dataset.value = item.dataset.value;
    a.onclick = function (e) {    // a태그 생성할 때 기능 초기화
      e.preventDefault();
    }
    a.textContent = itemTxt;
    cancleBtn.classList.add('cancle_btn');
    li.classList.add('selected');
    li.append(a, cancleBtn);

    // selCategory를 만들 때 클릭 이벤트 생성
    li.addEventListener('click', () => {   
      li.remove();  // 누르면 삭제됨
      selCategoryList = filterLi(selCategoryList,a.textContent);   // 기록에서도 삭제
      classRemove(item);    // 선택된 카테고리 효과 삭제
      arrContent(a);    // content 재정렬       
    });

    // selCategory에 요소 추가
    selCategory.append(li);
    classAdd(item);   // active클래스를 추가함
    selCategoryList.push(itemTxt);   // 기록을 저장
  }

  // 누른 적이 있는 list일 경우 삭제
  else {    
    selCategorys.forEach(function(aa) {
      if (aa.textContent === itemTxt) {
        aa.remove();    // selCategory에서 삭제
        selCategoryList = filterLi(selCategoryList,itemTxt);   // 누른 list 기록에서 삭제
      }
    })
    classRemove(item);
  }
}

// content를 정렬하는 함수
function arrContent(selItem) {

  const selItemValue = selItem.dataset.value;

  content.forEach(function(aa) {    // 정렬 전에 클래스 초기화
    aa.classList.remove('hide');
  })

  if (!selCategoryList.includes(selItem.textContent)) {    // 누른 적이 있는 카테고리라면 arrCategory에서 제거
    arrCategory = filterLi(arrCategory,selItemValue)
  }
  else {
    arrCategory.push(selItemValue);
  }

  arrCategory.forEach(function(aa) {
    content.forEach(function(bb) {
      let arr = bb.dataset.category.split(" ");
      for (let i=0; i<arr.length; i++){
        if (aa === arr[i] && !bb.classList.contains('hide')) {    // 같은게 있고 hide 상태가 아닐 경우 조기종료
          break;
        }
        else if (i === arr.length-1) {  // 끝까지 비교했는데도 같은게 없을 경우 숨김처리
          bb.classList.add('hide');
        }
      }
    })
  })
}


categorys.forEach(function(item) {
  item.addEventListener('click', (e) => {
    addCategory(e);
    arrContent(e.target);
  });
})
contentTag.forEach(function(item) {
  item.addEventListener('click',(e) => {
    addCategory(e);
    arrContent(e.target);
    container.scrollIntoView({behavior:'smooth'});   // 누르면 title이 있는 곳으로 화면 이동
  });
})

// 미구현 기능 알림
const alertBtn = document.querySelectorAll('.country');
const alertBtn2 = document.querySelectorAll('.booking_btn');

alertBtn.forEach(function(aa) {
  aa.addEventListener('click',() => {
    alert('준비중입니다.')
  });
})
alertBtn2.forEach(function(aa) {
  aa.addEventListener('click',() => {
    alert('준비중입니다.')
  });
})

// category slide (mb,tablet)
const categoryBtn = document.querySelector('.category_wrap');
const categorySlide = document.querySelector('.categorys .mb_slide');
const categoryBox = document.querySelector('.categorys ul');

function categorySlideToggle() {    // 카테고리 리스트 토글기능을 추가하는 함수(pc제외)
  if (categorySlide.classList.contains('active')) {
    categorySlide.style.cssText = 'max-height : 0px';
    categoryBox.style.cssText = 'opacity : 0';
    categorySlide.classList.remove('active');
  }
  else {
    categorySlide.style.cssText = 'max-height : 300px';
    categoryBox.style.cssText = 'opacity : 1';
    categorySlide.classList.add('active');
  }
}

if (window.innerWidth < 991) {    // 새로고침 했을 때 pc사이즈가 아니라면 토글기능 추가
  categoryBtn.addEventListener('click',categorySlideToggle)
}

window.addEventListener('resize', function() {
  if (window.innerWidth > 991) {    // 리사이즈 했을 때 pc사이즈가 된다면 토글기능을 지우고 css 원래대로
    categoryBtn.removeEventListener('click',categorySlideToggle);
    categorySlide.style.cssText = 'max-height : 0px';
    categoryBox.style.cssText = 'opacity : 1';
    categorySlide.classList.remove('active');
  }
  else {    // 다시 작아지면 토글기능을 추가함
    categoryBtn.addEventListener('click',categorySlideToggle);
  }
})