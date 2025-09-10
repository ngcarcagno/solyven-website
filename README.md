# Solyven Website

Este proyecto es una aplicación web desarrollada con React. A continuación, se describe la estructura del proyecto y cómo interactúan sus componentes principales.

---

## Estructura del Proyecto

### **1. Navegador**

El navegador carga el archivo `index.html` y los bundles generados por React.

### **2. Aplicación React**

La aplicación React está dividida en varias capas:

#### **2.1 Capa de Enrutamiento**

- **Router**: Gestiona las rutas de la aplicación y redirige a las páginas correspondientes.

#### **2.2 Páginas**

- **Home Page**: Página principal que contiene los bloques y secciones principales.

#### **2.3 Componentes de Funcionalidad**

- **Backgrounds**: Gestiona los fondos de las secciones.
- **ContactForm**: Formulario de contacto.
- **HeroSection**: Sección destacada de la página.
- **Header**: Encabezado de la página.
- **Footer**: Pie de página.
- **ContentBlock**: Bloques de contenido reutilizables.
- **Block**: Bloques individuales.
- **MiddleBlock**: Bloques centrales.
- **SecurityCamera**: Componente animado de cámara de seguridad.

#### **2.4 Primitivas de UI Comunes**

- **Button**: Botones reutilizables.
- **Container**: Contenedores para organizar el diseño.
- **Input**: Campos de entrada.
- **TextArea**: Áreas de texto.
- **SvgIcon**: Íconos SVG.
- **ScrollToTop**: Componente para volver al inicio de la página.
- **useForm Hook**: Hook personalizado para manejar formularios.
- **validationRules**: Reglas de validación para formularios.

---

## Flujo de Datos

### **1. Capa de Datos Estáticos**

- **Content JSON**: Archivos JSON que contienen el contenido estático de la aplicación.
- **Locale JSON**: Archivos JSON para la localización (traducciones).

### **2. Capa de Recursos**

- **Fonts**: Fuentes utilizadas en la aplicación.
- **Images & Icons**: Imágenes e íconos estáticos.
- **index.html**: Archivo HTML principal que carga la aplicación.

---

## Interacciones Externas

- **Contact API**: El formulario de contacto envía datos a una API externa.

---

## Enlaces a Archivos Clave

- [Router](https://github.com/ngcarcagno/solyven-website/blob/main/src/router/index.tsx)
- [Home Page](https://github.com/ngcarcagno/solyven-website/blob/main/src/pages/Home/index.tsx)
- [Footer](https://github.com/ngcarcagno/solyven-website/blob/main/src/components/Footer/index.tsx)
- [Fonts](https://github.com/ngcarcagno/solyven-website/tree/main/public/fonts)
- [Images](https://github.com/ngcarcagno/solyven-website/tree/main/public/img)

---

## Cómo Contribuir

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Ejecuta el servidor de desarrollo con `npm start`.
4. Realiza tus cambios y envía un pull request.
