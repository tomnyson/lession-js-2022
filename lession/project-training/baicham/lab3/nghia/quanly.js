
var data=[];// array lưu thông tin object
//check trùng maSach
function checkma(maSach){
    var list =this.data;
    for (let i = 0; i < list.length; i++) {
        if(list[i].maSach == maSach){
            return true;
        }
    }
}

// hiển thị
function viewData(){
    var list =this.data;
    var table ='<table border="1" ceellpadding="5"><thead><tr><th>maSach</th><th>tenSach</th><th>namSX</th><th>soTrang</th><th>tacGia</th><th>delete</th></tr></thead><tbody>'
            for (var i = 0; i < list.length; i++) {
                table+='<tr>';
                table+='<td>' + list[i].maSach + '</td>'
                table+='<td>' + list[i].tenSach+ '</td>'
                table+='<td>' + list[i].namSX  + '</td>'
                table+='<td>' + list[i].soTrang+ '</td>'
                table+='<td>' + list[i].tacGia + '</td>'
                table+='<td><button onclick="deleteP('+list[i].maSach+')">delete</button></td>'
                table+='</tr>'
            }
        table+=`</tbody>
    </table>`
    document.getElementById('database').innerHTML=table;
    
}
// thêm mới
function addData(){
    
    var maSach = document.getElementById('maSach').value;
    var tenSach = document.getElementById('tenSach').value;
    var namSX = document.getElementById('namSX').value;
    var soTrang = document.getElementById('soTrang').value;
    var tacGia = document.getElementById('tacGia').value;

    

   var irem ={
    maSach : maSach,
    tenSach : tenSach,
    namSX : namSX,
    soTrang : soTrang,
    tacGia : tacGia,
   };
   if(!checkma(maSach)){
        this.data.push(irem);
        viewData();
   }else{
       alert('Mã sách trùng')
   }
   
}
//xoá
function deleteP(maSach){
    var list =this.data;
    for (let i = 0; i < list.length; i++) {
        if(list[i].maSach == maSach){
           list.splice(i,1)
           viewData();
        }
    }
}