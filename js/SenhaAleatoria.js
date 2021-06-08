class SenhaAleatoria
{
    constructor()
    {
        this.Senha;
        this.ForcaSenha;
    }

    GerarSenha(tamanho, opts)
    {
        var senha = "";
        if(opts["maiusculas"])
            senha += this.GerarLetrasAleatorias(tamanho, true);

        if(opts["minusculas"])
            senha += this.GerarLetrasAleatorias(tamanho);
        
        if(opts["simbolos"])
            senha += this.GerarSimbolosAleatorios(tamanho);

        if(opts["numeros"])
            senha += this.GerarNumerosAleatorios(tamanho);

        senha = senha.shuffle();
        senha = senha.substring(0, tamanho);

        this.Senha = senha;
        this.VerificarForcaSenha();
    }

    VerificarForcaSenha()
    {
        var resultado = zxcvbn(this.Senha);

        this.ForcaSenha = resultado['score'];
    }

    GerarNumeroAleatorio(min, max)
    {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    }

    GerarNumerosAleatorios(qtd)
    {
        var senha = "";
        for(var i = 0; i < qtd; i++)
        {
            var numAleatorio = this.GerarNumeroAleatorio(48, 57);
            senha += String.fromCharCode(numAleatorio);
        }
        return senha;
    }

    GerarLetrasAleatorias(qtd , upcase = false)
    {
        var senha = "";
        for(var i = 0; i < qtd; i++)
        {
            var numAleatorio = this.GerarNumeroAleatorio(97, 122);
            senha += String.fromCharCode(numAleatorio);
        }

        if(upcase)
            senha = senha.toUpperCase();

        return senha;
    }

    GerarSimbolosAleatorios(qtd)
    {
        var senha = "";
        for(var i = 0; i < qtd; i++)
        {
            var numAleatorio = this.GerarNumeroAleatorio(33, 126);

            if( (numAleatorio > 47 && numAleatorio < 58) ||
                (numAleatorio > 64 && numAleatorio < 91) ||
                (numAleatorio > 97 && numAleatorio < 122) )
                i--;
            else
                senha += String.fromCharCode(numAleatorio);
        }

        return senha;
    }
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