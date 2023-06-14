import products from "../json/sub1.json" assert {type: "json"};

const sortProduct = [];   // 정렬된 값을 지정할 장소. 

for (let key in products.data) {
  sortProduct[key] = products.data[key];    // 원본 데이터를 유지하면서 값을 카피함
}


const sortBtn = document.querySelector('.sort_category');   // select 변수에 할당

// 거리순으로 정렬해주는 함수
function sortDist(products) {   
  products.sort((a, b) => {
    return a.distance - b.distance;
  })
}
// 이름순으로 정렬해주는 함수
function sortCountry(products) {
  products.sort(function (a, b) {
    if (a.country < b.country) {
      return -1;
    }
    else if (a.country == b.country) {
      return 0;
    }
    else {
      return 1;
    }
  })
}

// select한 value에 따라 정렬해주는 함수
function sortCategory(e) {
  const contentBox = document.querySelector('.contents');
  const content = document.querySelectorAll('.swiper');


  const { selectedIndex: n } = e.target.options;
  const selectCategory = e.target.options[n].value;

  switch (selectCategory) {
    case 'distance':
      sortDist(sortProduct);
      break;
    case 'country':
      sortCountry(sortProduct);
      break;
    case 'default':   // 원래대로 돌아가고 싶을 때는 원본 데이터를 다시 카피함
    for (let key in products.data) {
      sortProduct[key] = products.data[key]; 
    }
  }

  sortProduct.forEach(function (aa) {
    content.forEach(function (bb) {
      if (aa.country === bb.dataset.country) { // 변수를 할당해서 사용할 때는 대괄호 사용
        contentBox.append(bb);
      }
    })
  })
}

sortBtn.addEventListener('change', sortCategory);

