<h1 align="center">React-context-api</h1>

###

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
  <img width="30" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css logo"  />
  <img width="30" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="30" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="30" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="40" alt="vscode logo"  />
</div>

###
###
![completato pagina Budget](./ModalitàBudget.png)

<p align="left">Esercizio di oggi: React Context API<br><br>repo: react-context-api<br><br>Oggi estendiamo il nostro mini e-commerce introducendo le Context API di React.<br>Useremo un contesto per gestire una modalità budget, che permette all’utente di visualizzare solo i prodotti più economici.<br><br>---<br><br>Consegna<br><br>MILESTONE 1<br><br>Create un nuovo context chiamato BudgetContext<br><br>Deve contenere uno stato budgetMode di tipo booleano (true/false)<br>Deve fornire anche la funzione per modificarlo (setBudgetMode)<br>Wrappiamo l’intera applicazione con il BudgetProvider<br><br>MILESTONE 2<br><br>Create un componente Navbar.jsx (se non lo avete già)<br><br>Inseritelo in App.jsx (oppure nel vostro componente di layout se avete organizzato l’app in questo modo)<br>All’interno della Navbar aggiungete un bottone “Modalità Budget” che attiva/disattiva budgetMode con un click<br>Il bottone deve cambiare etichetta in base allo stato (Attiva Modalità Budget / Disattiva Modalità Budget)<br><br>MILESTONE 3<br><br>Modificate la pagina dei prodotti:<br><br>Recuperate il valore budgetMode usando il context<br>Se budgetMode === true, mostrate solo i prodotti con price <= 30<br>Altrimenti, mostrare tutti i prodotti normalmente<br><br>BONUS<br>Valutare se può aver senso centralizzare i dati dei prodotti nel context e quindi richiamarli da li, invece che da pagine e/o componenti</p>

###

###

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
