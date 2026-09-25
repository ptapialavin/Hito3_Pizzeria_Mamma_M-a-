# Pizzería Mamma Mía

#Link del Deploy: https://hito2-pizzeria-mamma-m-a.vercel.app/

Landing page de una pizzería ficticia, hecha con React y Vite. Muestra un header de bienvenida, un catálogo de pizzas con nombre, precio e ingredientes, una barra de navegación que simula el estado de sesión de un usuario (logueado / no logueado), y formularios funcionales de registro e inicio de sesión con manejo de estado, eventos y validaciones.

Proyecto correspondiente al Hito 2 del módulo de Introducción a React de Desafío Latam (continuación del Hito 1).

## Cómo usarlo

Navega por la página: revisa el header, el menú de navegación (con el total de compra formateado) y el catálogo de pizzas con sus ingredientes y precios. Usa los botones "Iniciar Sesión" y "Registrarse" del navbar para acceder a los formularios correspondientes; al enviarlos verás un mensaje en pantalla en verde (éxito) o rojo (error) según las validaciones.

## Tecnologías

React · Vite · Bootstrap 5 · JavaScript (props, estado con useState, manejo de eventos, componentes funcionales)

## Estructura

Hito2_Pizzeria_Mamma_Mía/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── CardPizza.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── LoginPage.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   └── formatNumber.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── README.md

## Ejecutar

npm install
npm run dev

## Requerimientos de la prueba

| # | Requerimiento | Dónde se cumple |
|---|---|---|
| 1 | Componente Register con Email, Contraseña y Confirmar contraseña | RegisterPage.jsx |
| 2 | Validaciones de Register (campos obligatorios, mínimo 6 caracteres, contraseñas iguales) | RegisterPage.jsx |
| 3 | Mensaje de éxito/error al enviar el formulario de Register | RegisterPage.jsx |
| 4 | Componente Login con Email y Contraseña | LoginPage.jsx |
| 5 | Validaciones de Login (campos obligatorios, mínimo 6 caracteres) | LoginPage.jsx |
| 6 | Mensaje de éxito/error al enviar el formulario de Login | LoginPage.jsx |
| 7 | Navegación entre Home, Register y Login | App.jsx → Navbar.jsx |

## Autor

Patricio Tapia L. — Proyecto desarrollado para el módulo de Introducción a React del curso Desarrollo Full Stack de Desafío Latam.