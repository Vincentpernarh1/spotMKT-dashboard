# 📊 SPOTMKT Dashboard

**spotMKT Dashboard** é uma aplicação web moderna, desenvolvida para exibir métricas de marketing digital de forma visual, simples e responsiva.

---

## 🚀 Funcionalidades Principais

- ✅ Visualização de métricas em tempo real  
- ✅ Design moderno e responsivo  
- ✅ Animações suaves e interações intuitivas  
- ✅ Notificações via menu lateral  
- ✅ Layout em grid com cards informativos  
- ✅ Preparado para integrar com APIs externas  

---

## 📄 Páginas e Seções

### 🔐 1. Página de Login

Tela inicial da aplicação onde o usuário insere suas credenciais.  
Para testes, há um login fixo configurado no arquivo `security.json`.

**Credenciais para teste:**

- **Usuário:** `spotmkt`  
- **Senha:** `123`  

![Login](https://github.com/user-attachments/assets/ce155b6d-4f00-4b75-8e1b-8e585a9190e8)

---

### 📊 2. Painel do Cliente

Após o login, o usuário acessa o painel principal.  
Aqui são exibidos **cards com métricas simuladas**, apresentando valores fictícios para teste.

![Painel](https://github.com/user-attachments/assets/a5f7a60f-90c7-44d3-8942-888ea9e0ccc8)

Cada card possui o botão **"Ver todos"**, que revela o histórico ou notificações relacionadas:

![Histórico](https://github.com/user-attachments/assets/38128294-6f7f-4e8c-8df3-efe38a0eca87)  
![Notificações](https://github.com/user-attachments/assets/49180891-e0f3-4f7a-ae8f-88962fe8c067)

---

### 👤 3. Página do Usuário

Ao clicar no card de **Configurações**, o usuário pode acessar e editar suas informações, como nome e e-mail.

![Usuário](https://github.com/user-attachments/assets/0fac1b94-ea00-488e-9953-fadc56da9866)

---

### 📱 Responsividade

A interface é 100% responsiva e se adapta bem a telas de **computadores, tablets e celulares**.

| Tablet | Celular | Celular |
|----------|--------|---------|
| ![1](https://github.com/user-attachments/assets/4b8c285b-8ad8-43c2-ad85-7d6e682572f3) | ![2](https://github.com/user-attachments/assets/5599dbfa-334c-4e70-8ebb-c560484bf86d) | ![3](https://github.com/user-attachments/assets/cce83842-625b-491b-8afc-6c35e190971c) |

---

## 🛠️ Tecnologias Utilizadas

- **React.js** – Framework para construção da interface  
- **Tailwind CSS** – Estilização rápida e moderna  
- **CSS3 (Flexbox & Grid)** – Layouts e responsividade  
- **Recharts (opcional)** – Gráficos animados e dinâmicos  
- **Git & GitHub** – Versionamento e colaboração  

---

## 📁 Estrutura de Pastas

```bash
📁 src
├── 📁 components       # Componentes reutilizáveis (navbar, sidebar, etc.)
├── 📁 assets           # Imagens, ícones, vídeos
├── 📁 pages
│   ├── Dashboard.jsx   # Página principal com os cards
│   └── Login.jsx       # Página de login
├── 📁 styles
│   ├── dashboard.css   # Estilos da dashboard
│   └── Login.css       # Estilos da página de login
└── App.jsx             # Arquivo principal da aplicação
