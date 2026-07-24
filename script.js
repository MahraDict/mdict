// ======================================
// المعجم المهري
// الإصدار 0.1
// ملف JavaScript الرئيسي
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("تم تشغيل المعجم المهري");

    const loginButton = document.getElementById("loginBtn");

    if (loginButton) {

        loginButton.addEventListener("click", function () {

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username === "") {
                alert("يرجى إدخال اسم المستخدم.");
                return;
            }

            if (password === "") {
                alert("يرجى إدخال كلمة المرور.");
                return;
            }

            alert("مرحباً بك في المعجم المهري");

            // في المرحلة القادمة
            // سيتم الانتقال إلى لوحة التحكم
            // window.location.href = "dashboard.html";

        });

    }

});
