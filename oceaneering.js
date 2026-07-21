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