# CTOManager - Frontend (Angular)

Interface web para gerenciamento de CTOs, consumindo a API do backend Spring Boot.

## Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- Node.js (versão 20 ou superior)
- npm (gerenciador de pacotes do Node)
- Angular CLI (opcional, mas recomendado)
- Git (para clonar o repositório)

Para verificar as versões instaladas:
```bash
node --version
npm --version
```

## Configuração do Ambiente

### 1. Clone o repositório
```bash
git clone [URL-DO-SEU-REPOSITORIO]
cd cto-manager-front
```

### 2. Instale as dependências
```bash
npm install
```
Este comando irá instalar todas as bibliotecas necessárias listadas no package.json, incluindo:
- Angular core e ferramentas
- HttpClient para chamadas HTTP
- RxJS para programação reativa

### 3. Configure a URL da API (se necessário)

Por padrão, o frontend está configurado para chamar o backend em:
```
http://localhost:8080/api
```

Se seu backend estiver rodando em outra porta/endereço, edite os arquivos de serviço:

**src/app/services/cto.service.ts**
```typescript
private api = 'http://localhost:8080/api/ctos';  // Altere aqui
```

**src/app/services/modelo.service.ts**
```typescript
private api = 'http://localhost:8080/api/modelos';  // Altere aqui
```

### 4. Execute o servidor de desenvolvimento

#### Opção A: Usando Angular CLI (recomendado)
```bash
ng serve
```

#### Opção B: Usando npm
```bash
npm start
```

Após executar, o terminal mostrará:
```
Compiled successfully.
Browser application bundle generation complete.

Angular Live Development Server is listening on localhost:4200
```

Acesse: **http://localhost:4200**

O servidor de desenvolvimento recarrega automaticamente quando você altera qualquer arquivo.

---

## Estrutura do Projeto

```
cto-manager-front/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── ctos/               # CRUD de CTOs
│   │   │   │   ├── ctos.component.html
│   │   │   │   └── ctos.component.ts
│   │   │   └── modelos/            # CRUD de Modelos
│   │   │       ├── modelos.component.html
│   │   │       └── modelos.component.ts
│   │   ├── services/                # Comunicação com API
│   │   │   ├── cto.service.ts
│   │   │   └── modelo.service.ts
│   │   ├── models/                  # Interfaces TypeScript
│   │   │   ├── cto.ts
│   │   │   ├── modelo.ts
│   │   │   └── sensor.ts
│   │   ├── app.component.html       # Componente raiz
│   │   ├── app.component.ts
│   │   ├── app.config.ts            # Configuração do Angular
│   │   └── app.routes.ts            # Rotas da aplicação
│   ├── index.html                   # Página principal
│   ├── main.ts                       # Ponto de entrada
│   └── styles.css                    # Estilos globais
├── angular.json                      # Configuração do Angular
├── package.json                      # Dependências e scripts
├── package-lock.json
└── README.md
```

---

## Funcionalidades

### Módulo de Modelos (/modelos)
- Listar todos os modelos cadastrados
- Cadastrar novo modelo (nome + fabricante)
- Excluir modelo existente

### Módulo de CTOs (/ctos)
- Listar todas as CTOs com status do sensor
- Cadastrar nova CTO (nome, latitude, longitude, modelo)
- Excluir CTO (com validação de regras de negócio)
- Visualização de CTOs em estado de alarme (destacadas em laranja)

---

## Integração com a API

O frontend consome os seguintes endpoints do backend:

| Serviço | Método | Endpoint | Descrição |
|---------|--------|----------|-----------|
| CtoService | GET | /api/ctos | Lista todas as CTOs |
| CtoService | POST | /api/ctos | Cria uma nova CTO |
| CtoService | DELETE | /api/ctos/{id} | Remove uma CTO |
| ModeloService | GET | /api/modelos | Lista todos os modelos |
| ModeloService | POST | /api/modelos | Cria um novo modelo |
| ModeloService | DELETE | /api/modelos/{id} | Remove um modelo |

---

## Exemplos de Uso

### Cadastrar um Modelo
1. Acesse http://localhost:4200 (ou /modelos)
2. Preencha os campos:
   - Nome: "CTO-123"
   - Fabricante: "FiberTech"
3. Clique em "Cadastrar"
4. O novo modelo aparecerá na lista abaixo

### Cadastrar uma CTO
1. Navegue até a aba de CTOs
2. Preencha os dados:
   - Nome da CTO: "CTO-Centro-01"
   - Latitude: -23.5505
   - Longitude: -46.6333
   - Modelo: Selecione um modelo da lista
3. Clique em "Cadastrar CTO"

### Excluir uma CTO
- CTOs com status ALARMADO não podem ser excluídas (validação do backend)
- Uma mensagem de erro será exibida caso tente excluir uma CTO alarmada

---

## Scripts Úteis

| Comando | Descrição |
|---------|-----------|
| npm start | Inicia o servidor de desenvolvimento |
| ng serve | Inicia o servidor de desenvolvimento |
| npm run build | Gera a versão de produção na pasta dist/ |
| npm test | Executa os testes unitários |
| npm run watch | Inicia em modo watch para desenvolvimento |
| ng generate component nome | Gera um novo componente |

---

## Solução de Problemas

### Erro: "Cannot find module" ou dependências faltando
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Erro: "Port 4200 is already in use"
```bash
# Opção 1: Mate o processo na porta 4200
# Opção 2: Use outra porta
ng serve --port 4201
```

### Erro de CORS ou conexão com API
1. Verifique se o backend está rodando: http://localhost:8080
2. Confirme a URL nos serviços (cto.service.ts e modelo.service.ts)
3. Verifique o console do navegador (F12) para mensagens de erro

### A página carrega mas não mostra dados
- Abra o console do navegador (F12 -> Console)
- Verifique se há erros de requisição (404, 500)
- Confirme se o backend tem dados cadastrados

### Erro: "NG serve não encontrado"
```bash
# Instale o Angular CLI globalmente
npm install -g @angular/cli

# Ou use npm diretamente
npm start
```

## Dependências Principais

```json
{
  "dependencies": {
    "@angular/common": "^19.0.0",
    "@angular/core": "^19.0.0",
    "@angular/forms": "^19.0.0",      // Para ngModel
    "@angular/router": "^19.0.0",      // Para navegação
    "rxjs": "~7.8.0"                    // Programação reativa
  }
}
```

---
