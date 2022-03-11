// LOGIN PAGE SCRIPT =================================================
var username = 'admin'
var password = 'venus'

function login() {
    var user = document.getElementById('username').value
    var pass = document.getElementById('password').value

    if (username == user && password != pass) {
        alert('Sai mật khẩu')
        document.getElementById('username').value = ''
        document.getElementById('password').value = ''
    } else if (pass == '' || user == '') {
        alert('Nhập username & password')
    } else if (username != user) {
        alert('Sai tên đăng nhập')
        document.getElementById('username').value = ''
        document.getElementById('password').value = ''
    }

    if (username == user && pass == password) {
        location.href = './admin.html'
    }

}

// ADMIN PAGE SCRIPT ===================================================
var API = 'https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article'
var object
var idToPut

function callAPI() {
    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            object = JSON.parse(this.responseText)
            dom(object)
        }
    };
    http.open("GET", API, true);
    http.send();
}

function setId(number) {
    idToPut = number
    console.log(idToPut)
    document.getElementById('update-form').style.display = 'block'
}

function dom(object) {
    var html = ''
    object.forEach(item => {
        html += `<tr>`
        html += `<td>${item.id}</td>`
        html += `<td>${item.name}</td>`
        html += `<td><img src="${item.picture}"></td>`
        html += `<td>${item.createdAt}</td>`
        html += `<td>${item.description}</td>`
        html += `<td><button  onclick="setId(${item.id})">CẬP NHẬT</button></td>`
        html += `<td><button onclick="DeleteAPI(${item.id})">XÓA</button></td>`
        html += '</tr>'
    });
    document.getElementById("show").innerHTML = html
}


function PostAPI() {
    var vldname = document.getElementById('name').value
    var vldpicture = document.getElementById('picture').value
    var vlddescription = document.getElementById('description').value
    var create = {
        name: document.getElementById('name').value,
        picture: document.getElementById('picture').value,
        description: document.getElementById('description').value,
    };
    if (vlddescription == '' || vldpicture == '' || vldname == '') {
        alert('Nhập đầy đủ thông tin')
        return
    }
    fetch(API, {
            method: "POST",
            body: JSON.stringify(create),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
    document.getElementById('show').innerHTML = ''
    callAPI()
}



function PutAPI(idToPut) {
    var PUTitem = {
        name: document.getElementById('nameUP').value,
        picture: document.getElementById('pictureUP').value,
        description: document.getElementById('descriptionUP').value,
    };
    if (document.getElementById('nameUP').value == '' ||
        document.getElementById('pictureUP').value == '' ||
        document.getElementById('descriptionUP').value == '') {
        alert('Nhập đầy đủ thông tin')
        document.getElementById('update-form').style.display = 'none'
    } else {
        var apiPUT = `https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article/${idToPut}`
        fetch(apiPUT, {
                method: "PUT",
                body: JSON.stringify(PUTitem),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
        document.getElementById('update-form').style.display = 'none'
        alert('Đã cập nhật')
        document.getElementById('show').innerHTML = ''
        callAPI()
    }

}

function DeleteAPI(id) {
    fetch(`https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json()) // or res.json()
        // .then(res => console.log(res))
    alert('Đã xóa')
    document.getElementById('show').innerHTML = ''
    callAPI()
}

function home() {
    location.href = './index.html'
}
callAPI()