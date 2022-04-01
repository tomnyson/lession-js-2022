let dem=0;
class ConMeo {
    constructor(ten, tuoi, loai) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.loai = loai;
        dem++;
    }
    thongTin() {
        console.log(`${this.ten} - ${this.tuoi} - ${this.loai}`);
    }
   static demMeo() {
        console.log(`so meo`, dem)
    }
}

const conMeoMun = new ConMeo('Mun', 2, 'đực');
const conMeoDenTuyen = new ConMeo('Den tuyen', 5, 'cai');
conMeoMun.thongTin();
conMeoDenTuyen.thongTin();
ConMeo.demMeo()

class DongVat {
    constructor(ten, tuoi, loai) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.loai = loai;
    }
    thongTin() {
        console.log(`${this.ten} - ${this.tuoi} - ${this.loai}`);
    }
}

class Meo extends DongVat {
    constructor(ten, tuoi, loai, soChan) {
        super(ten, tuoi, loai);
        this.soChan = soChan;
    }
    thongTin() {
        super.thongTin();
        console.log(`${this.soChan}`);
    }
    keu(){
      console.log('meo meo')
    }
}

const meo = new Meo('meo tam thể', 2, 'đực', 2);
meo.thongTin();
meo.keu();
/**
 * sv fpt 
 * mssv, ten , tuoi, gioi tinh
 * SVCNTT nganh, dtb, js
 * SVUDPM nganh, dtb,java1
 */

class SinhVien {
  constructor(ten, mssv,nganh) {
    this.ten = ten;
    this.mssv = mssv;
    this.nganh = nganh;
  }
  xuat() {
    console.log(`${this.ten} - ${this.mssv} - ${this.nganh}`);
  }
}

class SinhVienIT extends SinhVien {
  constructor(ten, mssv, nganh, html, java,css) {
    super(ten, mssv, nganh);
    this.html= html;
    this.java = java;
    this.css = css;
    this.dtb = (this.html + this.java + this.css)/3;
  }
  xuat() {
    super.xuat()  
    console.log(`css: ${this.css} - java: ${this.java} - html: ${this.html} - dtb: ${this.dtb}`);
    console.log(`${this.dtb}`);
  }
}

class SinhVienDoHoa extends SinhVien {
  constructor(ten, mssv, nganh, pts1, pts2,pts3) {
    super(ten, mssv, nganh);
    this.pts1= pts1;
    this.pts2 = pts2;
    this.pts3 = pts3;
    this.dtb = (this.pts3 + this.pts3 + this.pts3)/3;
  }
  xuat() {
    super.xuat();
    console.log(`${this.dtb}`);
  }
}
const sv1 = new SinhVienIT('Nguyen Van A', '11623103', 'IT', 8, 9, 10);
sv1.xuat();
sv1.dtb()