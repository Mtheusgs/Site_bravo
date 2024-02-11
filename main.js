var textos = [
    "Fornecer a melhor experiência de usuário a seus clientes por meio de hardware, software e serviços inovadores.",
    "Acreditamos que estamos na face da terra para fazer ótimos produtos e isso não vai mudar. Estamos aqui para fazer os melhores produtos do mundo e deixar o mundo melhor do que o encontramos.",
    "Ouvir e relaciona de maneira amigável com o cliente pra tornar tudo amigável, auxiliando no aprendizado."
  ];

  var titulos = ["Missão", "Visão", "Valores"];

  var indiceAtual = 0;

  function mudarTextoETitulo() {
    
    document.getElementById("textoMudavel").style.opacity = 0;
    document.getElementById("mudarTitulo").style.opacity = 0;

    setTimeout(function() {
      
      document.getElementById("textoMudavel").textContent = textos[indiceAtual];
      document.getElementById("mudarTitulo").textContent = titulos[indiceAtual];

      

      
      indiceAtual = (indiceAtual + 1) % textos.length;

      
      document.getElementById("textoMudavel").style.opacity = 1;
      document.getElementById("mudarTitulo").style.opacity = 1;
    }, 500); // 500ms = tempo da transição
  }

  
  mudarTextoETitulo();

  
  setInterval(mudarTextoETitulo, 4000); 


function exibirDataAtual() {
    
    var data = new Date();

    
    var dia = data.getDate();
    var mes = data.getMonth() + 1; 
    var ano = data.getFullYear();

    
    var dataFormatada = dia + '/' + mes + '/' + ano;

    
    document.getElementById('dataAtual').textContent =dataFormatada;
  }

  
  exibirDataAtual();
