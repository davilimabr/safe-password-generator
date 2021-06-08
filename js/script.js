$.getScript("js/SenhaAleatoria.js");

$("#gerarSenha").click(function()
{
    var geradorSenha = new SenhaAleatoria();

    opts = {
        "maiusculas" : $('#maiusculas').is(':checked'),
        "minusculas" : $("#minusculas").is(':checked'),
        "simbolos"   : $("#simbolos").is(':checked'),
        "numeros"    : $("#numeros").is(':checked')
    };
    
    geradorSenha.GerarSenha($("#tamanho").val(), opts);

    $("#senha").val(geradorSenha.Senha);
    
    var progressBar;
    switch(geradorSenha.ForcaSenha)
    {
        case 0:
        case 1:
            progressBar = getProgressBar("bg-danger", 1 * 100 / 4);
            break;
        case 2:
            progressBar = getProgressBar("bg-warning", 2 * 100 / 4);
            break;
        case 3:
            progressBar = getProgressBar("bg-info", 3 * 100 / 4);
            break;
        case 4:
            progressBar = getProgressBar("bg-success", 4 * 100 / 4);
            break;
    }
    $("#progressbar").html(progressBar);
});

$("#copiar").click(function()
{
    $("#senha").select();
    document.execCommand('copy');
});

function getProgressBar(estilo, porcento)
{
    return  `<div class=\"progress\">
                <div class=\"progress-bar ${estilo}\" role=\"progressbar\" style=\"width: ${porcento}%\">Força da Senha</div>
            </div>`;
}
