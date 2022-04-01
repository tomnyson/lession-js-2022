let dem =0;
class DienThoai {
  constructor(name, color, price, size, ram , camera) {
    this.name = name
    this.color = color
    this.price = price
    this.size = size
    this.ram = ram
    this.camera = camera
    dem++;
  }
  xuatThongTin() {
    console.log(`${this.name} 
    ${this.color}
     ${this.size} 
     ${this.ram} 
     ${this.camera}
    ${this.price}`)
  }
static dem() {
    console.log(dem)
  }
}

const iphone11 = new DienThoai('iphone 11', 'black', '20.000.000', '5.8 inch', '4 GB', '12 MP')
iphone11.xuatThongTin()
const iphone13 = new DienThoai('iphone 13', 'black', '30.000.000', '5.8 inch', '6 GB', '12 MP')
iphone13.xuatThongTin()
// ten lop . ham 
DienThoai.dem()

class Xe {
  constructor(ten, thuonghieu, gia) {
    this.ten = ten
    this.thuonghieu = thuonghieu
    this.gia = gia
  }
  xuatThongTin() {
    console.log(`${this.ten} 
    ${this.thuonghieu}
     ${this.gia}`)
  }
}
// extends lien ket voi lop Cha
// super để truy xuất các thuộc tính của lớp cha
class XeTang extends Xe {
  constructor(ten, thuonghieu, gia, banhxich, giap, sung, loinuoc) {
    super(ten, thuonghieu, gia)
    this.banhxich = banhxich
    this.giap = giap
    this.sung = sung
    this.loinuoc = loinuoc
    this.dan =0;
  }
  xuatThongTin() {
    super.xuatThongTin()
    console.log(`${this.banhxich} 
    ${this.giap}
     ${this.sung} 
     ${this.loinuoc}
     đạn: ${this.dan}`)
  }
  napDan(dan) {
    this.dan += dan
  }
  chienDau(muctieu){
    if(this.dan >10 && this.sung) {
      console.log(`${this.ten} đã chạy bắn tiêu diệt ${muctieu}`)
      this.dan -=10;
    } else {
      console.log(`xe tăng không có khả năng chiến đấu`)
    }
  }
}

const xeTangT72 = new XeTang('xe tang t72', 'nga ngố', '2 triệu usd', true, '3mm', true, true)

xeTangT72.xuatThongTin()
xeTangT72.chienDau('Xe tăng M1A1 Abrams')
xeTangT72.napDan(100)
xeTangT72.chienDau('Xe tăng M1A1 Abrams')
xeTangT72.xuatThongTin()
/**
 *  lấy huy chương chiến đấu 
 *  đồng >=300
 *  bạc >=500
 * vàng >= 1000
 * 1 lần thành công: +=100đ
 * 
 */