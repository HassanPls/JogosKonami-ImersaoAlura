// Seleciona a seção onde os resultados da pesquisa serão exibidos
const sectionResultadosPesquisa = document.getElementById("resultados-pesquisa");

// Inicializa uma string vazia para armazenar os resultados da pesquisa
let resultados = "";

// Armazena o valor anterior da pesquisa para otimizar a função
let valueInputPesquisa;

// Inicializa variáveis para armazenar o título e a descrição do elemento atual durante a iteração
let titulo = "";
let descricao = "";

// Função para realizar a pesquisa
function pesquisar() {
  // Obtém o valor atual do campo de pesquisa e o converte para minúsculas
  if (valueInputPesquisa != document.getElementById("input-pesquisa").value.toLowerCase()) {
    valueInputPesquisa = document.getElementById("input-pesquisa").value.toLowerCase();

    // Limpa os resultados anteriores
    resultados = "";

    // Itera sobre cada elemento dos dados
    for (let i = 0; i < dados.length; i++) {
      const elemento = dados[i];
      // Converte o título e a descrição para minúsculas para facilitar a comparação
      titulo = elemento.titulo.toLowerCase();
      descricao = elemento.descricao.toLowerCase();

      // Verifica se a palavra-chave está presente no título ou descrição
      if (titulo.includes(valueInputPesquisa) || descricao.includes(valueInputPesquisa)) {
        // Adiciona o resultado aos resultados da pesquisa
        resultados += `
          <div class="item-resultado">
            <h2>${elemento.titulo}</h2>
            <p class="descricao-meta">${elemento.descricao}</p>
            <a href="${elemento.link}" target="_blank" rel="noopener">Mais informações</a>
          </div>
        `;
      }
    }

    // Exibe os resultados ou uma mensagem de "nenhum resultado encontrado"
    sectionResultadosPesquisa.innerHTML = resultados || "Nada foi encontrado";
  }
}