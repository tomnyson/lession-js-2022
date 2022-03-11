var count = 1
let isOK = true
let index
var tableName = ''
var save = document.getElementById('save')
var arrBook = []
var oBook = {}
save.addEventListener('click', function (){
    document.getElementById('save').innerHTML = 'Thêm sách'

    var ma = document.getElementById('ip_id').value
    var ten = document.getElementById('ip_name').value
    var namSanXuat = document.getElementById('ip_year').value
    var soTrang = document.getElementById('ip_page').value
    var tacGia = document.getElementById('ip_person').value
   
    
    if(ma == undefined || ma.trim() == ''){
        checkId.innerHTML = 'Bạn chưa nhập id!'
        isOK = false
    }else{
        checkId.innerHTML = ''
        isOK = true
    }
    for(let i = 0 ; i < arrBook.length ; i++){
        if(ma.trim() == arrBook[i].maSach){
            var a = confirm('ID này đã có, bạn có muốn cập nhật?')
            if(a){
                arrBook[i].tenSach = ten
                arrBook[i].nam = namSanXuat
                arrBook[i].soTrang = soTrang
                arrBook[i].tacGia = tacGia
                isOK = false
            }else{
                isOK = false
            }
        }
    }
    
    if(ten == undefined || ten.trim() == ''){
        checkName.innerHTML = 'Bạn chưa nhập tên!'
        isOK = false
    }else{
        checkName.innerHTML = ''
    }
    if(namSanXuat == undefined || namSanXuat.trim() == ''){
        checkAge.innerHTML = 'Bạn chưa nhập tuổi!'
        isOK = false
    }else{
        checkAge.innerHTML = ''
    }
    if(soTrang == undefined || soTrang.trim() == ''){
        checkCmnd.innerHTML = 'Bạn chưa nhập số cmnd!'
        isOK = false
    }else{
        checkCmnd.innerHTML = ''
    }
    if(tacGia == undefined || tacGia.trim() == ''){
        checkNote.innerHTML = 'Bạn chưa nhập tác giả!'
        isOK = false
    }else{
        checkNote.innerHTML = ''
    }

        oBook = {
            maSach : ma,
            tenSach: ten,
            namSanXuat: namSanXuat,
            soTrang: soTrang,
            tacGia: tacGia,

        }
    if(isOK){
        arrBook.push(oBook)
    }
    xuatDs()
    
    console.log(arrBook)
    
    // var dlt = document.getElementById(`delete${index}`)
    // dlt.addEventListener('click', deleteBook(index))
})

function xuatDs(){
    tableName = 
    `<tr> 
        <th>Stt</th>
        <th>Mã sách</th>
        <th>Tên sách</th>
        <th>Năm sản xuất</th>
        <th>Số trang</th>
        <th>Tác giả</th>
        <th>Chức năng</th>
    </tr>`
    for(let i = 0 ; i < arrBook.length ; i++){
        index = i
        tableName += 
        `<tr> 
            <th>${i}</th>
            <th>${arrBook[i].maSach}</th>
            <th>${arrBook[i].tenSach}</th>
            <th>${arrBook[i].namSanXuat}</th>
            <th>${arrBook[i].soTrang}</th>
            <th>${arrBook[i].tacGia}</th>
            <th><a href="#" onclick='editBook(${index})' >Sửa|</a><a  id="delete${index}" href="#" onclick = 'deleteBook(${index})'>Xóa</a></th>
        </tr>`

    }
    document.getElementById('table').innerHTML = tableName
}
function deleteBook(index){
    arrBook.splice(index, 1)
    xuatDs()
}
function editBook(index){
    document.getElementById('ip_id').value = arrBook[index].maSach
    document.getElementById('ip_name').value = arrBook[index].tenSach
    document.getElementById('ip_year').value = arrBook[index].namSanXuat
    document.getElementById('ip_page').value=  arrBook[index].soTrang
    document.getElementById('ip_person').value = arrBook[index].tacGia
    document.getElementById('save').innerHTML = 'cập nhật'
}


