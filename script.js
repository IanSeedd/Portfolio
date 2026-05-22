// Seleciona o vídeo pelo ID
const videoDeFundo = document.getElementById('backinicio');

// Altera a velocidade (1.0 é a velocidade normal)
videoDeFundo.playbackRate = 0.6; // 0.5 roda na metade da velocidade (em câmera lenta)

// ====== LÓGICA DE ALTERNÂNCIA DA DEKU TV (MOBILE) ======

// Banco de dados técnico de todas as linguagens/frameworks
const listaTecnologias = [
    {
        nome: "Django",
        logo: "imagens/djangologo.png",
        cor: "#1bf2bb",
        titulo: "Desenvolvimento Web Framework Back-end",
        texto: "É o django que dá vida a um site usando python para back-end, integrando todas as funcionalidades que você precisa. Com ele é possível fazer diversos projetos robustos com segurança de usuários e versátilidade."
    },
    {
        nome: "Python",
        logo: "imagens/pythonlogo.png",
        cor: "#ffd000",
        titulo: "Linguagem de Programação Multipropósito",
        texto: "A linguagem versátil capaz de fazer aplicações completas, no meu caso eu utilizo principalmente durante o desenvolvimento usando Django. Pretendo fazer alguns projetos diferentes, assim como a automação de videos que já fiz uma vez."
    },
    {
        nome: "HTML",
        logo: "imagens/htmlogo.png",
        cor: "#00bfff",
        titulo: "Linguagem de Marcação de Hipertexto",
        texto: "Ele não é uma linguagem de programação, mas sim uma linguagem de marcação que organiza e estrutura o conteúdo de um site, como textos, imagens e links, para que o navegador consiga exibi-los corretamente."
    },
    {
        nome: "CSS",
        logo: "imagens/csslogo.png",
        cor: "#bf40ff",
        titulo: "Folhas de Estilo em Cascata",
        texto: "Responsável pelo controle visual, criação de efeitos. Também não é uma linguagem de programação, porém ainda é uma ferramenta front-end."
    },
    {
        nome: "Bootstrap",
        logo: "imagens/bootstraplogo.png",
        cor: "#ff5900",
        titulo: "Framework Front-end Open-Source",
        texto: "A ferramenta front-end ágil que estica, amarra e prende todos os elementos do layout de forma maleável ajudando o desenvolvimento mobile first, tornando suas paginas responsivas com pouco esforço."
    }
];

let indiceAtual = 0;
let intervaloDekuTv;
// Função responsável por atualizar a interface com efeitos visuais
function atualizarDekuTv() {
    const tech = listaTecnologias[indiceAtual];
    
    const imgLogo = document.getElementById('mobile-glitch-logo');
    const txtTitulo = document.getElementById('info-title');
    const txtSubtitle = document.getElementById('info-subtitle');
    const txtTexto = document.getElementById('info-text');
    const caixaInfo = document.getElementById('deku-info-box');
    
    // Seleciona a tela da TV para aplicar o efeito de canal
    const telaTv = document.querySelector('.dekutv-screen');

    if (!imgLogo || !txtTitulo || !txtSubtitle || !txtTexto) return;

    // 1. Injeta o efeito de "Troca de Canal" piscando a tela antiga
    if (telaTv) {
        telaTv.classList.add('mudando-canal');
    }

    // Suaviza a caixinha de informações lateral
    if (caixaInfo) {
        caixaInfo.style.opacity = "0.2";
        caixaInfo.style.transform = "scale(0.97)";
    }

    // Esperamos 100ms (exatamente o meio do flash preto da TV) para trocar os dados escondidos por trás do efeito
    setTimeout(() => {
        // Altera o Logo e a Variável de Cor Neon da TV
        imgLogo.src = tech.logo;
        imgLogo.style.setProperty('--ofa-color', tech.cor);

        // Altera os textos da caixa de informações
        txtTitulo.innerText = tech.titulo;
        txtTitulo.style.color = tech.cor;
        txtSubtitle.innerText = tech.nome;
        txtTexto.innerText = tech.texto;

        if (caixaInfo) {
            caixaInfo.style.opacity = "1";
            caixaInfo.style.transform = "scale(1)";
        }
    }, 100);

    // 2. Remove a classe após a animação terminar (250ms) para deixá-la pronta para o próximo ciclo
    setTimeout(() => {
        if (telaTv) {
            telaTv.classList.remove('mudando-canal');
        }
    }, 250);
}

// Avança para o próximo item da lista de forma circular
function proximaTecnologia() {
    indiceAtual = (indiceAtual + 1) % listaTecnologias.length;
    atualizarDekuTv();
}
// Configura e reinicia o temporizador de 20 segundos (20 * 1000 ms)
function iniciarTemporizador() {
    clearInterval(intervaloDekuTv);
    intervaloDekuTv = setInterval(proximaTecnologia, 10 * 1000);
}
// Evento de Clique no contêiner do Deku
document.addEventListener("DOMContentLoaded", () => {
    const acionadorDeku = document.getElementById('deku-tv-trigger');   
    if (acionadorDeku) {
        acionadorDeku.addEventListener('click', () => {
            proximaTecnologia();
            iniciarTemporizador(); // Reseta os 20 segunos ao clicar manualmente
        });
    }
    // Inicializa o temporizador da primeira execução
    iniciarTemporizador();
});