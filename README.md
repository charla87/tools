# Pequeñas herramientas para mejorar procesos

Web estática para publicar un portfolio en GitHub Pages.

## Archivos

```text
.
├── index.html
├── styles.css
├── script.js
├── .nojekyll
└── assets/
```

## Cómo publicarla en GitHub Pages

1. Crea un repositorio en GitHub.
   - Opción recomendada: `pequenas-herramientas`
   - También puedes usar `tuusuario.github.io` si quieres que sea tu web principal.

2. Sube estos archivos al repositorio.

3. En GitHub:
   - Entra en el repositorio.
   - Ve a **Settings**.
   - Ve a **Pages**.
   - En **Build and deployment**, elige:
     - Source: **Deploy from a branch**
     - Branch: **main**
     - Folder: **/root**
   - Guarda.

4. La web estará disponible en una URL tipo:

```text
https://tuusuario.github.io/pequenas-herramientas/
```

O, si el repositorio se llama `tuusuario.github.io`:

```text
https://tuusuario.github.io/
```

## Qué editar primero

En `index.html`:

- Cambia `Process Tools` por tu nombre o marca.
- Cambia el email de contacto:
  - Busca `tu-email@ejemplo.com`
- Cambia los textos de cada proyecto.
- Añade enlaces reales si quieres mostrar demos, repositorios o vídeos.

## Recomendación

No publiques datos internos, rutas de empresa, tokens, credenciales, documentos reales o información sensible.
Para demos reales con Python, usa una Raspberry/servidor separado con acceso protegido.
