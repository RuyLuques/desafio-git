function calcularRanqueadas(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let nivel = '';

    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    return { saldo, nivel };
}

function getElement(id) {
    return document.getElementById(id);
}

getElement('ranked-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const vitorias = parseInt(getElement('vitorias').value);
    const derrotas = parseInt(getElement('derrotas').value);

    const { saldo, nivel } = calcularRanqueadas(vitorias, derrotas);
    
    getElement('resultado').innerText = `O Herói tem de saldo de ${saldo} e está no nível de ${nivel}.`;
});
