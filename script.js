function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // 簡單的帳號密碼驗證（實際應用中請使用更安全的方法）
    if (username === 'torin' && password === 'qwe123') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        alert('帳號或密碼錯誤');
    }
}

function checkLogin() {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'index.html';
    }
}
