var txtBoxSenha = document.getElementById("senha");
var tamanho = document.getElementById("tamanho");
var maiusculas = document.getElementById("maiusculas");
var minusculas = document.getElementById("minusculas");
var simbolos = document.getElementById("simbolos");
var numeros = document.getElementById("numeros");

function Copiar()
{
    txtBoxSenha.select();
    document.execCommand('copy');
}

function GerarSenha()
{
    var senha = "";

    if(maiusculas.checked)
        senha += GerarLetrasAleatorias(tamanho.value, true);

    if(minusculas.checked)
        senha += GerarLetrasAleatorias(tamanho.value);
    
    if(simbolos.checked)
        senha += GerarSimbolosAleatorios(tamanho.value);

    if(numeros.checked)
        senha += GerarNumerosAleatorios(tamanho.value);

    senha = senha.shuffle();
    senha = senha.substring(0, tamanho.value);

    txtBoxSenha.value = senha;
}

String.prototype.shuffle = function () 
{
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

function GerarNumeroAleatorio(min, max)
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function GerarNumerosAleatorios(qtd)
{
    var senha = "";
    for(var i = 0; i < qtd; i++)
    {
        var numAleatorio = GerarNumeroAleatorio(48, 57);
        senha += String.fromCharCode(numAleatorio);
    }
    return senha;
}

function GerarLetrasAleatorias(qtd , upcase = false)
{
    var senha = "";
    for(var i = 0; i < qtd; i++)
    {
        var numAleatorio = GerarNumeroAleatorio(97, 122);
        senha += String.fromCharCode(numAleatorio);
    }

    if(upcase)
        senha = senha.toUpperCase();

    return senha;
}

function GerarSimbolosAleatorios(qtd)
{
    var senha = "";
    for(var i = 0; i < qtd; i++)
    {
        var numAleatorio = GerarNumeroAleatorio(33, 126);

        if( (numAleatorio > 47 && numAleatorio < 58) ||
            (numAleatorio > 64 && numAleatorio < 91) ||
            (numAleatorio > 97 && numAleatorio < 122) )
            i--;
        else
            senha += String.fromCharCode(numAleatorio);
    }

    return senha;
}

