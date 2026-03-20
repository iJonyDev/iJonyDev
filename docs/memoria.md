# Memoria del Proyecto: Portfolio Personal

**Asignatura:** Tecnologías Avanzadas de Desarrollo (TAD)  
**Curso:** 2023/2024  
**Práctica:** EPD 2 - Diseño de Interfaces Avanzado con Bootstrap 5  
**Autor:** [Tu Nombre y Apellidos]  

---

## 1. Introducción y Finalidad del Proyecto
_Describe brevemente de qué trata el proyecto, a quién va dirigido (ej. clientes potenciales, reclutadores) y cuál es su objetivo principal._
* **Temática elegida:** Portfolio profesional de diseño/desarrollo.
* **Finalidad:** Mostrar trabajos, habilidades y formas de contacto de manera accesible, profesional y completamente _responsive_.

### 1.1 Funcionalidad de cada elemento en la web
_Explica para qué sirve cada sección de la página. (Ejemplo abajo)_
* **Cabecera (Header):** Contiene el nombre o logotipo, menú tipo hamburguesa y la funcionalidad principal de cambiar el tema (Claro/Oscuro).
* **Sección Hero:** Presenta al profesional con una foto de perfil y una llamada a la acción ("Hire Me").
* **Tarjetas de Estadísticas:** Muestran información rápida y cuantificable (Proyectos, Alcance, Años de experiencia).
* **Galería de Historias (Cards):** Funciona como muestrario de proyectos destacados.
* **Navegación Inferior (Bottom Nav):** Provee un acceso rápido a las secciones principales emulando la experiencia de una aplicación móvil (PWA).

_[Espacio para Captura de Pantalla: Vista general de la aplicación en dispositivo móvil]_
> **Insertar imagen aquí:** `![Vista General Mobile](ruta/a/la/imagen.png)`

---

## 2. Tecnologías y Librerías Empleadas

En este proyecto se han utilizado exclusivamente tecnologías cliente, respetando las restricciones de la práctica:

* **HTML5:** Para la estructuración semántica y accesible del contenido.
* **CSS3:** Para la personalización de estilos, implementación de temas (CSS Variables) y efectos visuales (_Glassmorphism_).
* **JavaScript (Vanilla):** Para la lógica de interacción del lado del usuario (cambio de tema Claro/Oscuro guardado en `localStorage`).
* **Librerías externas y Frameworks:**
  * **Bootstrap 5 (v5.3+):** Utilizado como framework principal mediante CDN/local (`bootstrap.css` y `bootstrap.bundle.js`).
  * **Google Fonts (Inter):** Para cargar la tipografía principal del proyecto.
  * **Bootstrap Icons:** Como librería oficial de fuentes de iconos, optimizada para integrarse con este framework.

_[Espacio para Captura de Pantalla: Evidencia de la estructura del proyecto en carpetas/código]_
> **Insertar imagen aquí:** `![Estructura del Proyecto](ruta/a/la/imagen.png)`

---

## 3. Uso Exigido de Bootstrap 5 (Mínimo 10 Componentes/Clases)

_En esta sección debes listar los componentes o utilidades que has integrado. Asegúrate de mostrar conocimiento técnico de porqué se usaron._
A continuación se detallan más de 10 utilidades y componentes de Bootstrap 5 implementados para el desarrollo del layout y la UI:

1. **Atributo Tema:** Soporte nativo de `data-bs-theme="dark/light"`.
2. **Componente Card:** Contenedores de proyectos (`.card`, `.card-body`, `.card-title`, `.card-text`).
3. **Componente Button:** Botón primario de "Hire Me" (`.btn`, `.btn-primary`, `.btn-link`).
4. **Disposición (Grid/Layout):** Uso del sistema de contenedores aunque priorizando el diseño flexible. (`.container` - si lo usaste -, etc).
5. **Flexbox (Utilidades):** Creación interactiva de la estructura UI (`.d-flex`, `.flex-column`, `.flex-fill`, `.justify-content-between`, `.align-items-center`).
6. **Posicionamiento (Utilities):** Anclajes de interfaz nativos de aplicaciones (`.sticky-top` para el header, `.fixed-bottom` para la navegación).
7. **Espaciado (Spacers):** Control exhaustivo de márgenes y rellenos (`.p-3`, `.pt-4`, `.gap-2`, `.gap-4`, `.mt-2`, `.mb-5`).
8. **Tipografía:** Tamaños de fuentes y pesos variables (`.fs-2`, `.fs-5`, `.fw-bold`, `.text-center`, `.text-muted`, `.lh-1`).
9. **Display y Sizing:** Control de tamaño horizontal y vertical (`.w-100`, `.min-vh-100`).
10. **Bordes:** Esquinas redondeadas personalizadas (`.rounded-circle`, `.rounded-3`, `.rounded-4`).
11. **Sombras y Fondos:** Aplicación rápida de elevación CSS y colores de estado de Bootstrap (`.shadow-lg`, `.shadow-sm`, `.bg-primary`).
12. **Iconografía:** Uso de Bootstrap Icons (`.bi`, `.bi-sun`, `.bi-list`, `.bi-house-door-fill`, etc.).

_[Espacio para Captura de Pantalla: Detalle de una Card o Botón de Bootstrap en la web]_
> **Insertar imagen aquí:** `![Componente Bootstrap](ruta/a/la/imagen.png)`

---

## 4. Diseño y UX: Color, Tipografía y Leyes de Gestalt

Se han seguido principios modernos de diseño, haciendo especial hincapié en la UX en entornos Responsive.

### 4.1. Tipografía y Google Fonts
Siguiendo las recomendaciones de legibilidad, se evitó la tipografía por defecto en favor de una fuente _Sans-Serif_ geométrica optimizada para pantallas pequeñas.
* **Fuente Escogida:** `Inter` (Google Fonts).
* **Justificación:** Es una de las fuentes más legibles a nivel mundial (creada específicamente para interfaces informáticas), soporta múltiples pesos (`300`, `400`, `500`, `600`, `700`) y encaja en la recomendación de "Tendencias Actuales" (diseño claro y minimalista).

### 4.2. Teoría del Color y Códigos
El proyecto cuenta con dos paletas armónicas configuradas usando CSS Variables que permiten a la página transicionar suavemente entre "Light Mode" y "Dark Mode".

*   **Color Primario (Acento):** `#d4a373` - Un tono arena/ocre que transmite creatividad y elegancia, ofreciendo buen contraste tanto para textos oscuros como claros.
*   **Tema Claro (Light Mode):**
    *   Fondo Base (`--bg-color`): `#f8f7f6` (Blanco roto).
    *   Texto Principal (`--text-color`): `#0f172a` (Negro deslavado).
    *   Fondo Tarjetas (`--card-bg`): `#f1f5f9`.
*   **Tema Oscuro (Dark Mode):**
    *   Fondo Base (`--bg-color`): `#121212` (Gris casi negro, recomendado en Material Design).
    *   Texto Principal (`--text-color`): `#f8fafc` (Blanco suave).
    *   Fondo Tarjetas (`--card-bg`): `#1e1e1e`.

_[Espacio para Captura de Pantalla: Comparativa Claro vs Oscuro o detalle CSS `:root`]_
> **Insertar imagen aquí:** `![Modo Claro y Oscuro](ruta/a/la/imagen.png)`

### 4.3. Aplicación de las Leyes de Gestalt
_Aquí explicas cómo el usuario percibe automáticamente tu estructura gracias a la Gestalt._
* **Ley de Proximidad:** Los elementos relacionados (ej: Título de un proyecto, su imagen y su descripción) se muestran juntos en "Tarjetas" (Cards) con espacios definidos internamente, asumiendo el ojo humano que forman parte de lo mismo.
* **Ley de Semejanza:** Todas las "Cards" de proyectos comparten el mismo estilo, tamaño de fuente e interrupciones redondeadas (`.rounded-4`). Además, la tipografía jerarquiza semejanza (mismo color y grosor para títulos).
* **Ley de Simetría/Destino Común:** La navegación inferior (Bottom Nav) dispone 4 iconos espaciados exactamente de forma simétrica (`.justify-content-between`), creando equilibrio y entendiendo el usuario instintivamente que componen el bloque de navegación.
* **Ley de Continuidad (o de buena forma):** La hilera de Estadísticas permite que se vean ligeramente cortadas a la derecha (`.overflow-x-auto`), lo que le "dice" instintivamente al cerebro humano que hay más información hacia los lados, invitándolo a hacer _swipe_ o scroll horizontal.

---

## 5. Cumplimiento de Normativas Accesibilidad (WCAG)

Para asegurar que la web pueda ser usada plenamente por el máximo número de usuarios, se aplicaron las siguientes directrices extraídas de WCAG (Web Content Accessibility Guidelines):

1. **Contraste de Color (WCAG 1.4.3):** La utilización de modos oscuros y claros con variables específicas persigue mantener un contraste óptimo entre los textos y fondos.
2. **Ajuste de Zoom de Navegadores (WCAG 1.4.4):** Se usan contenedores líquidos (Bootstrap) y sistema de fuentes `rem` / utilidades relativas para que la página soporte hasta un 200% de aumento de fuente en los dispositivos.
3. **No Dependencia del Color (WCAG 1.4.1):** Enlaces (ej. "View all") además de estar de un color acentuado, cuentan con espaciados y jerarquías que determinan por sentido común qué hacen, sin depender únicamente de "ver su color".
4. **Semántica HTML5 (WCAG 1.3.1):** Sustitución de `div` globales por `<header>`, `<nav>`, `<section>` y `<article>`, lo que mejora dramáticamente el SEO y la lectura en programas TTS (Text-To-Speech) o lectores de pantalla.
5. **Alternativas Gráficas (WCAG 1.1.1):** Uso recomendado en imágenes (o divs convertidos para imágenes) para proveer un texto alternativo si la imagen no carga por motivos de ancho de banda o en lectores no visuales.

_[Espacio para Captura de Pantalla: Análisis en Lighthouse o panel "Elements" viendo etiquetas tipo <article>]_
> **Insertar imagen aquí:** `![Semántica y Accesibilidad](ruta/a/la/imagen.png)`

---

## 6. Problemas Encontrados y Soluciones Aplicadas

### Problema 1: Rotura del anclaje `.sticky-top` por el desbordamiento oculto.
**Descripción:** Al aplicar utilidades globales para ocultar los scrollbars horizontales causados por ciertos márgenes de Bootstrap (un error muy común de maquetación móvil), descubrí que aplicar `.overflow-x-hidden` o `.overflow-hidden` a un div padre rompía temporalmente la capacidad de anclaje (`position: sticky`) de la barra de navegación `<header>`.
**Solución:** Estudiando cómo procesan los navegadores modernos los contextos de bloqueo, logré solucionarlo al nivel de etiqueta superior colocando el recorte general del desbordamiento en la etiqueta maestra `<body>`, dejando que los divs hijos aniden el `position: sticky` sin conflictos técnicos.

### Problema 2: Ejecutar lógica Javascript Vanilla de manera asíncrona pero segura.
**Descripción:** Siguiendo la premisa del requisito técnico del proyecto que solicitaba JavaScript Vanilla, necesitaba asegurar la carga interactiva (cambio de modo oscuro) del DOM sin congelar la primera visualización gráfica del usuario (Screen Paint Block).
**Solución:** Opté por usar el atributo `<script defer src="...">` en la cabecera del documento y encapsular la lectura del JS en un evento nativo `DOMContentLoaded`. `defer` permite que el navegador descargue en paralelo el archivo mientras lee la estructura visual de HTML, mejorando considerablemente las estadísticas de carga del _portfolio_.

>[!NOTE] Ley de Cookies (Nota Requisito EDP2)
> *Recuerda que dentro del prototipo o directamente en la Memoria debes justificar la necesidad del aviso de cookies de la web si empleas seguimiento, de lo contrario bastará un aviso de exención estática según se requiera*.

---

## 7. Referencias, Bibliografía y Fuentes Externas

Para el desarrollo del proyecto y la inclusión gráfica directa o indirecta he empleado código libre y recursos de:

* **Documentación Bootstrap 5.3:** [https://getbootstrap.com/docs/5.3/](https://getbootstrap.com/docs/5.3/)
* **Documentación Bootstrap Icons:** [https://icons.getbootstrap.com/](https://icons.getbootstrap.com/)
* **Google Fonts (Inter):** [https://fonts.google.com/specimen/Inter](https://fonts.google.com/specimen/Inter)
* **W3C Base WCAG 2.1:** [https://www.w3.org/TR/WCAG21/](https://www.w3.org/TR/WCAG21/)
* **Repositorio de Github Pages de la Entrega:** _[Pon tu URL GITHUB PAGES AQUÍ]_
