class Xe {
    constructor(ten, mau, gia) {
        this.ten = ten;
        this.mau = mau;
        this.gia = gia;
    }
    xuat() {
        console.log(`${this.ten} - ${this.mau} - ${this.gia}`);
    }
}
class XeMay extends Xe {
  constructor(ten, mau, gia,soBanh) {
    super(ten, mau, gia);
    this.soBanh = soBanh;
  }
  xuat() {
    super.xuat();
    console.log(`${this.soBanh} banh`);
  }
}

const xeHonDa = new XeMay('Xe vision', 'đỏ', 34000000, 2);
xeHonDa.xuat();
// const xeExciter= new Xe('Xe Exciter', 'xanh', 59000000);
// xeExciter.xuat();

/**
 * lop sv
 * mssv
 * ten 
 * ngay thang nam sinh
 * nganh
 * dtb sv
 * xeploaihocluc  (0-10) yeu,tb, kha, gioi
 */
let dem =0
class SinhVien {
  constructor(mssv, ten,namsinh,nganh, dtb) {
    this.mssv = mssv;
    this.ten = ten;
    this.namsinh = namsinh;
    this.nganh = nganh;
    this.dtb = dtb;
   dem++;
  }
  xuat() {
    console.log(`${this.mssv} - 
    ${this.ten} 
    - ${this.namsinh} 
    - ${this.nganh} 
    - ${this.dtb}`);
  }
  xepLoaiHocLuc() {
    console.log(this.dtb)
  }
  static getSV() {
    console.log(`so sinh vien`, dem)
  }
}

const tomnyson = new SinhVien('171210044',
 'Tommy',
  '1993', 'CNTT', 8.5);
  const tomnyson1 = new SinhVien('171210044',
 'Tommy',
  '1993', 'CNTT', 8.5);
  tomnyson.xuat();
  tomnyson.xepLoaiHocLuc()
  SinhVien.getSV();

