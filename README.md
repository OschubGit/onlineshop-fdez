# ZRARA
Zrara es un proyecto realizado para el curso de coderhouse - React convocatoria 31225. 
El proyecto trata de un Eccommerce de moda, donde el usuario podrá navegar por la página principal y acceder a las diferentes categorías. También podrá simular la compra de un producto y ver las compras realizadas. Así mismo también podrá crear productos nuevos y añadirlos al catálogo.

## Descarga del proyecto
Se puede descargar el proyecto a través de una terminal, introduciendo:

`git clone https://github.com/OschubGit/onlineshop-fdez.git`

Después de ejecutar la clonación deberemos acceder a la carpeta del proyecto y instalar todas las dependencias necesarias con:

`npm install`

## Estructura
Podemos ver que el proyecto se divide en dos carpetas principales: public y src.
En la carpeta public tendremos el index.html y una carpeta images donde añadimos algunas imágenes de forma estática.

En la carpeta src se encuentra nuestro archivo padre index.js que incluye el App.js desde donde haremos todo el routing. En esta carpeta encontramos también cinco subcarpetas:

- Componentes: Donde guardaremos todos los componentes necesarios para la construcción de layouts y páginas. Podremos ver subcarpetas que contienen los componentes más específicos como botones, alerts...
- Containers: Son componentes que incluyen otros componentes para crear estructuras de páginas.
- Contexts: Aqui haremos las lógicas globales que incorporamos con useContext
- Scss: Incluimos todos los archivos necesarios para el estilado de la aplicación. 
- Utils: Archivos necesarios de configuración, generales y reutilizables para la app.

### Estilado Scss
Usamos la regla de 7 para estructurar el scss. Consiste de 7 carpetas (en nuestro caso 6 porque omitimos la carpeta theme) que dividen el scss por función. Base, componentes, utilities, views, layouts y un archivo en la raíz que contiene todas las importaciones de estos. Usaremos un sistema de diseño con CssGrid de 12 columnas.

### Package JSON
En el directorio raíz encontramos todas las dependencias instaladas con sus respectivas versiones.

    "dependencies": {
        "firebase": "^9.9.1",
        "hover-effect": "^1.1.0",
        "react": "^18.2.0",
        "react-gsap": "^3.2.1",
        "react-icons": "^4.4.0",
        "react-loader-spinner": "^5.1.5",
        "react-router-dom": "^6.2.0",
        "react-simple-image-viewer": "^1.2.2",
        "react-toastify": "^9.0.8",
        "swiper": "^8.3.2"
      },

Usaremos hover-effect y react-gsap para algunos efectos visuales en la página principal. React toastify para integrar algunas notificaciones. React-loader-spinner para los loadings. React-icons donde usaremos importaciones de iconos. Swiper para crear slides y react-simple-image-viewer para mostrar una galería de imágenes.

A parte firebase como gestión de datos en la nube y react-router-dom para el enrutado de navegación.

### Imágenes del proyecto + link de grabación de navegavilidad.

Pega el siguiente link en el navegador para descargarlo.
Link: https://firebasestorage.googleapis.com/v0/b/coderhouse-project-edffa.appspot.com/o/Grabacio%CC%81n%20de%20pantalla%202022-08-13%20a%20las%202.57.24.mov?alt=media&token=31b420e4-02bc-46d0-9fb7-8d790c8bcf4b

![screenshoot](https://firebasestorage.googleapis.com/v0/b/coderhouse-project-edffa.appspot.com/o/screely-1660351564146.png?alt=media&token=c269bc9e-07e7-4672-8217-07e4a527896b)

![screenshoot](https://firebasestorage.googleapis.com/v0/b/coderhouse-project-edffa.appspot.com/o/screely-1660351574073.png?alt=media&token=a858eb89-9778-43aa-8d97-cc71c29c1441)

![screenshoot](https://firebasestorage.googleapis.com/v0/b/coderhouse-project-edffa.appspot.com/o/screely-1660351582555.png?alt=media&token=8ce7355f-d718-4b29-8b82-a162f6de5bbb)

![screenshoot](https://firebasestorage.googleapis.com/v0/b/coderhouse-project-edffa.appspot.com/o/screely-1660351600087.png?alt=media&token=e99c04e6-d5ea-4605-882c-5be988eeef71)

![screenshoot](https://firebasestorage.googleapis.com/v0/b/coderhouse-project-edffa.appspot.com/o/screely-1660353361373.png?alt=media&token=5f03c34d-c472-478c-ab77-662bf80b30da)

![screenshoot](https://firebasestorage.googleapis.com/v0/b/coderhouse-project-edffa.appspot.com/o/screely-1660353732276.png?alt=media&token=a9631f54-c9e5-4195-beff-eca1dee65053)


