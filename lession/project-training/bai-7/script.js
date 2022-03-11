// xử lý case thêm sách
let listSach = [];
const addSach = () => {
  const inputs = document.getElementById("frmSach");
  const addSach = {};
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type !== "button") {
      console.log("inputs[i].value", inputs[i].value === "");
      const currentError = document.getElementsByClassName(
        `error-${inputs[i].name}`
      );
      if (inputs[i].value === "") {
        console.log("inputs[i].name", inputs[i].name);
        if (currentError) {
          currentError[0].innerHTML = "inValid field";
        }
      } else {
        addSach[inputs[i].name] = inputs[i].value || "";
        if (currentError) {
          currentError[0].innerHTML = "";
        }
      }
    }
  }
  addSach.hinhAnh = hinhanh;
  listSach.push(addSach);
  renderListSach();
  // resetForm();
};

const resetForm = () => {
  const inputs = document.getElementById("frmSach");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type !== "button") {
      inputs[i].value = "";
    }
  }
};
const renderListSach = () => {
  listSach.forEach((sach) => {
    renderItem(sach);
  });
};

const renderItem = (sach) => {
  const view = document.getElementsByClassName("list-view");
  const items = document.getElementsByClassName("items");
  const item = document.createElement("div");
  item.className = "item";
  // create image
  const hinhanh = document.createElement("img");
  hinhanh.src =
    sach.hinhAnh ||
    "https://www.artclick.vn/files/photobook-tap-chi-artclick-FqEGx7BdeY.jpg";
  item.appendChild(hinhanh);
  // create div
  const info = document.createElement("div");

  // ma sach
  const maSach = document.createElement("p");
  const txtMaSach = document.createTextNode(`Mã sách: ${sach.maSach}`);
  maSach.appendChild(txtMaSach);
  info.appendChild(maSach);
  // ten sach
  const tenSach = document.createElement("p");
  const txtTenSach = document.createTextNode(`Tên sách: ${sach.tenSach}`);
  tenSach.appendChild(txtTenSach);
  info.appendChild(tenSach);
  // nam san xuat
  const nsxSach = document.createElement("p");
  const txtNsxSach = document.createTextNode(
    `Năm sản xuât sách: ${sach.namSanXuat}`
  );
  nsxSach.appendChild(txtNsxSach);
  info.appendChild(nsxSach);
  // mo ta
  const moTaSach = document.createElement("p");
  const txtMoTaSach = document.createTextNode(`mô tả sách: ${sach.moTa}`);
  moTaSach.appendChild(txtMoTaSach);
  info.appendChild(moTaSach);
  // add vào items
  item.appendChild(info);
  items[0].appendChild(item);
  // add vào view
};
