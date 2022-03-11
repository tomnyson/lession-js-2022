var slides=document.querySelector('.slides');
var slide=Array.from(document.querySelectorAll('.slide'));
var slidegr=document.querySelector('.slide-gr');
var num_page 
// dùng để đếm số trang tùy vào mình chia hiển thị
// bao nhiêu trên 1 trang
// mình làm function tạo slide trước
function makeslide(numberonetime) {
    // truyền vào số ô muốn hiển thị trên 1 slide
    var percentwidth_slide=100/numberonetime;
    // tính độ dài của từng slide
    num_page=Math.ceil(slide.length/numberonetime);
    // tính số lượng trang
    slide.forEach((el,index)=>{
        el.style.width=(slidegr.offsetWidth/100*percentwidth_slide)+'px';
        // set độ rộng của từng slide
    })
    // slidegr.offsetWidth/100*percentwidth_slide
    // tại sao không dùng công thức như trên mà tớ commnet lại
    // vì dùng nó sẽ bị sai số nên tránh sai số tớ dùng ở dưới
    slides.style.width=(slidegr.offsetWidth/100*percentwidth_slide)*slide.length+'px';
}
// gọi hàm thử nhé
makeslide(3);
// ok nhé hiểu ý tưởng r phải không ^^
var curpage=1;
// tạo 1 biến giữ vị trí trang
function showslide(pagenumber){
    slides.style.marginLeft=-(slidegr.offsetWidth*(pagenumber-1))+'px';
    // chịu khó tự suy nghĩ sao ra cthuc này nhé vì khá dễ
    // không được thifi comment sau mình sẽ giải thích
}
showslide(1);
// cho nó chạy lúc đầu là hiểu thị trang 1 luôn nhé
function changeslide(n){
    curpage=curpage+n;
    if(curpage<1)curpage=num_page;
    if(curpage>num_page)curpage=1;
    showslide(curpage);
}
// ok thanks các bạn
// mình cũng là newbie gà mờ nên có gì ae góp ý nhé
// mong ae sub ủng hộ kênh ^^