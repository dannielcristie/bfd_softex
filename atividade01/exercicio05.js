// 5. Crie uma função que converta temperaturas de Celsius para Fahrenheit e
// vice-versa, com base em um objeto de entrada.
// Celsius para Fahrenheit ::valor: temp.valor * 1.8 + 32​
// Fahrenheit para Celsius::valor: (temp.valor - 32) / 1.8
// Dica: Retorne o valor convertido com a nova escala.

const converterTemperatura = (temp) => {
    if (temp.escala.toLowerCase() === "celsius") {
        return {
            valor: temp.valor * 1.8 + 32,
            escala: "Fahrenheit"
        };
    } else if (temp.escala.toLowerCase() === "fahrenheit") {
        return {
            valor: (temp.valor - 32) / 1.8,
            escala: "Celsius"
        };
    } else {
        return "Escala de temperatura inválida.";
    }
};

console.log(converterTemperatura({ valor: 25, escala: "Celsius" }));
console.log(converterTemperatura({ valor: 77, escala: "Fahrenheit" }));
