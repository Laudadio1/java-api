Resumo
- Projeto simples em HTML/CSS/JavaScript que consome uma API pública e lista posts dentro de um `<ul id="app">`.
- Objetivo: aprender desenvolvimento front‑end básico e prática com consumo de APIs, DOM e deploy estático.

Tecnologias
- HTML5
- CSS (styles.css)
- JavaScript (index.js) — fetch + manipulação do DOM

Estrutura do projeto
- index.html — página principal (carrega styles.css e index.js)
- styles.css — estilos do layout
- index.js — lógica de fetch e renderização da lista
- README.md — este arquivo

Funcionalidades
- Busca posts na API: https://sujeitoprogramador.com/rn-api/?api=posts
- Renderiza cada post como um <li> com imagem (se houver), título, descrição e link.
- Tratamento básico de erros (alert + console.error) quando o fetch falha.
