// =====================================
// المعجم المهري - النسخة الخاصة
// JavaScript الأساسي
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = form.querySelector('input[type="text"]').value.trim();
        const password = form.querySelector('input[type="password"]').value.trim();

        if (username === "" || password === "") {
            alert("يرجى إدخال اسم المستخدم وكلمة المرور.");
            return;
        }

        alert("تم تسجيل الدخول (نسخة تجريبية).");
    });

});
