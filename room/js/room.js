/* popup */
const popup = document.querySelector('.popup')
const popupBtn = document.querySelector('.search_pop')
const popupBtnClose = document.querySelector('.popup_close')
const elDark = document.querySelector('.dark')


popupBtn.addEventListener('click',pop)

function pop(){
  popup.classList.add('active')
  elDark.classList.add('active')
}

popupBtnClose.addEventListener('click',close)
elDark.addEventListener('click',close)

function close(){
  popup.classList.remove('active')
  elDark.classList.remove('active')
}

/* Json 불러오기 */

function getAllPost(){
  const URL = 'https://littlemac08.github.io/teamProject_finally/room/db.json'
  fetch(URL)
  .then(response => response.json())
  .then((list) => list.data)
  .then((data) =>   {
    
    data.forEach((post)=>{
      createHotel(post)
    })
  }
  )
}

async function createHotel(hotelData){
 
  const hotelWrap = document.querySelector('.hotels');
  const hotel = document.createElement('div');

  let hotelList = `
      <span class="hotel_img">
        <img src="${hotelData.img}" alt="${hotelData.name}">
      </span>
      <span class="name">${hotelData.name}</span>
      <span class="located">${hotelData.located}</span>
      <span class="area">${hotelData.area}</span><br>
      <span class="price">${hotelData.price}</span>
      <span class="price_sale"><del>${hotelData.price_sale}</del></span>
  `
  
  hotel.className = 'hotel';
  hotel.innerHTML = hotelList;
  hotelWrap.append(hotel);
}

getAllPost();


/* popup button checked */

const filterWrap = document.querySelectorAll('.popup_type')
const filterBtn = document.querySelectorAll('.popup_type button')
const stateBtn = document.querySelectorAll('.state')

let filterChecked;

function selected(e){
  const item = e.target; 
  if(item.classList.contains('active')) {
    item.classList.remove('active');
  }
  else {
    item.classList.add('active');
  }
}
filterBtn.forEach(function(aa) {
  aa.addEventListener('click',selected)
})


/* popup priceBtn */
const priceBtn = document.querySelectorAll('.type_price button')

let num = 0;
let typeBtns;

priceBtn.forEach(function(typeBtns,typenum){
  typeBtns.onclick = function(){
    priceBtn[num].classList.remove('active')
    num = typenum;
  }
})


/* popup search & reset */

const btnReset = document.querySelector('.filter_reset');
const btnSubmit = document.querySelector('.filter_submit');

let containsActive = false;

btnSubmit.addEventListener('click',function(){
  Array.prototype.forEach.call(filterBtn, function(node) {
    if (node.classList.contains('active')) {
      containsActive = true;
    }
  });
  
  if (containsActive) {
    // console.log('노드 리스트 안에 active 클래스가 포함되어 있습니다.');
    close();
    filterBtn.forEach((item)=>{
      item.classList.remove('active');
    })

  } else {
    alert('키워드를 검색해주세요')
    // console.log('노드 리스트 안에 active 클래스가 포함되어 있지 않습니다.');
  }
})

btnReset.addEventListener('click',()=>{
  filterBtn.forEach((item)=>{
    item.classList.remove('active');
  })
})


/* search button */
const minSearchInput =document.querySelector('.min_search');
const minSearchBtn = document.querySelector('.min_search button');

minSearchBtn.onclick=function(){
  if(minSearchInput.value !=''){
    minSearchInput.value='';
    minSearchInput.focus();
  }
};


minSearchInput.addEventListener('keypress', event =>{
  event.key === "Enter" && onAdd()
});
