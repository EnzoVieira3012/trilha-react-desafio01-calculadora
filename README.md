Calculadora React
Este projeto é uma calculadora funcional desenvolvida em React, com uma interface moderna e responsiva. A calculadora suporta operações básicas como soma, subtração, multiplicação, e divisão. Além disso, há a funcionalidade de alternar entre modo claro e modo escuro, inspirada no design da calculadora do iPhone.

Calculadora React
(Adicione um print da calculadora funcionando aqui)
📋 Funcionalidades
Operações básicas: soma, subtração, multiplicação e divisão.
Cálculo dinâmico: os números e operações são exibidos no visor em tempo real.
Botão "C": limpa o visor e reseta os cálculos.
Modo claro e escuro: alterna entre os temas com um clique.
Responsividade: ajusta-se a diferentes tamanhos de tela (como desktop, tablet e celular).
🚀 Tecnologias Utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias e bibliotecas:

ReactOpens in a new window; external.: biblioteca para construção de interfaces de usuário.
Styled-ComponentsOpens in a new window; external.: estilização com componentes CSS-in-JS.
JavaScript (ES6+): para manipulação de lógica.
Create React App: estrutura inicial do projeto.
📂 Estrutura do Projeto
plaintext
Copy
Calculadora
├── /node_modules                # Dependências instaladas pelo npm
├── /public                      # Arquivos públicos (HTML, favicon, etc.)
│   ├── favicon.ico              # Ícone do navegador
│   ├── index.html               # HTML principal
│   ├── manifest.json            # Configuração PWA
│   └── robots.txt               # Controle de indexação de motores de busca
├── /src                         # Código-fonte do projeto
│   ├── /components              # Componentes reutilizáveis
│   │   ├── /Button              # Componente de botão
│   │   │   ├── Button.jsx
│   │   │   └── styles.js
│   │   ├── /Input               # Componente do visor
│   │   │   ├── Input.jsx
│   │   │   └── styles.js
│   ├── /styles                  # Centralização de estilos globais e temas
│   │   ├── global.js            # Estilos globais
│   │   ├── theme.js             # Definição de temas (claro e escuro)
│   │   └── styles.js            # Estilos da calculadora
│   ├── /utils                   # Funções utilitárias
│   │   └── calculator.js        # Lógica de cálculo
│   ├── App.jsx                  # Componente principal da aplicação
│   ├── index.js                 # Ponto de entrada da aplicação
├── .gitignore                   # Arquivos ignorados pelo Git
├── package.json                 # Dependências e scripts do projeto
├── README.md                    # Documentação do projeto
└── yarn.lock / package-lock.json # Controle de versão das dependências
📦 Como Rodar o Projeto
Siga os passos abaixo para clonar e rodar o projeto na sua máquina local:

Pré-requisitos
Node.js instalado (versão 14 ou superior).
Um gerenciador de pacotes: npm ou yarn.
Instalação
Clone o repositório:

bash
Copy
git clone https://github.com/seu-usuario/calculadora-react.git
cd calculadora-react
Instale as dependências:

bash
Copy
npm install
# ou, se você usar yarn:
yarn install
Inicie o servidor de desenvolvimento:

bash
Copy
npm start
# ou
yarn start
Abra o navegador:

O projeto estará rodando em http://localhost:3000.
🔧 Como Usar
Inserir números: Clique nos botões numéricos para digitar os números na calculadora.
Escolher uma operação: Clique em um botão de operação (+, -, *, /) para escolher uma operação.
Calcular: Pressione o botão = para calcular o resultado.
Limpar: Pressione o botão C para limpar o visor e resetar os cálculos.
Alternar Tema: Clique no botão "Alternar Tema" para mudar entre modo claro e escuro.
🖼️ Screenshots
Modo Claro
(Adicione uma imagem do modo claro funcionando)

Modo Claro
Modo Escuro
(Adicione uma imagem do modo escuro funcionando)

Modo Escuro
📚 Aprendizados
Durante o desenvolvimento deste projeto, foram aplicados conceitos importantes como:

Componentização em React.
Uso de Styled-Components para estilização dinâmica.
Implementação de temas (claro/escuro) com ThemeProvider.
Lógica de cálculo matemático com JavaScript.
Responsividade para diferentes dispositivos.
🤝 Contribuições
Contribuições são bem-vindas! Se você quiser sugerir melhorias ou encontrar bugs, sinta-se à vontade para abrir uma issue ou enviar um pull request.

⚖️ Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSEOpens in a new window; external. para mais detalhes.

