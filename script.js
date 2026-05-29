// Seleciona o vídeo pelo ID
const videoDeFundo = document.getElementById('backinicio');
// Altera a velocidade do senku
videoDeFundo.playbackRate = 0.6; 

// ====== LÓGICA DE ALTERNÂNCIA DO DEKU TV (MOBILE) ======
// Banco de dados técnico de todas as linguagens/frameworks
const listaTecnologias = [
    {
        nome: "Django",
        logo: "imagens/tech/djangologo.png",
        cor: "#1bf2bb",
        titulo: "Desenvolvimento Web Framework Back-end",
        texto: "É o django que dá vida a um site usando python para back-end, integrando todas as funcionalidades que você precisa. Com ele é possível fazer diversos projetos robustos com segurança de usuários e versátilidade."
    },
    {
        nome: "Python",
        logo: "imagens/tech/pythonlogo.png",
        cor: "#ffd000",
        titulo: "Linguagem de Programação Multipropósito",
        texto: "A linguagem versátil capaz de fazer aplicações completas, no meu caso eu utilizo principalmente durante o desenvolvimento usando Django. Pretendo fazer alguns projetos diferentes, assim como a automação de videos que já fiz uma vez."
    },
    {
        nome: "HTML",
        logo: "imagens/tech/htmlogo.png",
        cor: "#00bfff",
        titulo: "Linguagem de Marcação de Hipertexto",
        texto: "Ele não é uma linguagem de programação, mas sim uma linguagem de marcação que organiza e estrutura o conteúdo de um site, como textos, imagens e links, para que o navegador consiga exibi-los corretamente."
    },
    {
        nome: "CSS",
        logo: "imagens/tech/csslogo.png",
        cor: "#bf40ff",
        titulo: "Folhas de Estilo em Cascata",
        texto: "Responsável pelo controle visual, criação de efeitos. Também não é uma linguagem de programação, porém ainda é uma ferramenta front-end."
    },
    {
        nome: "Bootstrap",
        logo: "imagens/tech/bootstraplogo.png",
        cor: "#ff5900",
        titulo: "Framework Front-end Open-Source",
        texto: "A ferramenta front-end ágil que estica, amarra e prende todos os elementos do layout de forma maleável ajudando o desenvolvimento mobile first, tornando suas paginas responsivas com pouco esforço."
    },
    {
        nome: "Git",
        logo: "imagens/tech/git.webp",
        cor: "#F05032",
        titulo: "Controle de versão",
        texto: "Responsável pelo versionamento do projeto, ele é essencial para o github possibilitando a integração entre os repositórios local e nuvem."
    },
    {
        nome: "Cloudinary",
        logo: "imagens/tech/cloudinary.webp",
        cor: "#3448C5",
        titulo: "Storage de Mídias Nuvem",
        texto: "Apenas um storage nuvem, feito para otimizar as mídias de um site."
    },
    {
        nome: "Neon",
        logo: "imagens/tech/neon.webp",
        cor: "#00E599",
        titulo: "Nuvem PostgreSQL",
        texto: "Banco de dados serveless que permite otimizar a hospedagem, muito robusto e permite restauração(como uma maquina do tempo) em casos de perda de dados."
    },
    {
        nome: "Render",
        logo: "imagens/tech/render.webp",
        cor: "#7c7c8a",
        titulo: "Hospedagem",
        texto: "Uma das hospedagens que eu uso, fácil de usar e possuí um plano grátis mesmo que seja limitado. Com ele é fácil fazer o servidor acompanhar o versionamento do github."
    },
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
    atualizarTextoDasFitas(tech.nome);
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

// ====== SISTEMA DE PROJETOS EM PASTA ======

const dadosProjetos = [
    {
        titulo: "CoolKeys",
        imagem: "imagens/projetos/coolkeys.webp", 
        data: "Dezembro de 2025",
        status: "Concluído",
        autores: [
            { nome: "IanSeedd", link: "https://github.com/IanSeedd" },
            { nome: "Dudss2007", link: "https://github.com/Dudss2007" },
            { nome: "mesquitainfa93", link: "https://github.com/mesquitainfa93" },
            { nome: "leonardohishinuma", link: "https://github.com/leonardohishinuma" },
        ],
        descricao: "Coolkeys é um e-commerce de jogos criado exclusivamente para o projeto final de um curso do senac, a plataforma foi inspirada na Nuuvem. Eu trabalhei no backend e ainda pretendo adicionar algumas features que eu não adicionei a tempo junto com o Dudss2007, caso queira saber mais leia o readme.",
        link: "https://github.com/IanSeedd/CoolKeys",
        tipoLink: "repositorio"
    },
    {
        titulo: "BattleDex",
        imagem: "imagens/projetos/battledex.jpg",
        data: "Dezembro de 2025",
        status: "Em Produção",
        autores: [
            { nome: "IanSeedd", link: "https://github.com/IanSeedd" },
            { nome: "Dudss2007", link: "https://github.com/Dudss2007" }
        ],
        descricao: "O objetivo final é fazer um simulador de batalhas pokemon, assim como pokemon showdown, porém estamos usando a pokeAPI então por enquanto só temos a pokedex e os sistemas de box e party(igual nos jogos).\n O sistema conta com um backend robusto que economiza bastante espaço no banco de dados porque os pokemons só são adicionados quando um jogador 'gera' um pokemon dele, enfim o projeto ainda está em andamento e espero voltar a mexer nele em breve.",
        link: "https://github.com/IanSeedd/BattleDex",
        tipoLink: "repositorio"
    },
    {
        titulo: "OhLala!",
        imagem: "imagens/projetos/ohlala.png",
        data: "Março de 2026",
        status: "Em Produção",
        autores: [
            { nome: "IanSeedd", link: "https://github.com/IanSeedd" }
        ],
        descricao: "Meu primeiro projeto no meio de produção, eu realmente me dediquei nesse projeto e consegui fazer tudo funcionar mesmo com poucos recursos. Infelizmente o backend ficou escondido nas partes de administrador(Todo o cadastro de livros e manutenção das vendas são feitos pelo dono) já que o cliente preferiu não usar uma API de pagamentos e sim combinar a venda pelo whatsapp.\n Atualmente eu continuo modificando o projeto pois me solicitaram mais 'partes' além do sebo propriamente dito.",
        link: "https://ohlala.onrender.com/",
        tipoLink: "hospedado"
    }
];

let indiceProjetoAtual = 0;
let intervaloProjetos; // Guarda o timer de 20 segundos

function atualizarInterfacePasta() {
    const projeto = dadosProjetos[indiceProjetoAtual];
    
    // Altera os elementos básicos com segurança
    const elemTitle = document.getElementById("project-title");
    const elemImage = document.getElementById("project-image");
    const elemDesc = document.getElementById("project-description");
    const elemLink = document.getElementById("project-link");
    const elemDate = document.getElementById("project-date");
    
    if (elemTitle) elemTitle.innerText = projeto.titulo;
    if (elemImage) elemImage.src = projeto.imagem;
    if (elemDesc) elemDesc.innerText = projeto.descricao;
    if (elemLink) elemLink.href = projeto.link;
    if (elemDate) elemDate.innerText = projeto.data;
    
    // Lógica de links
    if (elemLink) {
            elemLink.href = projeto.link;
            
            if (projeto.tipoLink === "hospedado") {
                // Configuração para site hospedado
                elemLink.innerHTML = '<i class="bi bi-box-arrow-up-right me-2"></i> Ir para o site';
            } else {
                // Configuração padrão para repositórios Git
                elemLink.innerHTML = '<i class="bi bi-git me-2"></i> Abrir Repositório';
            }
        }
    // Links dos Autores
    const containerAutores = document.getElementById("project-authors");
    if (containerAutores) {
        containerAutores.innerHTML = "";
        projeto.autores.forEach((autor, index) => {
            const linkAutor = document.createElement("a");
            linkAutor.href = autor.link;
            linkAutor.target = "_blank";
            linkAutor.innerText = autor.nome;
            containerAutores.appendChild(linkAutor);
            
            if (index < projeto.autores.length - 1) {
                containerAutores.appendChild(document.createTextNode(", "));
            }
        });
    }
    
    // Status Badge
    const statusBadge = document.getElementById("project-status");
    if (statusBadge) {
        statusBadge.innerText = projeto.status;
        if(projeto.status.toLowerCase() === "concluído") {
            statusBadge.className = "badge bg-success-subtle text-muted border border-success-subtle text-uppercase font-monospace px-2 py-1";
        } else {
            statusBadge.className = "badge bg-warning-subtle text-muted border border-warning-subtle text-uppercase font-monospace px-2 py-1";
        }
    }
    
    // Ilumina a aba correspondente lá em cima
    document.querySelectorAll(".folder-tab").forEach((aba, idx) => {
        if (idx === indiceProjetoAtual) {
            aba.classList.add("active");
        } else {
            aba.classList.remove("active");
        }
    });
}

// Controladores de navegação
function próximoProjeto() {
    indiceProjetoAtual = (indiceProjetoAtual + 1) % dadosProjetos.length;
    atualizarInterfacePasta();
    reiniciarTemporizadorProjetos();
}
function projetoAnterior() {
    indiceProjetoAtual = (indiceProjetoAtual - 1 + dadosProjetos.length) % dadosProjetos.length;
    atualizarInterfacePasta();
    reiniciarTemporizadorProjetos();
}

function reiniciarTemporizadorProjetos() {
    clearInterval(intervaloProjetos);
    intervaloProjetos = setInterval(próximoProjeto, 20 * 1000); // 20 segundos cravados
}

// Inicializa os eventos assim que o documento carregar
document.addEventListener("DOMContentLoaded", () => {
    const btnPrev = document.getElementById("btn-prev-project");
    const btnNext = document.getElementById("btn-next-project");
    const abas = document.querySelectorAll(".folder-tab");

    // SISTEMA DE DESTAQUE: Identifica qual aba veio com 'active' do HTML
    abas.forEach((aba, idx) => {
        if (aba.classList.contains("active")) {
            indiceProjetoAtual = idx;
        }
    });

    if (btnPrev) btnPrev.addEventListener("click", projetoAnterior);
    if (btnNext) btnNext.addEventListener("click", próximoProjeto);

    abas.forEach((aba) => {
        aba.addEventListener("click", () => {
            indiceProjetoAtual = parseInt(aba.getAttribute("data-index"));
            atualizarInterfacePasta();
            reiniciarTemporizadorProjetos();
        });
    });

    // Inicia a interface na pasta de destaque escolhida e liga o autoplay
    atualizarInterfacePasta();
    reiniciarTemporizadorProjetos();
});
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".sobremim-layers-container");
    const fundo = document.querySelector(".layer-base-fundo");
    const krookodile = document.querySelector(".layer-krookodile");
    const eu = document.querySelector(".layer-eu");
    const mudkip = document.querySelector(".layer-mudkip");

    // Executa apenas se estiver no PC (telas maiores que 992px)
    if (window.innerWidth > 992 && container) {
        
        container.addEventListener("mousemove", (e) => {
            const rect = container.getBoundingClientRect();
            
            // Calcula a posição do mouse de -0.5 a 0.5 em relação ao centro do container
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            // 1. Inclina o container principal (Efeito de rotação 3D)
            // Multiplique por valores maiores se quiser que ele incline mais
            container.style.transform = `perspective(1000px) rotateX(${-y * 20}deg) rotateY(${x * 20}deg)`;

            // 2. Move as camadas internas em intensidades diferentes (Efeito Parallax)
            // Quanto maior o multiplicador, mais "perto" da tela o objeto parece estar
            fundo.style.transform = `translate(${x * 10}px, ${y * 10}px) scale(1.1)`; 
            krookodile.style.transform = `translate(${x * -15}px, ${y * -5}px)`;
            eu.style.transform = `translateX(calc(-50% + ${x * 20}px)) translateY(${y * 30}px)`;
            mudkip.style.transform = `translate(${x * 40}px, ${y * 20}px)`;
        });

        // Reseta a posição suavemente quando o mouse sai de cima do card
        container.addEventListener("mouseleave", () => {
            container.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
            fundo.style.transform = "translate(0px, 0px) scale(1)";
            krookodile.style.transform = "translate(0px, 0px)";
            eu.style.transform = "translateX(-50%) translateY(0px)";
            mudkip.style.transform = "translate(0px, 0px)";
        });
    }
});

// Scroll suave 
const menuLinks = document.querySelectorAll('.navegacao a[href^="#"], .iniciocontent a[href^="#"], #sobremimtxt a[href^="#"]');
function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}
function nativeScroll(getDistanceFromTheTop) {
    window.scroll({
        top : getDistanceFromTheTop,
        behavior : 'smooth',
    });
}
function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) + 10;
    nativeScroll(distanceFromTheTop);
}
menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
}
)

// ====== BOTÃO RETORNAR AO TOPO COM ÁUDIO ======
const btnTopo = document.getElementById('btn-topo');
const audioRezero = document.getElementById('audio-rezero');

// Monitora a rolagem para mostrar/esconder o botão dinamicamente
window.addEventListener('scroll', () => {
    // Se o usuário descer mais de 400 pixels, exibe o botão
    if (window.scrollY > 400) {
        btnTopo.classList.add('mostrar');
    } else {
        btnTopo.classList.remove('mostrar');
    }
});

// Evento de clique no botão
btnTopo.addEventListener('click', () => {
    // 1. Toca o efeito sonoro do Re:Zero
    if (audioRezero) {
        audioRezero.currentTime = 0.5; // começa no 0.5 segundos
        audioRezero.play().catch(error => {
            console.log("O navegador bloqueou o áudio até haver interação prévia:", error);
        });
    }

    // 2. Executa a rolagem suave para o topo absoluto (0)
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});

// ====== EFEITO DE CRIPTOGRAFIA DE TEXTO (HACKER EFFECT) ======
// Objeto global para armazenar os timers ativos de cada fita
const timersFitas = {
    "fita-texto-1": null,
    "fita-texto-2": null,
    "fita-texto-3": null
};
function aplicarEfeitoCripto(elementoId, textoFinalCompleto) {
    const elemento = document.getElementById(elementoId);
    if (!elemento) return;

    // >>> CORREÇÃO DO BUG: Se já existir um timer rodando nesta fita, limpa ele antes
    if (timersFitas[elementoId]) {
        clearInterval(timersFitas[elementoId]);
    }

    const caracteresCripto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%-+=*";
    let rodada = 0;

    // Armazena o novo intervalo no nosso objeto global
    timersFitas[elementoId] = setInterval(() => {
        elemento.innerText = textoFinalCompleto
            .split("")
            .map((letra, index) => {
                if (letra === " ") return " "; 
                if (index < rodada) return textoFinalCompleto[index]; 
                return caracteresCripto[Math.floor(Math.random() * caracteresCripto.length)]; 
            })
            .join("");

        if (rodada >= textoFinalCompleto.length) {
            clearInterval(timersFitas[elementoId]);
            timersFitas[elementoId] = null; // Limpa a referência ao terminar
        }
        rodada += 2; 
    }, 30);
}

// ====== FUNÇÃO PARA ATUALIZAR AS FITAS ======
function atualizarTextoDasFitas(nomeTecnologia) {
    const textoRepetido = `${nomeTecnologia} `.repeat(30).trim();

    aplicarEfeitoCripto("fita-texto-1", textoRepetido);
    aplicarEfeitoCripto("fita-texto-2", textoRepetido);
    aplicarEfeitoCripto("fita-texto-3", textoRepetido);

    const tecnologiaAtual = listaTecnologias.find(t => t.nome === nomeTecnologia);
    if (tecnologiaAtual) {
        document.querySelectorAll('.marquee-faixa').forEach(faixa => {
            faixa.style.setProperty('--ofa-color', tecnologiaAtual.cor);
        });
    }
}