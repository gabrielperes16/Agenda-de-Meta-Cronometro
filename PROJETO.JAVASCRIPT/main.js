const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
// MUDAR DATAS :
const objetivos = [
    new Date("2024-08-07T00:00:00"),
    new Date("2024-08-07T00:00:00"),
    new Date("2024-07-07T00:00:00"),
    new Date("2024-06-07T00:00:00")
];

function calculaTempo(tempoObjetivo) {
    const tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    if (tempoFinal < 0) tempoFinal = 0;
    const segundos = Math.floor(tempoFinal / 1000) % 60;
    const minutos = Math.floor(tempoFinal / 1000 / 60) % 60;
    const horas = Math.floor(tempoFinal / 1000 / 60 / 60) % 24;
    const dias = Math.floor(tempoFinal / 1000 / 60 / 60 / 24);
    return [dias, horas, minutos, segundos];
}

function atualizaCronometro() {
    contadores.forEach((contador, i) => {
        const [dias, horas, minutos, segundos] = calculaTempo(objetivos[i]);
        document.getElementById(`dias${i}`).textContent = dias;
        document.getElementById(`horas${i}`).textContent = horas;
        document.getElementById(`min${i}`).textContent = minutos;
        document.getElementById(`seg${i}`).textContent = segundos;
    });
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

botoes.forEach((botao, i) => {
    botao.addEventListener("click", () => {
        botoes.forEach((b, j) => {
            b.classList.remove("ativo");
            textos[j].classList.remove("ativo");
        });
        botao.classList.add("ativo");
        textos[i].classList.add("ativo");
    });
});

comecaCronometro();
