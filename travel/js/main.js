
/*메인 화면 슬라이드*/

document.querySelector('.slideBtn2').addEventListener('click',function(){
document.querySelector('.img-inner').style.transform='translate(-100vw)';
})
document.querySelector('.slideBtn3').addEventListener('click',function(){
document.querySelector('.img-inner').style.transform='translate(-200vw)';
})
document.querySelector('.slideBtn1').addEventListener('click',function(){
document.querySelector('.img-inner').style.transform='translate(0vw)';
})


/*오른쪽-사진 등장*/

let targets = document.querySelectorAll('.ani_txt_x')


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('on');
            //observer.unobserve(entry.target)
        } else {
            entry.target.classList.remove('on');            
        }
        console.log(observer)
    });
    })

targets.forEach(target=> {
    observer.observe(target);
})



/*왼쪽-사진 등장*/

let targetsMin = document.querySelectorAll('.ani_txt_min')
console.log(targetsMin)


const observerMin = new IntersectionObserver((entriesMin, observerMin) => {
    entriesMin.forEach(entryMin=>{
        if(entryMin.isIntersecting){      
            entryMin.target.classList.add('on');
            console.log(entryMin)
            //observer.unobserve(entry.target)
        } else {            
            entryMin.target.classList.remove('on');
        }
    });
    })

targetsMin.forEach(targetMin=> {
    observerMin.observe(targetMin);
})



/*아래-사진 등장*/

let targetsY = document.querySelectorAll('.ani_txt_Y')

const observerY = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('on');
            //observer.unobserve(entry.target)
        } else {
            entry.target.classList.remove('on');
        }
    });
    })

targetsY.forEach(target=> {
    observer.observe(target);
})