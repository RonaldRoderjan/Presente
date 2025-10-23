==================================
      Refúgio Estrelado 🌟
   Um Presente Digital Imersivo
==================================

Um presente digital interativo e imersivo com tema de galáxia. Este projeto é uma aplicação web de página única (SPA), totalmente front-end, criada como uma experiência pessoal e afetuosa.

O usuário é recebido com uma tela de entrada e, ao tocar, é levado a um "céu" onde pode interagir com diferentes "estrelas". Cada estrela abre um modal com um conteúdo diferente: uma galeria de fotos, uma carta animada, uma lista de qualidades e uma mensagem de áudio final.

O projeto é focado em dispositivos móveis (`mobile-first`) e foi projetado para ser uma experiência de tela cheia.

---

### ✨ Funcionalidades

O "Refúgio Estrelado" é composto por uma tela principal e quatro seções interativas (modais):

* **🌌 Tela Principal (A Constelação):**
    * Ambiente imersivo com fundo estrelado e animado.
    * Música de fundo que começa com a interação do usuário.
    * Quatro estrelas interativas que servem como menu de navegação.

* **📸 Constelação Beleza (Galeria de Fotos):**
    * Um modal que exibe uma galeria de fotos no formato "Polaroid".
    * Cada polaroid pode ser "virada" (com clique ou foco) para revelar uma legenda ou descrição no verso.

* **📜 Nebulosa das Palavras (Carta Animada):**
    * Apresenta uma carta pessoal que é "digitada" em tempo real na tela, utilizando a biblioteca `Typed.js`.

* **🌠 Cometa dos Elogios (Qualidades):**
    * Uma seção interativa onde o usuário clica em uma qualidade (ex: "Seu Sorriso") e uma descrição correspondente aparece ao lado.

* **🎧 Estrela Guia (Mensagem de Áudio):**
    * A estrela final que abre um modal, pausa a música de fundo e toca uma mensagem de áudio principal e dedicada (o "áudio-niver.mp3").

---

### 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica do site.
* **CSS3:** Estilização completa, incluindo:
    * Design Mobile-First e Responsivo.
    * Animações (`@keyframes` para estrelas e poeira cósmica).
    * Flexbox e Grid (nos layouts dos modais).
    * Efeitos de `backdrop-filter` (blur) e gradientes.
* **JavaScript (ES6+):**
    * Manipulação do DOM para controlar a lógica de telas e modais.
    * Controle dos elementos de áudio (`play()`, `pause()`, `volume`).
    * Lógica de eventos para toda a interatividade.
* **Typed.js:** Biblioteca externa para o efeito de "máquina de escrever" na carta.

---

### 🚀 Como Visualizar

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/seu-usuario/refugio-estrelado.git](https://github.com/seu-usuario/refugio-estrelado.git)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd refugio-estrelado
    ```
3.  Abra o arquivo `index.html` no seu navegador.

    * **Recomendação:** Para que a música de fundo (`bg-music`) funcione corretamente (devido às políticas de *autoplay* dos navegadores), é melhor visualizar o projeto através de um servidor local. Se você usa o VS Code, pode usar a extensão "Live Server".

---

### 🎨 Como Personalizar (Para o Desenvolvedor)

Este projeto foi feito para ser facilmente personalizado. Para alterar o conteúdo para outra pessoa:

* **Música e Áudio:** Substitua os arquivos `musica.mp3` e `audio-niver.mp3` na pasta `assets/audio/`.
* **Fotos da Galeria:**
    * Adicione suas fotos na pasta `assets/images/`.
    * Em `index.html`, edite as seções `.polaroid` dentro de `#modal-memories`. Altere o `src` da `<img>` e os textos em `.polaroid-front` e `.polaroid-back`.
* **Carta Animada:**
    * Em `script.js`, edite a variável `suaCarta` dentro do evento de clique de `starWords`. (Lembre-se que `\n` pula uma linha e `^500` é uma pausa de 500ms).
* **Elogios:**
    * Em `index.html`, dentro de `#modal-compliments`, edite os textos dos `<li>` e o conteúdo de seus atributos `data-description`.

