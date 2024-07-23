<h1>Bookcase Virtual</h1>
<p>API feita para uma "estante de livros", uma biblioteca local com dificuldades em ordenar e filtrar seus livros, então foi feita está API, na qual permite que o usuario possa criar, deletar, editar e filtrar livros por genero e/ou titulo do livro. Leitores iniciantes podem se encontrar em apuros verificar a disponibilidade de livros ou acessar informações sobre livros remotamente</p>

<h2>Como usar:</h2>
<p>1. Ao clonar este repositorio em sua maquina, lembre-se de baixar as dependecias do projeto a partir do seu terminal, utilizando o comando "npm install".</p>
<p>2. Após instalar as dependecias do projeto, você já pode testar as rotas criadas utilizando alguma ferramenta de teste de APIs como postman, insmonia, thunder client, entre outros.</p>

<h2>Rotas:</h2>
<p>1. Foram criadas algumas rotas, uma para criar o livro(post), uma pra deletar o livro(delete), outra para buscar todos os livros(get All) e mais duas rotas get, uma sendo para filtrar livros por genero e outro get para buscar o livro pelo seu titulo<p>
  
![Captura de tela 2024-07-21 194226](https://github.com/user-attachments/assets/73de0257-982c-46aa-8066-9a550b48bcc8)

<h2>Testando as rotas</h2>
<h3>POST</h3>
POST /book: Cria um novo livro com os dados fornecidos no corpo da requisição.
Ao passar os parâmetros: title, author, pag, genre, no corpo da requisição(body), ao pressionar SEND, irá retornar o novo livro criado.

![Captura de tela 2024-07-21 201010](https://github.com/user-attachments/assets/a89e1705-3ee1-462e-a19c-91a56d03e162)

<h3>DELETE</h3>
<p>DELETE /book/: Remove um livro com base no ID fornecido na URL.</p>
<p>Parâmetros: id (na URL).</p>
<p>Resposta: Retorna o livro removido.</p>

![image](https://github.com/user-attachments/assets/1f8c875e-23c3-448e-835d-8cecd605d216)

<h3>PUT</h3>
<p>PUT /book/edit/: Atualiza os detalhes de um livro existente com base no ID fornecido na URL.</p>
<p>Alterei algumas informações de um livro já existente e irei editar colocando as informações corretas.</p>

![image](https://github.com/user-attachments/assets/d0a4ad41-539c-46d4-ae5a-3ec420828965)

<p>Parâmetros: id (na URL), title, author, pag, genre (no corpo da requisição).</p>
<p>Resposta: Retorna o livro atualizado.</p>

![image](https://github.com/user-attachments/assets/1c8f5838-532e-48d1-bae0-43a7b74084da)

<p>Os dados agora foram alterados pelos dados corretos</p>

![image](https://github.com/user-attachments/assets/82eda587-d2b7-463e-bc67-30652b6ff0d6)

<h3>GET ALL</h3>
<p>GET /book: Retorna uma lista de todos os livros disponíveis no sistema.</p>
<p>Resposta: Retorna a lista de todos os livros.</p>

![image](https://github.com/user-attachments/assets/c3f063e0-ae8b-4341-afcf-2da68cbd40dd)

<h3>GET SEARCH TITlE</h3>
<p>GET /book/title:</p>

<p>Descrição: Busca um livro específico pelo título fornecido na query string.</p>
<p>Parâmetros: title (na query string).</p>
<p>Resposta: Retorna o livro encontrado.</p>

![image](https://github.com/user-attachments/assets/3bddcf4b-d856-4b5d-a3fd-585fc7a6d9b0)

<h3>GET SEARCH GENRE</h3>
<p>GET /book/genre/</p>

<p>Descrição: Filtra livros com base no gênero fornecido na URL.</p>
<p>Parâmetros: genreBook (na URL).</p>
<p>Resposta: Retorna uma lista de livros que correspondem ao gênero ou uma mensagem de erro se não houver livros desse gênero.</p>

![image](https://github.com/user-attachments/assets/942d6aa0-161e-42a5-94e8-0857812c0b34)
