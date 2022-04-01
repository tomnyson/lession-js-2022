let dem=0;
// class XeMoTo {
//     constructor(ten, mau, gia) {
//       // thuoc tinh
//         this.ten = ten;
//         this.mau = mau;
//         this.gia = gia;
//         dem++;
//     }
//     // method phuong thuc
//     xuatThongTin() {
//         console.log(`${this.ten} - ${this.mau} - ${this.gia}`);
//     }
//     static dem() {
//       console.log(`so xe mo to`, dem)
//     }
// }

// const vision = new XeMoTo('vision', 'đỏ', 34000000);
// const sh = new XeMoTo('sh', 'trang', 15000000);
// vision.xuatThongTin();
// sh.xuatThongTin();
// XeMoTo.dem();

/**
 * xe
 */

class Xe {
  constructor(ten, model,mau,gia){
    this.ten = ten;
    this.model = model;
    this.mau = mau;
    this.gia = gia;
  }
  xuatThongTin(){
    console.log(`${this.ten} - ${this.model} - ${this.mau} - ${this.gia}`);
  }
}

class XeMoTo extends Xe {

  constructor(ten, model, mau,gia,soBanh){
    super(ten, model, mau,gia);
    this.soBanh = soBanh;
  }
  xuatThongTin(){
    super.xuatThongTin();
    console.log(`${this.soBanh}`);
  }

}
class XeTang extends Xe {
  constructor(ten, model, mau,gia, loinuoc){
    super(ten, model, mau,gia);
    this.loinuoc = loinuoc;
    this.dan = 0;
  }
  napDan(dan) {
    this.dan += dan;
  }
  chienDau(muctieu){
    console.log('this.dan',this.dan)
    if(this.dan <=0){
      console.log('he thong khong cho phep chieu dau');
    } else {
      // 0 truot
      // 1 trung
      console.log(Math.round(Math.random()*1)+0)
      console.log(`đã bắn đến ${muctieu}`);
    }
  }
  xuatThongTin(){
    super.xuatThongTin();
    console.log(`${this.dan}`);
  }
}
const vision = new XeMoTo('vision', '2021', 'đỏ', 34000000,2);
const sh = new XeMoTo('sh', '20221', 'trang', 15000000,2);

vision.xuatThongTin();
sh.xuatThongTin();
// XeMoTo.dem();
const xeTang = new XeTang('xeTang T72', '1990', 'xanh', '1 trieu usd', true)
xeTang.xuatThongTin();
xeTang.napDan(10);
xeTang.chienDau('ban may bay truc thang');
/**
 *  rank : 
 *  sat>1000
 * dong >3000
 * bac >5000
 * vang > 10000
 * bachkim> 200000
 * mot lan ban trung muc tieu 1000 diem
 * 
 */
