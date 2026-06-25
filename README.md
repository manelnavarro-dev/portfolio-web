# Portfolio de Manel Navarro

Migración completa del portfolio original a **React + TypeScript + Vite**, manteniendo el diseño, las animaciones, el contenido y el comportamiento responsive de la versión HTML/CSS/JavaScript.

## Requisitos

- Node.js 20.19 o superior
- npm 10 o superior

## Arranque local

```bash
npm install
npm run dev
```

Vite mostrará la URL local, normalmente `http://localhost:5173`.

## Comandos disponibles

```bash
npm run dev        # servidor de desarrollo
npm run build      # validación TypeScript y build de producción
npm run preview    # vista previa del build
npm run lint       # ESLint
npm run typecheck  # comprobación de tipos
```

## Arquitectura

El proyecto usa una adaptación ligera de **Feature-Sliced Design**:

```text
src/
├── app/          # configuración general y router
├── pages/        # páginas completas
├── widgets/      # secciones grandes de la interfaz
├── features/     # comportamientos interactivos
├── entities/     # modelos, datos y UI de skills/proyectos
└── shared/       # configuración, hooks, utilidades, assets y UI común
```

Los datos de skills y proyectos están separados del JSX y tipados con TypeScript.

## Estilos

Para garantizar fidelidad visual, las hojas originales se conservan completas y sin fragmentarlas:

```text
public/css/normalize.css
public/css/styles.css
```

`normalize.css` se carga primero y `styles.css` después, exactamente igual que en el proyecto HTML original. Las fuentes locales permanecen en `public/fonts/`, por lo que las rutas relativas originales siguen funcionando.

## Rutas

- `/` — portfolio principal
- `/aviso-legal`
- `/privacidad`
- `/cookies`

También se mantienen las rutas antiguas para no romper enlaces existentes:

- `/index.html`
- `/legal-notice.html`
- `/privacy-policy.html`
- `/cookies.html`

## Despliegue en Netlify

El repositorio ya incluye:

- `netlify.toml`
- `public/_redirects`

Configuración esperada en Netlify:

```text
Build command: npm run build
Publish directory: dist
```

Al conectar el repositorio de GitHub, Netlify instalará las dependencias, ejecutará el build y publicará `dist` automáticamente.

## Archivos estáticos

- CSS original: `public/css/`
- CV: `public/docs/CV.pdf`
- Fuentes: `public/fonts/`
- Favicon: `public/favicon.png`
- Imágenes e iconos importados: `src/shared/assets/`
