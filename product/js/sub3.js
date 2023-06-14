const link1 = document.querySelectorAll('.banner img');
const link2 = document.querySelectorAll('.banner_txt a');
const a = document.querySelectorAll('main > a');


a.forEach(function(aa) {
  aa.onclick = function(e) {
    e.preventDefault();
  }
})

link1.forEach(function(aa) {
  aa.addEventListener('click',function() {
    alert('종료된 이벤트입니다.');
  })
})
link2.forEach(function(aa) {
  aa.addEventListener('click',function() {
    alert('종료된 이벤트입니다.');
  })
})