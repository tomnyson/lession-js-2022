// OPP
class Sach {
  constructor(maSach, tenSach, namSX, soTrang, tacGia) {
    this.maSach = maSach;
    this.tenSach = tenSach;
    this.namSX = namSX;
    this.soTrang = soTrang;
    this.tacGia = tacGia;
  }
  inSach() {
    const showInfo = "mã:" + this.maSach + "|tên" + this.tacGia;
    // console.log(`mã: ${this.maSach}|tên: ${this.tacGia}`);
    console.log(showInfo);
  }
}

class TapChi extends Sach {
  constructor(maSach, tenSach, namSX, soTrang, tacGia, chuDe) {
    super(maSach, tenSach, namSX, soTrang, tacGia);
    this.chuDe = chuDe;
  }
  getChuDe() {
    return this.chuDe;
  }
  setChuDe(chuDe) {
    this.chuDe = chuDe;
  }
  inSach() {
    super.inSach();
    console.log("chủ đề", this.chuDe);
  }
  static xemTacGia() {
    console.log("xem tac gia");
  }
}
