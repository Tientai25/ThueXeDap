document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn việc gửi form mặc định

    // Lấy giá trị từ các trường input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Xử lý đăng nhập đơn giản (ở đây bạn có thể thêm logic xác thực thật)
    if (username === 'user' && password === 'password') {
        alert('Đăng nhập thành công!');
        // Điều hướng hoặc thực hiện hành động khác sau khi đăng nhập thành công
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
});
