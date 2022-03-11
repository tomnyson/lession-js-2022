class Sach {
  constructor(maSach, tenSach, hinhAnh, tacGia, moTa, namSanXuat, soTrang) {
    this.maSach = maSach;
    this.tenSach = tenSach;
    this.hinhAnh = hinhAnh;
    this.namSanXuat = namSanXuat;
    this.moTa = moTa;
    this.tacGia = tacGia;
    this.soTrang = soTrang;
  }
  getTacGia() {
    return this.tacGia;
  }
}
let hinhanh;
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const showPreview = (event) => {
  console.log("event", event.target.files);
  var src = URL.createObjectURL(event.target.files[0]);
  console.log("src", src);
  getBase64(event.target.files[0]).then((data) => {
    hinhanh = data;
  });
  var preview = document.getElementById("image");
  preview.src = src;
  preview.style.display = "block";
};
