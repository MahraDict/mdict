// =====================================
// المعجم المهري - النسخة الخاصة
// ملف JavaScript الرئيسي
// =====================================

// عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {

    console.log("تم تشغيل المعجم المهري بنجاح");

    // زر تسجيل الدخول
    const loginButton = document.getElementById("loginBtn");

    if (loginButton) {

        loginButton.addEventListener("click", function () {

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username === "" || password === "") {
                alert("يرجى إدخال اسم المستخدم وكلمة المرور.");
                return;
            }

            // مؤقتاً فقط
            alert("تم تسجيل الدخول بنجاح.");

            // لاحقاً سننتقل إلى لوحة التحكم
            // window.location.href = "dashboard.html";

        });

    }

});
