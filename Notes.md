Fundamentos

JSON
API
REST
URL
TIPOS DE DADOS
HTTP Status Code


https://api.myapi.com/users/32?posts=true

https:// = protocolo
api = subdominio
myapi.com = dominio
/users = recurso
32 = parametro de rota
?posts=true == parametro de busca(search/query param)

GET = localhost:3333/users/1/posts
POST = localhost:3333/users/1/posts
PUT = localhost:3333/posts/1
PATCH = localhost:3333/posts/1/title
DELETE = localhost:3333/posts/1
HEAD = localhost:3333/posts/1


Tipos de dados GET localhost:3333/users/1/posts?search=node POSt localhost:3333/users Route Param => Identificação de RECURSOS (obrigatório) Request Body => Dados para criação/atualização de um recurso (obrigatórios ou opcionais) Search/Query Param => Modificar/filtrar resultados (busca/paginação/ordenação) (NÃO SÃO OBRIGATÓRIOS) POST/PUT/PATCH Headers (Cabeçalhos) Metadados => Informações adicionais que não alteram o resultado/funcionamento


Node

npm init -y
npm i fastify

npm i typescript @types/node -D
npx tsc --init 

npm i pino-pretty

Sempre retornar em Objeto

--------
Ferramenta de instalação

- Docker
  


