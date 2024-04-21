import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, getDocs, collection, orderBy, query } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBG4DbjfKLjKLJiDCqwrSD8NyXkPRw3uG8",
    authDomain: "tremanetwork.firebaseapp.com",
    projectId: "tremanetwork",
    storageBucket: "tremanetwork.appspot.com",
    messagingSenderId: "616145902036",
    appId: "1:616145902036:web:eeb2590483a0361cae1e41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

(async () => {
    const q = query(collection(db, 'posts'), orderBy("createdate", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(function (doc) {
        var data = doc.data();
        var date = data.createdate.toDate();
        var formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

        // Create a slide element
        var slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `
            <div class="post-card">
                <img src="${data.pictures.src}" alt="${data.pictures.title}">
                <h3 class="card-title">${data.title}</h3>
            </div>
        `;
        // <p class="post-card-decsription">${data.content}</p>
        //         <p class="post-card-date">${formattedDate}</p>

        // Add the slide to the swiper wrapper
        document.getElementById('swiper-wrapper').appendChild(slide);
    });

    // Initialize Swiper after all slides are added
    var swiper = new Swiper('.swiper-container', {
        direction: "horizontal",
        slidesPerView: 1,
         spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints:{
            426:{
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
})();

