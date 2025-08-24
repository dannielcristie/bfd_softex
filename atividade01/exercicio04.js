// 4. Implemente uma função calculadora(a, b, operação) que realiza as
// operações +, -, * e /.

const calculadora = (a, b, operacao)=>{
    switch(operacao){
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Divisão por zero não é permitida.";
            } 
            return a / b;
        default:
            return "Operação inválida";
    };
};

console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 5, "-"));
console.log(calculadora(10, 5, "*"));
console.log(calculadora(10, 5, "/"));
console.log(calculadora(10, 0, "/")); 