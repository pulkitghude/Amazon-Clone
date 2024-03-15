const imgs = document.querySelectorAll('.header-slider ul img');
const prew_btn = document.querySelector('.control_prew');
const next_btm = document.querySelector('.control_next');

let n=0;

function changeSlide(){
    for(let i=0;i<imgs.length;i++) {
        imgs[i].style.display ='none';
    }
    imgs[n].style.display ='block';
}
changeSlide();

prew_btn.addEventListener('click',(e)=>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})
next_btm.addEventListener('click',(e)=>{
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.Products')
for(const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrolllLeft += evt.deltaY;
    });
}