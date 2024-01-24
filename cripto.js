function removerAcentosECaracteresEspeciais(palavra) {
    return palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z ]/g, ''); // Adicionando espaço na expressão regular
}

function criptografar() {
    const originalInput = document.getElementById('original');
    const resultadoElement = document.getElementById('resultado');

    const palavraOriginal = removerAcentosECaracteresEspeciais(originalInput.value.trim().toLowerCase());
    
    if (palavraOriginal !== '') {
        const palavraCriptografada = criptografarPalavra(palavraOriginal);
        resultadoElement.innerText = `${palavraCriptografada}`;
    } else {
        console.log('O campo de entrada está vazio. Nenhuma criptografia será realizada.');
    }
}

function descriptografar() {
    const originalInput = document.getElementById('original');
    const resultadoElement = document.getElementById('resultado');

    const palavraCriptografada = removerAcentosECaracteresEspeciais(originalInput.value.trim().toLowerCase());

    if (palavraCriptografada !== '') {
        const palavraOriginal = descriptografarPalavra(palavraCriptografada);
        resultadoElement.innerText = `${palavraOriginal}`;
    } else {
        console.log('O campo de entrada está vazio. Nenhuma descriptografia será realizada.');
    }
}


function apagarResultado() {
    document.getElementById('resultado').innerText = '';
    document.getElementById('original').value = '';
}


function criptografarPalavra(palavra) {
    return palavra
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function descriptografarPalavra(palavraCriptografada) {
    return palavraCriptografada
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

const copiar = async () => {
    try {

        let text = document.getElementById('resultado').innerText;

        await navigator.clipboard.writeText(text);

        console.log('Conteúdo copiado');
    } catch (err) {
        console.error('Falha ao copiar: ', err);
    }
}