document.addEventListener("DOMContentLoaded", () => {

    const inputs = document.querySelectorAll(".wo-input");

    inputs.forEach((input, index) => {

        const chave = "wo_" + index;

        // Carrega valor salvo
        input.value = localStorage.getItem(chave) || "";

        // Salva automaticamente ao digitar
        input.addEventListener("input", () => {
            localStorage.setItem(chave, input.value);
        });

    });

});

function limparTabela() {

    const inputs = document.querySelectorAll(".wo-input");

    inputs.forEach((input, index) => {
        localStorage.removeItem("wo_" + index);
        input.value = "";
    });

}

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyDijsvNqbY-CbyiaWy5Gw1ijaKN4EVneM8",
  authDomain: "oceaneeringwotooling.firebaseapp.com",
  projectId: "oceaneeringwotooling",
  storageBucket: "oceaneeringwotooling.firebasestorage.app",
  messagingSenderId: "624208457140",
  appId: "1:624208457140:web:f5b1304fa98cdf3d2b96e1"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", async () => {

    const inputs = document.querySelectorAll("input");

    for(let i = 0; i < inputs.length; i++) {

        const docRef = doc(db, "workorders", "campo" + i);

        const snap = await getDoc(docRef);

        if (snap.exists()) {
            inputs[i].value = snap.data().valor;
        }

        inputs[i].addEventListener("change", async () => {

            await setDoc(docRef, {
                valor: inputs[i].value
            });

        });
    }
});
