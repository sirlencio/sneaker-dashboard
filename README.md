# 👟 SneakerStock Dash
> Gestión de inventario inteligente y visual.

![Vue 3](https://img.shields.io/badge/Vue.js-3.x-4fc08d?style=for-the-badge&logo=vue.js)
![Pinia](https://img.shields.io/badge/Pinia-Store-ffe162?style=for-the-badge&logo=vue.js)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.x-38bdf8?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-Tooling-646cff?style=for-the-badge&logo=vite)

## 📸 Galería del Proyecto

![Página Principal](https://github.com/sirlencio/sneaker-dashboard/blob/main/screenshots/screenshot1.png)
*Vista principal.*

![Listado de Sneakers](https://github.com/sirlencio/sneaker-dashboard/blob/main/screenshots/screenshot2.png)
*Vista de tabla de gestión de sneakers.*

![Formulario de Sneakers](https://github.com/sirlencio/sneaker-dashboard/blob/main/screenshots/screenshot3.png)
*Formulario de creación.*

## 📋 Descripción
SneakerStock es un Dashboard interactivo que permite el control total sobre un catálogo de calzado deportivo. La aplicación permite gestionar el stock, visualizar métricas financieras en tiempo real y administrar modelos mediante un flujo de trabajo optimizado.

Este proyecto nace como un ejercicio de **migración conceptual de React a Vue 3**, aplicando patrones avanzados de reactividad y gestión de estado global.

## 🚀 Características
- **Dashboard de Métricas:** Visualización de stock y valor de inventario mediante gráficos interactivos (Chart.js).
- **Gestión CRUD:** Operaciones completas para añadir, editar y eliminar productos.
- **Estado Global:** Implementación de Pinia para mantener la consistencia de datos en toda la App.
- **Navegación Fluida:** Enrutamiento dinámico con Vue Router y soporte para navegación por hashes.
- **UI Moderna:** Interfaz limpia, responsiva y con modo "Glassmorphism" construida con Tailwind CSS.

## 🧠 Aprendizajes: De React a Vue
Como desarrollador con base en React, este proyecto implementa las siguientes equivalencias:
- **State Management:** Sustitución de `useState` por `ref` y `reactive`.
- **Computed Logic:** Uso de `computed` en lugar de `useMemo` para transformaciones de datos costosas.
- **Lifecycle:** Transición de `useEffect` a `onMounted` y watchers.
- **Communication:** Implementación de `defineProps` y `defineEmits` para el patrón *Lifting State Up*.

## 🛠️ Stack Tecnológico
- **Core:** Vue 3 (Composition API)
- **Store:** Pinia
- **Router:** Vue Router
- **Charts:** Chart.js + Vue-Chartjs
- **Estilos:** Tailwind CSS
- **Tipado:** TypeScript