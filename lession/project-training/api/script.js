function callAPI() {
  const http = new XMLHttpRequest();
  // listen khi đã nhận được dữ liệu từ server
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // javascript try catch
      // server đã trả về dữ liệu thành công rồi :)
      try {
        // bắt lỗi
        // vẽ article lên browser
        // JSON.parse -> convert text -> arrayObject
        renderView(JSON.parse(this.responseText));
      } catch (e) {
        // có lỗi thì zô đây
        console.error(e);
      }
      // Typical action to be performed when the document is ready:
      // document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  // send request method
  const API = "https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article";
  http.open("GET", API, true);
  http.send();
}

function PostAPI() {
  const http = new XMLHttpRequest();
  // listen khi đã nhận được dữ liệu từ server
  http.onreadystatechange = function () {
    console.log("created", this.responseText);
    if (this.readyState == 4 && this.status == 200) {
      // javascript try catch
      // server đã trả về dữ liệu thành công rồi :)
      try {
        // bắt lỗi
        // vẽ article lên browser
        // JSON.parse -> convert text -> arrayObject
        console.log("created", this.responseText);
        // renderView(JSON.parse(this.responseText));
      } catch (e) {
        // có lỗi thì zô đây
        console.error(e);
      }
      // Typical action to be performed when the document is ready:
      // document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  // send request method
  const API = "https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article";
  const API_test = "https://61a5e4d18395690017be8ee6.mockapi.io/QuanLi";

  http.open("POST", API_test, true);
  const create = {
    // name: "Chief Configuration abc",
    // picture: "http://placeimg.com/640/480",
    // description: "deme something here",
    name: "test demo",
    age: 414141414,
    phone: 92783,
    cmnd: 64390,
  };
  // data body  chuỗi JSOn
  http.send(JSON.stringify(create));
}

function PutAPI() {
  const http = new XMLHttpRequest();
  // listen khi đã nhận được dữ liệu từ server
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // javascript try catch
      // server đã trả về dữ liệu thành công rồi :)
      try {
        console.log("created", this.responseText);
        // bắt lỗi
        // vẽ article lên browser
        // JSON.parse -> convert text -> arrayObject
        // renderView(JSON.parse(this.responseText));
      } catch (e) {
        // có lỗi thì zô đây
        console.error(e);
      }
      // Typical action to be performed when the document is ready:
      // document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  // send request method
  const id = 51;
  const API = `https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article/${id}`;
  // cập nhật
  http.open("PUT", API, true);
  const update = {
    name: "Chief Configuration abc update",
  };
  // data body  chuỗi JSOn
  http.send(JSON.stringify(update));
}

function DeleteAPI(id) {
  const http = new XMLHttpRequest();
  // listen khi đã nhận được dữ liệu từ server
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // javascript try catch
      // server đã trả về dữ liệu thành công rồi :)
      try {
        console.log("created", this.responseText);
        // bắt lỗi
        // vẽ article lên browser
        // JSON.parse -> convert text -> arrayObject
        // renderView(JSON.parse(this.responseText));
      } catch (e) {
        // có lỗi thì zô đây
        console.error(e);
      }
      // Typical action to be performed when the document is ready:
      // document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  // send request method
  const API = `https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article/${id}`;
  // cập nhật
  http.open("DELETE", API, true);
  // data body  chuỗi JSOn
  http.send();
}
/**
 *
 * data  array object article
 * output -> add html vừa tạo vào id ="list"
 */
function renderView(data = []) {
  // get id của id
  // c1 => dùng innerHTML
  // c2 =>

  /**
   *  <div class="item"> -> div create div 
        <h3>title</h3> -> h3. textNode title
        <img src="#" />  imag -> src=
        <p class="description">aannana</p> p>
      </div>
   */
  const listElm = document.getElementById("list");
  let result = "";
  for (let item of data) {
    result += `<div class='item'>
      <h3>${item.name}</h3>
      <button onClick="DeleteAPI(${item.id})">remove article</button>
      <img src="${item.picture}"/>
      <p>${item.description}</p>
    </div>`;
  }
  listElm.innerHTML = result;
}
