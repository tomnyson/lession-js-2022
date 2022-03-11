let arrSach = [];
function isEmpty(value) {
  if (value !== "" && value !== undefined) {
    return false;
  }
  return true;
}
function editBook(maSach) {
	currentIndex = index
	maSach.value = arrSach[index].maSach
	tenSach.value = arrSach[index].tenSach
	namSX.value = arrSach[index].namSX
	soTrang.value = arrSach[index].soTrang
	tacGia.value = arrSach[index].tacGia
    showListSach();
    sach.value = arrSach[index]

}
function removeBook(maSach) {
  console.log("maSach", maSach);
  const tmp = arrSach.filter((item) => item.maSach != maSach);
  arrSach = [...tmp];
  console.log("arrSach", arrSach);
  showListSach();
}
function showListSach() {
  const items = document.getElementById("items");
  items.innerHTML = "";
  let html = "";
  if (arrSach.length > 0) {
    arrSach.forEach((item, index) => {
      html += `
      <tr>
                <td>${item.maSach}</td>
                <td>${item.tenSach}</td>
                <td>${item.namSX}</td>
                <td>${item.soTrang}</td>
                <td>${item.tacGia}</td>
                <td onClick="removeBook(${item.maSach})" class="remove">remove</td>
                <td onClick="editBook(${item})" class="edit">edit</td>
      </tr>
    `;
    });
    items.innerHTML = html;
  }
}
function addSach() {
  event.preventDefault();
  const maSach = document.getElementById("maSach").value;
  const tenSach = document.getElementById("tenSach").value;
  const namSX = document.getElementById("namSX").value;
  const soTrang = document.getElementById("soTrang").value;
  const tacGia = document.getElementById("tacGia").value;
  if (
    isEmpty(maSach) ||
    isEmpty(tenSach) ||
    isEmpty(namSX) ||
    isEmpty(soTrang) ||
    isEmpty(tacGia)
  ) {
    alert("invalid value");
  } else {
    const sach = {
      maSach, // duy nhất
      tenSach,
      namSX,
      soTrang,
      tacGia,
    };
    // kiểm tra tồn tại
    const isFound = arrSach.filter((item) => item.maSach === sach.maSach);
    console.log("isFound", isFound);
    if (isFound && isFound.length === 0) {
      arrSach.push(sach);
    } else {
      // update sách
      // alert("đã có key");
      const isUpdate = confirm(`bạn có muốn cập nhật mã sách ${sach.maSach}`);
      if (isUpdate == true) {
        const tmpArr = arrSach.map((item) => {
          if (item.maSach === sach.maSach) {
            return {
              ...sach,
            };
          } else {
            return {
              ...item,
            };
          }
        });
        console.log("tmp", tmpArr);
        arrSach = [...tmpArr];
        // cách 2
        // arrSach.forEach((item, index) => {
        //   if (item.maSach === sach.maSach) {
        //     arrSach[index] = sach;
        //   }
        // });
      }
    }
    //thêm sách
    console.log("showListSach");
    showListSach();
    console.log(arrSach);
  }
}