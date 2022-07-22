# Projeto Test Técnico VIVO :iphone:

## Contexto :selfie:

Neste projeto, foi desenvolvido uma API em Nodejs Express, utilizando banco de dados MySql com o pacote `sequelize`:
 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criar 
 - Fazer um `CRUD` com o `ORM`

## Etapas de desenvolvimento do projeto

### Metodologia ágil:
- Criação do Trello como suporte para gerenciamento das tarefas a serem executadas.
![Trello](/images/trello.png)

### Pensamento e criação de entidades:
- Utilização do `https://excalidraw.com/` para desenhar as entidades e relacionamento.
![Excalidraw](/images/excalidraw.png)
![Diagrama](/images/diagrama.png)

## Executando aplicação

1. Clone o repositório
  * `git clone git@github.com:LucasAccurcio/processo-seletivo-vivo.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd processo-seletivo-vivo`

2. Instalando os pacotes necessários:
  - `npm install`

3. Altere o arquivo .env-example para .env
  * Altere os dados de usuário conforme os dados do MySql instalado em sua máquina.

4. Inicialize o servidor de banco de dados MySQL:
  - **Na própria máquina:**
    * Certifique-se que o servidor MySQL esteja rodando com o comando:
      `sudo systemctl status mysql`
    - Para iniciar o serviço:
      `sudo systemctl start mysql`
    
  - **Através do Docker**
    * Certifique-se que já tenha o Docker instalado em sua máquina.
      - Inicie um container com a imagem do MySQL:
        * `docker container run --name case_vivo -e MYSQL_ROOT_PASSWORD=suasenha -d -p 3306:3306 mysql:5`
        * `docker exec -it case_vivo bash`
         
        * `Não se esqueça de alterar o arquivo .env` :blush:
        * `MYSQL_USER=root`
        * `MYSQL_PASSWORD=suasenha`
        

5. Inicializando a API:
  - `npm run restore` para criar o banco de dados, tabelas, associações e povar com alguns dados.
  - `npm start` ou `npm run debug`

6. Abra o navegador e acesse a rota:
  * GET `http://localhost:3001/clientes`
  
   - Deverá exibir os clientes cadastrados
 
  * Siga para rota POST /cliente e cadastre um usuário.
  
    - POST `http://localhost:3001/cliente` 
   
    - `body: { "nome": "Ferreira", "documento": "1234567869" }`

  3. Rotas disponíveis:
  - GET `http://localhost:3001/cliente`
  - GET `http://localhost:3001/cliente/1`
  - GET `http://localhost:3001/cliente/1/info`
  - POST `http://localhost:3001/cliente`
  - PUT `http://localhost:3001/cliente/1`
  - DELETE `http://localhost:3001/cliente/1`

## Executando os testes

 - Para apenas execução dos testes: `npm test`

 - Para execução dos testes mais relatório de cobertura: `num run test:coverage`
