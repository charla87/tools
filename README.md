# Process Tools Portfolio

Portfolio público en React + Vite para GitHub Pages.

## URL prevista

Este proyecto está preparado para publicarse en:

```text
https://charla87.github.io/tools/
```

Por eso `vite.config.js` usa:

```js
base: "/tools/"
```

Si cambias el nombre del repositorio, cambia también esa línea.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Publicación en GitHub Pages

1. Sube estos archivos al repositorio.
2. Ve a:

```text
Settings → Pages
```

3. Cambia **Source** a:

```text
GitHub Actions
```

4. Haz push a `main`.
5. Revisa la pestaña **Actions** para confirmar que el despliegue termina en verde.

## Editar proyectos

Los proyectos se editan en:

```text
src/data/projects.js
```

Cada proyecto tiene esta estructura:

```js
{
  title: "Nombre del proyecto",
  categories: ["Python", "Documentos"],
  tags: ["Python", "PDF"],
  summary: "Resumen corto",
  problem: "Problema que resuelve",
  input: "Qué recibe",
  automation: "Qué automatiza",
  output: "Qué entrega",
  impact: "Qué mejora"
}
```

## Seguridad

No publiques rutas internas, tokens, documentos reales de empresa, APIs privadas ni datos sensibles.
Este portfolio es público.
