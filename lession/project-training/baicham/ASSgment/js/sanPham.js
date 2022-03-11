function TaoDoiTuongSanPham(hinhAnh, ten, giaGoc, phanTramGiamGia, id) {
  var sanPham = new Object();
  sanPham.hinhAnh = hinhAnh;
  sanPham.ten = ten;
  sanPham.giaGoc = giaGoc;
  sanPham.phanTramGiamGia = phanTramGiamGia;
  console.log("id", id);
  if (id !== undefined) {
    sanPham.id = id;
  } else {
    sanPham.id = taoId();
  }

  sanPham.tinhGiaBan = function () {
    var giaBan = this.giaGoc * (1 - this.phanTramGiamGia);
    return giaBan;
  };

  sanPham.toJson = function () {
    var json = JSON.stringify(this);
    return json;
  };

  sanPham.fromJSON = function (json) {
    /* var doiTuongDayDu = new Object();
        var doiTuong = JSON.parse(json);
        

        var doiTuongDayDu = TaoDoiTuongSanPham(doiTuong.hinhAnh, doiTuong.ten, doiTuong.giaGoc, doiTuong.phanTramGiamGia, doiTuong.id);
        return doiTuongDayDu;*/
    console.log(json);
  };

  sanPham.fromJSONs = function (jsonDanhSachSanPham) {
    var danhSachSanPhamDayDu = new Array();
    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    for (var i = 0; i < danhSachSanPham.length; i++) {
      var sanPham = danhSachSanPham[i];
      var sanPhamDayDu = TaoDoiTuongSanPham(
        sanPham.hinhAnh,
        sanPham.ten,
        sanPham.giaGoc,
        sanPham.phanTramGiamGia,
        sanPham.id
      );
      danhSachSanPhamDayDu[i] = sanPhamDayDu;
    }
    return danhSachSanPhamDayDu;
  };
  return sanPham;
}
function chuyenDanhSachDoiTuongSanPhamThanhHTML(danhSachSanPham) {
  var HTMLDanhSachSanPham = '<div class="items">';
  for (var i = 0; i < danhSachSanPham.length; i++) {
    var sanPham = danhSachSanPham[i];
    var htmlSanPham = chuyenDoiTuongSanPhamThanhHTML(sanPham);
    HTMLDanhSachSanPham = HTMLDanhSachSanPham + htmlSanPham;
  }
  HTMLDanhSachSanPham = HTMLDanhSachSanPham + "</div>";
  return HTMLDanhSachSanPham;
}
function chuyenDoiTuongSanPhamThanhHTML(sanPham) {
  sanPham = TaoDoiTuongSanPham(
    sanPham.hinhAnh,
    sanPham.ten,
    sanPham.giaGoc,
    sanPham.phanTramGiamGia,
    sanPham.id
  );
  console.log("chuyenDoiTuongSanPhamThanhHTML", sanPham);
  var html = "";
  html += '<div class="item">';
  html += '<div class="item-thumb">';
  html += '<img src="' + sanPham.hinhAnh + '" alt="" srcset=""></div>';
  html += '<h2 class="item-title">' + sanPham.ten + "</h2>";
  html += '<div class="item-price">';
  html += '<span class="item-price-origin">' + sanPham.giaGoc + "</span>";
  html += '<span class="item-price-sale">' + sanPham.tinhGiaBan() + "</span>";
  html += "</div>";
  html +=
    "<button onclick=\"onClickDuaVaoGioHang('" +
    sanPham.id +
    '\')" class=" btn btn-primary">Thêm vào giỏ hàng</button>';
  html += "</div>";
  return html;
}
function truyXuatDoiTuongTheoId(id) {
  var sanPham = new Object();
  var jsonDanhSachSanPham = localStorage.getItem("danhSachSanPham");
  var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);

  for (var i = 0; i < danhSachSanPham.length; i++) {
    var sanPhamHienTai = danhSachSanPham[i];
    if (sanPhamHienTai.id == id) {
      sanPham = sanPhamHienTai;
    }
  }
  sanPham = TaoDoiTuongSanPham(
    sanPham.hinhAnh,
    sanPham.ten,
    sanPham.giaGoc,
    sanPham.phanTramGiamGia,
    sanPham.id
  );

  return sanPham;
}
