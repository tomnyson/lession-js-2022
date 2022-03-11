var API = 'https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article'
var object

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

function admin() {
    location.href = "./login.html"
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
        html += '</tr>'
    });
    document.getElementById("show").innerHTML = html
}