# Como usar o projeto

## Requisitos

### SO
- Windows 10; 
- Linux Ubuntu; 
- Mac OS Sierra;
    - Não testei com outros SOs;

### Devops
- Docker
    - Version 2.0.0.3 (31259)
    - Channel: stable
    - 858db33c8
    - Engine: 18.09.2
    - Compose: 1.23.2
    - Machine: 0.16.1
    - Kubernetes: v1.10.11

### Modo produção

- 1. Com o docker iniciado, no terminal, digitar: ```docker-compose up -d```;

### Modo desenvolvimento

No terminal:
- 1. executar ```npm i``` para instalar as dependências;
- 2. executar ```npm run dev``` para iniciar a aplicação;

### Modo teste

- 1. executar ```npm run test``` para rodar os testes unitários;

### Usando a aplicação

- O endpoint para retornar os dados das pessoas é: [http://0.0.0.0:8080/api/people]
    - O método para buscar os dados é por ```GET```, sem necessidade de passar nenum parâmetro ou querystring;

#### Resultado
O resultado esperado por navegador ou por POSTMAN é um json da seguinte forma:
``` json
[
    {
        "name": "Nicholas Runolfsdottir V",
        "website": "jacynthe.com",
        "email": "Sherwood@rosamond.me",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "name": "Ervin Howell",
        "website": "anastasia.net",
        "email": "Shanna@melissa.tv",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "name": "Clementina DuBuque",
        "website": "ambrose.net",
        "email": "Rey.Padberg@karina.biz",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    },
    {
        "name": "Kurtis Weissnat",
        "website": "elvis.io",
        "email": "Telly.Hoeger@billy.biz",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "name": "Chelsey Dietrich",
        "website": "demarco.info",
        "email": "Lucio_Hettinger@annie.ca",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "name": "Clementine Bauch",
        "website": "ramiro.info",
        "email": "Nathan@yesenia.net",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "name": "Glenna Reichert",
        "website": "conrad.com",
        "email": "Chaim_McDermott@dana.io",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    }
]
```

## TODO

## Exibir uma lista com os dados:

- 1. [x] Os websites de todos os usuários
- 2. [x] O Nome, email e a empresa em que trabalha (em ordem alfabética).
- 3. [x] Mostrar todos os usuários que no endereço contem a palavra ```suite```
- 4. [ ] Salvar logs de todas interações no elasticsearch
- 5. [x] EXTRA: Criar test unitário para validar os itens a cima.

## Considerações sobre requisitos

- Não ficou claro se os websites dos usuários mostrados, seriam apenas os filtrados por pelo endereço, ou para todos os usuários da lista;
- Não ficou claro quais os critérios seriam levados em conta na ordenação alfabética. Tive dúvidas entre ordenar por nome, email e empresa, ou apenas ordenar por empresa;