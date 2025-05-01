// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDp2FnFz9Iv6R3MJzq4nSAp8VCzXC2-QmQ",
    authDomain: "user-6c2bb.firebaseapp.com",
    databaseURL: "https://user-6c2bb-default-rtdb.firebaseio.com",
    projectId: "user-6c2bb",
    storageBucket: "user-6c2bb.appspot.com",
    messagingSenderId: "1057784213332",
    appId: "1:1057784213332:web:a2bcb36d97ac66533622c1",
    measurementId: "G-F8Y2D5Y8E6"
  };  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//登入
document.getElementById("submitForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, username, password);
        console.log("使用者登入成功:", userCredential.user);

        const userEmail = userCredential.user.email;
        if (userEmail && /^[a-zA-Z]/.test(userEmail.charAt(0))) {
            window.location.replace('teacher.html');
        } else {
            window.location.href = "student.html";
        }
    } catch (error) {
        console.error("登入錯誤代碼:", error.code);
        console.error("登入錯誤訊息:", error.message);

        if (error.code === 'auth/user-not-found') {
            alert('此帳號尚未註冊。請檢查電子郵件或註冊新帳號。');
        } else if (error.code === 'auth/wrong-password') {
            alert('密碼錯誤。請檢查您的密碼或重設密碼。');
        } else {
            alert(`登入失敗: ${error.message}`);
        }
    }

});