function consultaCep(){
    $(".barra-progresso").show();//mostra o elemento
    var cep = document.getElementById("cep").value;
    console.log(cep);
    var url = "http://viacep.com.br/ws/" + cep + "/json";
    console.log(url);
    $.ajax({ //requisição Ajax utilizando a bibioteca jQuery
        url: url,
        type:"GET", // tipo de requisição
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP: " + response.cep);
            $(".cep").show(); //mostra o elemento
            $(".barra-progresso").hide();//esconde o elemento
            
            
        }
    })

}
$(function(){ // para esconder um elemento inteiro
    $(".cep").hide();
    $(".barra-progresso").hide();
});