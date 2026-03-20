# Documentación de Implementación: Portfolio con Bootstrap 5

Este documento detalla paso a paso el proceso realizado para replicar la interfaz de `test.html` (originalmente en Tailwind) utilizando componentes y clases utilitarias de **Bootstrap 5**, y añadiendo reactividad con JavaScript *Vanilla*. El objetivo es proporcionar una guía para que el alumno pueda replicar el proceso y redactar su memoria según los requisitos de la EDP2.

---

## 1. Configuración Inicial del Proyecto (`index.html`)

**¿Qué se hizo?**  
Se estructuró el documento HTML básico importando las dependencias esenciales de Bootstrap y recursos externos (Google Fonts y Bootstrap Icons).
**¿Por qué?**  
Para cumplir con el **Requisito 1 (Uso de Bootstrap 5)**, empleando el archivo `bootstrap.css` y `bootstrap.bundle.js` locales y la librería de **Bootstrap Icons**. Se definió la fuente (Inter) para alinear el diseño con las tendencias visuales modernas (**Requisito 2: Tendencias actuales**). No se usó texto falso (**Requisito 3**).

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="index.css">
```

## 2. Soporte a Modo Claro/Oscuro y Variables Base (`index.css`)

**¿Qué se hizo?**  
Se crearon variables CSS nativas (`:root` y `[data-bs-theme="dark"]`) y unas cuantas clases utilitarias (`.font-display`, `.aspect-square`) para manejar colores de fondo, tarjetas y textos, imitando la escala de colores elegante del mockup.
**¿Por qué?**  
Bootstrap 5.3 introdujo el modo oscuro mediante el atributo `data-bs-theme`. Usarlo asegura que la aplicación se construya con una arquitectura moderna y escalable. Mantener una sola paleta adaptativa asegura **coherencia y unidad en el diseño (Requisito 5)**.

```css
:root { ... variables claras ... }
[data-bs-theme="dark"] { ... variables oscuras ... }
```

## 3. Estructura y Componente Padre (App Layout)

**¿Qué se hizo?**  
Se aplicó la clase `.overflow-x-hidden` directamente a la etiqueta `<body>` y se encerró todo el contenido en un `<div>` con las clases `.d-flex .flex-column .min-vh-100` y `.w-100`.
**¿Por qué?**  
Para garantizar que la web actúe como una aplicación móvil en pantalla completa. La restricción del desbordamiento horizontal (`overflow-x-hidden`) es muy importante ponerla en el `body` en lugar del contenedor principal del diseño, ya que si estuviera dentro, rompería el comportamiento de anclaje de elementos como `.sticky-top`.

## 4. El Encabezado ("Header / Top Bar") - _Componentes: Sticky & Flexbox_

**¿Qué se hizo?**  
Se utilizó el contenedor `<header>` con las clases `.d-flex .align-items-center .justify-content-between .sticky-top .p-3`.
También se agregaron estilos custom de `backdrop-blur` para hacer el fondo difuminado de estilo *Glassmorphism*.
**¿Por qué?**  
El `sticky-top` ancla el header en la parte superior del móvil mientras hacemos scroll. Las utilidades flex de Bootstrap permiten posicionar perfectamente el título en el centro y los iconos a los lados. El *glassmorphism* cumple la recomendación visual de **tendencias actuales**.

## 5. Sección Hero (Presentación del Perfil) - _Componentes: Buttons & Flex_

**¿Qué se hizo?**  
Se estructuró la sección de perfil usando `.d-flex .flex-column .align-items-center`.
Se usó `.rounded-circle` en la foto para un borde perfecto y contornos desenfocados, además de tipografía `.fw-bold`, `.fs-2` y color `.text-primary` al título y descripción.
El botón "Hire Me" utiliza el componente nativo de botón: `.btn .btn-primary .w-100`.
**¿Por qué?**  
El layout en columna de Flexbox centra perfectamente al usuario simulando un perfil tipo portafolio móvil moderno y profesional (aplicación de leyes de Gestalt de agrupación por proximidad). Esto garantiza un diseño limpio.

## 6. Sección de Estadísticas (Stats Scrollables) 

**¿Qué se hizo?**  
Un carril de tarjetas en fila que permiten el desplazamiento lateral. Se formó usando un `.d-flex .flex-nowrap .overflow-x-auto` en el contenedor padre, y asignando `.flex-fill` y `.bg-card` a cada item.
Se agregó CSS adicional para ocultar visualmente el *scrollbar* (conservando la usabilidad de deslizar).
**¿Por qué?**  
Mejora sustancialmente la interacción en dispositivos móviles. Evita acaparar todo el espacio vertical de la pantalla permitiendo mostrar muchos datos horizontalmente en tarjetas pequeñas.

## 7. Galería de Historias - _Componentes: Componente Cards ("Tarjetas")_

**¿Qué se hizo?**  
Para cada historia o proyecto ("Architecture", "Future Interfaces"), se implementaron componentes **Card** de Bootstrap (`.card .border-0`), conteniendo la clásica estructura de tarjeta de Bootstrap pero con diseño modificado (un `.card-img-top` modificado a ser imagen de fondo en un `div` y un `card-body` con textos formateados).
**¿Por qué?**  
Es la forma principal que proporciona Bootstrap para agrupar contenido de manera predecible. Esto cuenta como un componente Bootstrap claro (Componente **Card**), el cual encierra semánticamente a imagen, título y texto como componentes relacionados, aplicando la ley de Simetría/Cierre de Gestalt. No se usa contenido Lorem Ipsum, sino textos que den sentido a la temática (**Requisitos 3 y 4**).

## 8. Navegación Inferior (Bottom Nav) - _Componentes: Componente Fixed Bottom Nav_

**¿Qué se hizo?**  
Se implementó un elemento `<nav>` en la base de la pantalla utilizando la clase `.fixed-bottom`, difuminación con `.backdrop-blur` y `.shadow-lg`. Los elementos son botones alineados en Flexbox.
**¿Por qué?**  
Es el patrón de navegación más usado actualmente en interfaces móviles PWA (Web Apps Progresivas) para retener fácil acceso con el pulgar. Esto hace a la UI muy cómoda (fuerte influencia de **tendencias actuales**).

## 9. Reactividad con JavaScript Vanilla (`index.js`) - Botón de Temas 

**¿Qué se hizo?**  
Se programó un script (`document.addEventListener`) que altera la variable de Bootstrap `[data-bs-theme]` del elemento global `html`, pasando el valor de "light" a "dark" o viceversa al hacer click en el botón del Header.
**¿Por qué?**  
El requisito del proyecto era "sólo hacer uso de JavaScript nativo a nivel de cliente", **sin frameworks de JS como React/Vue**. Al interactuar nativamente con el DOM y utilizar `localStorage` para guardar las preferencias, la app recuerda el tema preferido del usuario.

## Resumen de Uso de Bootstrap e Identificación para EPD2 
Las clases/componentes de Bootstrap 5 destacables que hemos integrado (necesitas documentar al menos 10 en tu EDP) son:
1. `container`, `row` (uso tradicional para layouts, si bien acá centramos más con `d-flex`).
2. Componentes UI: `.btn`, `.btn-primary` (Botones).
3. Componentes visuales: `.card`, `.card-body`, `.card-title`, `.card-text` (Tarjetas de proyectos).
4. Posicionamiento: `.sticky-top`, `.fixed-bottom` (Cabecera y Navegación principal).
5. Flexbox utilitario: `.d-flex`, `.flex-column`, `.justify-content-between`, `.align-items-center`, `.flex-fill` (Grid principal para móvil).
6. Control de Espaciados: `.p-3`, `.pt-4`, `.mt-2`, `.gap-2` (Márgenes y paddings).
7. Tipografía: `.fs-2`, `.fs-5`, `.fw-bold`, `.text-center`, `.text-muted`, `.lh-1`.
8. Tema Nativo de Bootstrap 5.3: El soporte con el atributo `data-bs-theme="dark"`.
9. Elementos visuales: `.shadow-lg`, `.shadow-sm` (Sombras).
10. Utilidades de forma y bordes: `.rounded-circle`, `.rounded-4`.
11. Iconografía Oficial de Bootstrap: Se incluyeron íconos usando de CDN `bootstrap-icons.min.css` (clases `.bi`, `.bi-list`, `.bi-sun`, `.bi-house-door-fill`, etc.).

*Recuerda que estas explicaciones te servirán como insumo fundamental para redactar el apartado de uso y justificación de herramientas en el archivo PDF OBLIGATORIO final (Memoria) que solicitan en tu asignatura.*
