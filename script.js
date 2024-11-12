async function converterMoeda() {
    const valor = parseFloat(document.getElementById('valor').value);
    const moeda = document.getElementById('moeda').value;
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(valor)) {
        resultadoDiv.innerText = "Por favor, insira um valor válido.";
        return;
    }

    try {
        const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");
        const data = await response.json();
        const cotacao = parseFloat(data.USDBRL.bid);

        let resultado;

        if (moeda === "USD") {
            resultado = valor * cotacao;
            resultadoDiv.innerText = `Valor em Reais: R$ ${resultado.toFixed(2)}`;
        } else {
            resultado = valor / cotacao;
            resultadoDiv.innerText = `Valor em Dólares: $ ${resultado.toFixed(2)}`;
        }
    } catch (error) {
        resultadoDiv.innerText = "Erro ao obter a cotação. Tente novamente.";
    }
}
