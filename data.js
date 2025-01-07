// Função para exibir a data
function mostrarData() {
    const elementoData = document.getElementById("data");
  
    // Obter a data atual
    const dataAtual = new Date();
  
    // Formatar a data
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  
    const diaSemana = diasDaSemana[dataAtual.getDay()];
    const dia = dataAtual.getDate();
    const mes = meses[dataAtual.getMonth()];
    const ano = dataAtual.getFullYear();
  
    // Criar o texto formatado
    const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
  
    // Inserir a data no HTML
    elementoData.textContent = dataFormatada;
  }
  
  // Chamar a função ao carregar a página
  mostrarData();
  