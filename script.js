console.log("Refúgio Estrelado SCRIPT CARREGADO!");

document.addEventListener('DOMContentLoaded', () => {

     // --- Seletores de Elementos ---
    const entryScreen = document.getElementById('entry-screen');
    const mainScreen = document.getElementById('main-screen');
    const starDustOverlay = document.getElementById('star-dust-overlay');
    
    // Áudio
    const bgMusic = document.getElementById('bg-music');
    const finalAudio = document.getElementById('final-audio');
    
    // Modais
    const modals = document.querySelectorAll('.modal');
    const modalMemories = document.getElementById('modal-memories');
    const modalWords = document.getElementById('modal-words');
    const modalCompliments = document.getElementById('modal-compliments');
    const modalGuide = document.getElementById('modal-guide');
    
    // Botões (Estrelas)
    const starMemories = document.getElementById('star-memories');
    const starWords = document.getElementById('star-words');
    const starCompliments = document.getElementById('star-compliments');
    const starGuide = document.getElementById('star-guide');
    
    // Botões (Fechar)
    const closeButtons = document.querySelectorAll('.close-modal-btn');
    const resetAudioBtn = document.getElementById('reset-audio-btn');

    // Elogios
    const complimentItems = document.querySelectorAll('.compliments-list li');
    const complimentDescriptionBox = document.getElementById('compliment-description-box');

    // Variável de estado para o Typed.js
    let typedInstance = null;

    // --- 4.1. Lógica da Tela de Entrada ---
    function startExperience() {
        // Inicia a música de fundo (necessário gesto do usuário no iOS/Chrome)
        bgMusic.play().catch(e => console.error("Erro ao tocar música:", e));

        // Some com a tela de entrada
        entryScreen.style.opacity = '0';
        starDustOverlay.style.opacity = '0'; // Some com a poeira tbm
        
        setTimeout(() => {
            entryScreen.style.display = 'none';
            starDustOverlay.style.display = 'none';
            
            // Mostra a tela principal
            mainScreen.classList.add('visible');
        }, 1000); // 1s = tempo da transição do CSS
    }

    document.addEventListener('click', startExperience, { once: true });


    // --- 4.3. Lógica dos Modais (Abrir/Fechar) ---

    function showModal(modal) {
        modal.classList.add('visible');
        document.body.classList.add('modal-open'); // Para o efeito blur
    }

    function closeModal(modal) {
        modal.classList.remove('visible');
        document.body.classList.remove('modal-open');
    }

    // Eventos para ABRIR modais
    starMemories.addEventListener('click', () => showModal(modalMemories));
    
    starCompliments.addEventListener('click', () => showModal(modalCompliments));

    // Eventos para FECHAR modais
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalToClose = button.closest('.modal');
            closeModal(modalToClose);
        });
    });

    // --- 4.3.2. Lógica Específica: Nebulosa das Palavras (Typed.js) ---
    starWords.addEventListener('click', () => {
        showModal(modalWords);
        
        // Destrói instância anterior se existir
        if (typedInstance) {
            typedInstance.destroy();
        }

        // --- SUBSTITUA COM SUA CARTA ---
        const suaCarta = `Minha gatinha,^500\n\nPARABÉNSSSS!!!!! Chegou o dia mais importante do mundooooo, e eu espero que ele seja maravilhoso do jeitinho que você merece, meu amor! Que você aproveite muitoooo com as pessoas que você ama, que sinta o quanto é amada por todo mundo e o quanto você é especial pra todo mundo. Que você continue sempre sendo essa menininha incrível que ilumina não só a minha vida, mas a de todo mundo que te tem por perto! Aproveita muitooo a sua semana, minha princesa, e esperoooo que tenha gostado dos presentinhos e da nossa jantaaa! EU TE AMOOOOOOOOO MUITOOOOO PRA SEMPRE! FELIZ ANIVERSÁRIO, GATINHA!!! 🎉❤️🎂.\n\n...^1000 Com todo o meu amor,\nSeu gatinho.`;
        // ^500 = pausa de 500ms
        // \n = quebra de linha

        typedInstance = new Typed('#letter-text', {
            strings: [suaCarta],
            typeSpeed: 40,
            backSpeed: 10,
            startDelay: 500,
            loop: false,
            showCursor: true,
            cursorChar: '_',
        });
    });

    // Para o Typed.js ao fechar o modal
    modalWords.querySelector('.close-modal-btn').addEventListener('click', () => {
        if (typedInstance) {
            typedInstance.stop();
        }
    });

    // --- 4.3.3. Lógica Específica: Cometa dos Elogios ---
    complimentItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove a classe ativa de todos
            complimentItems.forEach(i => i.classList.remove('active'));
            
            // Adiciona a classe ativa no clicado
            item.classList.add('active');
            
            // Pega a descrição do atributo data-
            const description = item.getAttribute('data-description');
            
            // Atualiza a caixa de descrição
            complimentDescriptionBox.innerHTML = `<p>${description}</p>`;
        });
    });

    // --- 4.3.4. Lógica Específica: Estrela Guia (Áudio Final) ---
    function playFinalAudio() {
        // Pausa a música de fundo
        bgMusic.volume = 0; // Fade out suave (melhor com CSS/JS mais complexo, mas 0 é ok)
        bgMusic.pause();

        showModal(modalGuide);

        // Toca o áudio final
        finalAudio.currentTime = 0;
        finalAudio.play();
    }

    function resetFinalAudio() {
        // Para o áudio final
        finalAudio.pause();
        finalAudio.currentTime = 0;
        
        // Retoma a música de fundo
        bgMusic.play();
        bgMusic.volume = 1;

        closeModal(modalGuide);
    }

    starGuide.addEventListener('click', playFinalAudio);
    resetAudioBtn.addEventListener('click', resetFinalAudio);

    // 4.3.1 - Lógica de Flip da Polaroid (Simples)
    // O CSS :focus já cuida disso no toque/tab. 
    // Se precisar de clique em desktop:
    document.querySelectorAll('.polaroid').forEach(card => {
        card.addEventListener('click', () => {
            if (document.activeElement === card) {
                card.blur(); // Permite "desvirar"
            } else {
                card.focus(); // Ativa o :focus do CSS
            }
        });
    });

});