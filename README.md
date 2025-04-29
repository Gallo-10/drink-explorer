# 🍸 Drink Explorer

Aplicação desenvolvida em Vue 3 que consome a [TheCocktailDB API](https://www.thecocktaildb.com/api.php) para explorar diferentes drinks, visualizando informações como nome, imagem, ingredientes e modo de preparo.  
O projeto permite filtrar drinks por letra, nome, categoria e também favoritar drinks com persistência de estado usando Pinia.

---

## ✨ Funcionalidades

- **Filtro alfabético (A-Z)**: clique em uma letra e veja todos os drinks que começam com ela.
- **Busca por nome**: campo de busca com debounce para evitar chamadas excessivas à API.
- **Categorias de drinks**: exibe botões de categorias e filtra drinks por categoria selecionada.
- **Favoritar drinks**: o usuário pode favoritar drinks e visualizá-los separadamente.
- **Página de detalhes**: ao clicar em um drink, uma página detalhada exibe:
  - Imagem do drink
  - Nome
  - Ingredientes e medidas
  - Instruções de preparo
- **Gerenciamento de estado com Pinia**: favoritos são armazenados globalmente com reatividade.
- **Estilização com SCSS**: estilos organizados e reutilizáveis com uso de nesting e variáveis.
- **Responsivo**: design adaptado para desktop e mobile.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| [Vue 3](https://vuejs.org/) | Framework JavaScript progressivo |
| [Vite](https://vitejs.dev/) | Bundler rápido para desenvolvimento |
| [Pinia](https://pinia.vuejs.org/) | Gerenciador de estado oficial do Vue 3 |
| [SCSS](https://sass-lang.com/) | Pré-processador de CSS |
| [Lucide Icons](https://lucide.dev/) | Biblioteca leve de ícones em SVG para Vue |
| [TheCocktailDB API](https://www.thecocktaildb.com/api.php) | API pública com dados de drinks |

---


## 📌 Decisões de Arquitetura

- Utilizei **Pinia** em vez de Vuex por ser mais moderno, leve e totalmente compatível com o `setup script`.
- Usei **debounce manual** para a busca por nome, evitando chamadas excessivas à API e melhorando performance.
- Separei cada responsabilidade em diretórios claros (`api`, `stores`, `views`, etc.), seguindo boas práticas de organização.
- Componentes como **DrinkCard**, **AlphabetFilter** e **DrinkDetailView** foram criados pensando em reutilização e clareza.
- Os favoritos foram implementados com base no **ID do drink**, utilizando a função `toggleFavorite` para alternar estados entre favoritado e não favoritado.


## Como rodar o projeto localmente

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/drink-explorer.git
cd drink-explorer

# 2. Instale as dependências
npm install

# 3. Rode o projeto
npm run dev
