document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("تم تسجيل الدخول (نسخة تجريبية)");
        });
    }
});
