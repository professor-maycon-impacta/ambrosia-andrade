// Definindo a classe
var Saudacao = /** @class */ (function () {
    function Saudacao() {
    }
    // Método/Função dentro da classe
    Saudacao.prototype.saudacao = function () {
        console.log("Olá mundo a partir do POO TS!");
    };
    return Saudacao;
}());
// A instância da classe acima
var obj = new Saudacao();
// Fazer uso, agora do objeto criado a partir da instância acima
obj.saudacao();
