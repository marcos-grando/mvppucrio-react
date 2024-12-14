### Desenvolvimento Full Stack - PUC-Rio

# MVP Front End com React: Projeto Cantabile 🎻

O objetivo do MVP foi desenvolver, utilizando React, um ambiente para divulgar o "Projeto Cantabile", que promove uma semana sinfônica no Teatro Municipal.
A semana sinfônica conta com a presença de orquestras, bandas e artistas de domingo à sábado.
O site exibe informações das apresentações de cada dia e notícias relacionadas.

---

## 🎨 Protótipo no Figma

Foi criado no Figma o design do projeto, acesse o protótipo no link abaixo:

- [Protótipo no Figma](https://www.figma.com/design/BHbRzrouv82FoPKEBHjRyO/Cantabile?node-id=0-1&t=7w4BJCiWRhwYdjfh-1)

---

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)

---

## 🚀 Funcionalidades do Projeto

Podemos dividir o projeto em 4 principais partes:

```
1. **Seção Banner:**
   - Slide com as principais atrações do evento.
   - Miniaturas (thumbnails) interativas de cada atração.

2. **Seção Sobre:**
   - Introdução ao projeto Cantabile.
   - Slides com imagens e informações adicionais.
   - Botão "Ver Mais" que redireciona para a página completa.
    **Página /sobre**
    - Página completa com todas as informações do projeto Cantabile.

3. **Seção Calendário:**
   - Calendário dinâmico que ajusta à semana atual.
   - Visualização dos eventos por dia com horários e detalhes.
   - Interatividade ao clicar em dias específicos.

4. **Seção Notícias:**
   - Carrossel de notícias destacadas (indisponível para Mobile).
   - Sistema de navegação e estado global para gerenciar seleções.
   - Lista completa de notícias com navegação para reportagem individual.
    **Página /noticias/:slug**
    - Página completa com a reportagem completa da notícia clicada.
```

---

## 📂 Estrutura do Projeto

```
mvppucrio/
├── estilos
│   ├── estilo-banner/      # estilização da section .banner
│   ├── estilo-sobre/       # estilização da section .sobre e da section/page .sobreall
│   ├── estilo-calendar/    # estilização da section .calendar
│   ├── estilo-newsnow/     # estilização da section .newsnow
│   ├── estilo-singlenews/  # estilização da section/page .singlenews
│   └── style.css           # estilos base (inclui footer)
├── src
│   ├── components          # Componentes reutilizáveis
│   │   ├── banner/         # Componentes específicos para o banner
│   │   ├── sobre/          # Componentes específicos para a seção sobre
│   │   ├── calendar/       # Componentes específicos para a seção do calendário
│   │   ├── newsnow/        # Componentes específicos para a seção de notícias
│   │   ├── Arrows.jsx 
│   │   ├── Footer.jsx 
│   │   ├── Header.jsx 
│   │   ├── Item.jsx 
│   │   ├── Singlenews.jsx 
│   │   ├── Sobreall.jsx 
│   │   └── Title.jsx 
│   ├── App.jsx             # Componente principal
│   └── index.jsx           # Ponto de entrada da aplicação
├── public                  # Arquivos públicos (favicon, imgs, etc)
├── package.json            # Dependências
└── vite.config.js          # Configs do Vite
```

OBS: Em /public, há presença de .htaccess e 404.html, utilizados enquanto tentava aprender a hospedar esse projeto no ar (por curiosidade).

---

## ⚙️ Como Rodar o Projeto

Necessário baixar o projeto (ou clonar o repositório) e navegar até a raiz do projeto pelo terminal.
Em seguida:

Instale as dependências:
```
npm install
```

Inicie o servidor de desenvolvimento:
```
npm run dev
```

Acesse no navegador:
```
http://localhost:3000
```

---

## 📄 Licença

Este projeto está sob a licença MIT.
