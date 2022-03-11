var keyLocalStorageItemGiohang = 'danhSachItemGioHang';
function TaoDoiTuongItemGioHang(idSanPham, soLuong,){
    var itemGioHang = new Object();
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;
    
    return itemGioHang;
}
function layDanhSachItemGioHang(){
    var danhSachItemGiohang = new Array();
    var jsonDanhSachItemGioHang = localStorage.getItem(keyLocalStorageItemGiohang);

    if(jsonDanhSachItemGioHang != null){
        danhSachItemGiohang = JSON.parse(jsonDanhSachItemGioHang);
    }
    return danhSachItemGiohang;
}
function luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang){
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);

    localStorage.setItem(keyLocalStorageItemGiohang, jsonDanhSachItemGioHang);
}
function xoaIteam(x){
    for( let i = 0; i<danhSachItemGioHang.length; i++){
        if(data[i].Id==x){
            data.splice(i,1)
            show()
        }
    }
}