// =====================================
// المعجم المهري
// الملف الرئيسي لجافاسكريبت
// =====================================

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    if (!form) {
        return;
    }

    const usernameInput = form.querySelector('input[name="username"]');
    const passwordInput = form.querySelector('input[name="password"]');

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            alert("يرجى إدخال اسم المستخدم وكلمة المرور.");
            return;
        }

        // سيتم استبدال هذا لاحقًا بنظام تسجيل دخول حقيقي.
        alert("تم تسجيل الدخول (نسخة تجريبية).");
    });
});
