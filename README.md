# 🧪 Mandrágora Medicamentos – E‑Commerce Completo com React + Vite + Tailwind + API

Bem‑vindo ao repositório do **Mandrágora Medicamentos**, um projeto moderno e totalmente funcional que simula um **e‑commerce de farmácia**, com frontend em **React + TypeScript**, estilização com **TailwindCSS**, rotas com **React Router**, comunicação via **Axios**, notificações com **React‑Toastify**, e consumo completo de API REST para **Categorias e Produtos**.

Este README foi criado com extremo cuidado para ser profissional, elegante, completo e visualmente agradável.

---

## ✨ Tecnologias Utilizadas

| Tecnologia | Função |
|-----------|--------|
| **React + TypeScript** | Estrutura principal do frontend |
| **Vite** | Ferramenta moderna de build e desenvolvimento |
| **TailwindCSS** | Estilização rápida, responsiva e moderna |
| **Axios** | Comunicação com a API |
| **React Router DOM** | Controle de navegação e rotas |
| **React‑Toastify** | Sistema de notificações |
| **Phosphor Icons** | Ícones leves e modernos |
| **React Spinners** | Feedback visual de carregamento |

---

## 🎨 Identidade Visual

O projeto utiliza uma paleta moderna em degradê, remetendo a confiança e cuidado:

```
#2BD998 → #00C5A6 → #00AFB1 → #0098B5 → #0081B1 → #0069A4
```

Aplicada em botões, Navbar, detalhes, gradientes e animações.

---

## 📁 Estrutura do Projeto

```
src/
 ├─ assets/
 ├─ componentes/
 │   ├─ categorias/
 │   │   ├─ ListaCategorias.tsx
 │   │   ├─ CardCategoria.tsx
 │   │   ├─ FormCategoria.tsx
 │   │   └─ DeleteCategoria.tsx
 │   ├─ produtos/
 │   │   ├─ ListaProdutos.tsx
 │   │   ├─ CardProduto.tsx
 │   │   ├─ FormProduto.tsx
 │   │   └─ DeleteProduto.tsx
 │   ├─ navbar/
 │   └─ footer/
 ├─ models/
 ├─ pages/
 ├─ services/
 ├─ utils/
 └─ main.tsx
```

---

## 🧬 API Consumida

A API REST fornece dois recursos principais:

### **Categoria**
- `GET /categorias`
- `POST /categorias`
- `PUT /categorias`
- `DELETE /categorias/{id}`

### **Produto**
- `GET /produtos`
- `POST /produtos`
- `PUT /produtos`
- `DELETE /produtos/{id}`

---

## 📦 CRUD Completo

### ✔ Categorias
- Listagem com cards
- Cadastro com validação
- Edição com carregamento automático dos dados
- Exclusão com tela de confirmação
- Notificações de sucesso/erro

### ✔ Produtos
- Listagem com cards personalizados
- Formulário completo com:
  - Nome
  - Preço
  - Foto (URL)
  - Seleção de Categoria
- Editar & Deletar funcionando perfeitamente

---

## 🧭 Rotas Principais

| Rota | Componente |
|------|------------|
| `/` | Home |
| `/categorias` | ListaCategorias |
| `/categorias/nova` | FormCategoria |
| `/categorias/editar/:id` | FormCategoria |
| `/categorias/deletar/:id` | DeleteCategoria |
| `/produtos` | ListaProdutos |
| `/produtos/novo` | FormProduto |
| `/produtos/editar/:id` | FormProduto |
| `/produtos/deletar/:id` | DeleteProduto |

---

## 💅 Destaques do Design

- Layout moderno e responsivo
- Navbar com hambúrguer animado no mobile
- Botões em degradê verde com hover suave
- Cards com sombras, bordas suaves e animações
- Footer estiloso com assinatura personalizada

---

## 🔧 Como Rodar o Projeto

### 1. Clone o repositório
```
git clone https://github.com/LemesdeMorais/projeto_final_bloco_03.git
```

### 2. Instale as dependências
```
npm install
```

### 3. Rode o projeto
```
npm run dev
```

O projeto abrirá em:

```
http://localhost:5173
```

---

## 🙋‍♀️ Autoria

Projeto desenvolvido com dedicação intensa e paixão por **Rafaela Lemes 💚**, combinando criatividade, boas práticas e um dos designs mais bonitos já realizados na aplicação.

---

## 🌟 Agradecimentos

A todos que acompanham o projeto, experimentam e estudam com ele.  
Este e‑commerce foi construído para ser referência de boas práticas em frontend moderno.

Se quiser evoluir o projeto juntos — adicionar carrinho, login, painel admin, integração com banco — só chamar!🚀
