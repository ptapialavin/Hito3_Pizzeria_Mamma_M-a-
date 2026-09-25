# Pizzería Mamma Mía

#Link del Deploy: 

Landing page de una pizzería ficticia, hecha con React y Vite. En este hito se implementó la renderización dinámica de componentes: el catálogo de pizzas se genera recorriendo un array de datos en vez de tarjetas escritas a mano, y se agregó un carrito de compras simulado con manejo de cantidades y cálculo de total en tiempo real.

Proyecto correspondiente al Hito 3 del módulo de Introducción a React de Desafío Latam (continuación del Hito 2).

## Cómo usarlo

Al abrir la app se muestra el Navbar (con el total del carrito formateado) y, debajo, el carrito de compras: cada pizza con su imagen, nombre, precio y cantidad. Usa los botones `+` y `-` para aumentar o disminuir la cantidad de cada pizza; al llegar a 0 la pizza se elimina del carrito. El total se recalcula automáticamente y se refleja tanto en el carrito como en el Navbar.

Los componentes `Home`, `LoginPage` y `RegisterPage` del Hito 2 se mantienen en el proyecto (no se eliminaron) pero quedan comentados en `App.jsx`, ya que se van a integrar más adelante junto con el manejo de rutas.

## Tecnologías

React · Vite · Bootstrap 5 · JavaScript (props, renderizado dinámico con `.map()`, estado con `useState`, manejo de eventos, componentes funcionales)

## Estructura

Hito3_Pizzeria_Mamma_Mía/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── CardPizza.jsx
│   │   ├── Cart.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── LoginPage.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── pizzas.js
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
| 1 | `<Home />` recorre el array de pizzas y renderiza un `<CardPizza />` por cada una | Home.jsx |
| 2 | `<CardPizza />` muestra la información de cada pizza utilizando props | CardPizza.jsx |
| 3 | `<CardPizza />` itera la lista de ingredientes y renderiza un `<li>` por cada uno | CardPizza.jsx |
| 4 | `<Cart />` recorre el array de `pizzaCart` y muestra la información de cada pizza | Cart.jsx |
| 5 | `<Cart />` tiene botones para aumentar/disminuir la cantidad de pizzas | Cart.jsx |
| 6 | `<Cart />` calcula y muestra el total de la compra | Cart.jsx |

## Autor

Patricio Tapia L. — Proyecto desarrollado para el módulo de Introducción a React del curso Desarrollo Full Stack de Desafío Latam.

