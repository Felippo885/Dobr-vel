// Initial Data

let acc = document.getElementsByClassName("accordion");
let i;

// Functions

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Alternar entre adicionar e remover a classe "ativa", para destacar o botão que controla o painel */
    this.classList.toggle("active");

    /* Alternar entre ocultar e mostrar o painel ativo */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
