# Emmanuel Rueda — Data Analytics Portfolio (Astro + Vercel)

Un portafolio profesional moderno construido con **Astro** y hosteado en **Vercel**. 100% gratis, sin costos mensuales, con deploy automático desde GitHub.

## ✨ Features

- ⚡ **Ultra-rápido**: Astro optimiza por defecto
- 🌙 **Dark mode elegante**: perfecto para portfolios tech
- 📱 **Responsive**: funciona perfectamente en mobile
- 🤖 **PAIR Bot integrado**: chatbot interactivo embebido
- 🎨 **Profesional**: color scheme naranja + dark blue
- 🚀 **Deployment automático**: cada push a GitHub = sitio actualizado
- 💰 **100% gratis**: Vercel + Astro = zero costo

## 📁 Estructura del Proyecto

```
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Layout base con navbar y footer
│   ├── pages/
│   │   ├── index.astro           # Página principal (hero + PAIR Bot)
│   │   ├── about.astro           # About, educación, timeline
│   │   ├── projects.astro        # Proyectos profesionales y académicos
│   │   └── skills.astro          # Skills con proficiency bars
│   └── components/               # (Futuro: componentes reutilizables)
├── public/                       # Imágenes, icons, etc.
├── astro.config.mjs             # Config de Astro
├── package.json                 # Dependencies
└── README.md                    # Este archivo
```

## 🚀 Primeros Pasos

### Requisitos
- Node.js 18+ (descargar de https://nodejs.org)
- Git (descargar de https://git-scm.com)
- Cuenta de GitHub
- Cuenta de Vercel (gratuita, https://vercel.com)

### 1. Clonar o crear el repo

Si tienes un repo existente:
```bash
git clone https://github.com/EmmanuelRE8/portfolio
cd portfolio
```

Si es nuevo:
```bash
mkdir portfolio
cd portfolio
git init
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Correr en desarrollo local

```bash
npm run dev
```

Abre tu navegador en **http://localhost:3000**. Verás tu portafolio en vivo.

Cuando hagas cambios en los archivos `.astro`, el sitio se actualizará automáticamente en el navegador.

### 4. Build para producción

```bash
npm run build
```

Esto crea la carpeta `dist/` con los archivos estáticos listos para Vercel.

## 📝 Personalización

### Cambiar datos personales

Edita estas secciones en cada archivo `.astro`:

**`src/pages/index.astro`**:
- Hero title: `<h1>Emmanuel Rueda</h1>`
- Tagline: `<p class="tagline">...`
- Descripción: `<p class="subtitle">...`

**`src/pages/about.astro`**:
- Info profesional en "Who I Am"
- Timeline: edita `<div class="timeline-item">` para agregar/cambiar empleos
- Education: actualiza las 3 maestrías/bachelor
- Location: cambia "Oshawa, Ontario" si es necesario

**`src/pages/projects.astro`**:
- Cada proyecto es una `<div class="project-card">`
- Copia/pega cards y cambia título, descripción, tags

**`src/pages/skills.astro`**:
- Tech stack: busca `.stack-item` y actualiza herramientas
- Proficiency bars: cambia `width="95%"` para ajustar niveles de dominio

### Cambiar colores

Edita `:root` en `src/layouts/Layout.astro`:

```css
:root {
  --color-bg: #0f172a;              /* Fondo principal (azul oscuro) */
  --color-bg-secondary: #1e293b;    /* Fondo secundario (más claro) */
  --color-text: #f1f5f9;            /* Texto blanco */
  --color-accent: #f59e0b;          /* Color naranja (acentos) */
  --color-accent-dark: #d97706;     /* Naranja oscuro (hover) */
}
```

Ejemplo: cambiar naranja a teal:
```css
--color-accent: #14b8a6;        /* Teal */
--color-accent-dark: #0d9488;   /* Teal oscuro */
```

### Agregar secciones nuevas

1. Crea un nuevo archivo en `src/pages/nueva-seccion.astro`
2. Copia el template de otra página
3. Actualiza el `<Layout title="...">` y el contenido
4. Agrega link en la navbar en `src/layouts/Layout.astro`

Ejemplo:
```html
<li><a href="/nueva-seccion">Nueva Sección</a></li>
```

### Cambiar el PAIR Bot

El PAIR Bot está embebido con un `<iframe>`:

```html
<iframe 
  src="https://emmanuelre8.github.io/PAIR_Bot/" 
  title="PAIR Bot - Personal AI Résumé"
  class="pair-iframe"
></iframe>
```

Si quieres cambiar la altura (default 600px):

```css
.pair-iframe {
  height: 600px;  /* Cambia este valor */
}
```

O cambiar el URL si hospeadas tu bot en otro lugar.

## 🌐 Deployment en Vercel

### Opción A: Conectar GitHub a Vercel (recomendado)

1. **Sube tu repo a GitHub**:
```bash
git add .
git commit -m "Initial portfolio"
git push origin main
```

2. **Ve a https://vercel.com y login con GitHub**

3. **Click en "New Project"** y selecciona tu repo

4. **Vercel auto-detecta Astro** — no necesitas cambiar nada, click "Deploy"

5. **Listo**: En 1-2 minutos tu sitio estará en vivo en una URL como:
   - `https://portfolio-xxxxx.vercel.app`

### Opción B: Manual (sin GitHub)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Sigue las prompts. Tu sitio estará online en minutos.

## 🔗 Dominio personalizado

Si quieres `emmanuelrueda.com` en lugar de `portfolio-xxxxx.vercel.app`:

1. Compra un dominio (GoDaddy, Namecheap, etc., ~$10/año)
2. En Vercel dashboard → Settings → Domains
3. Agrega tu dominio y sigue las instrucciones de DNS

## 📊 Analytics (Opcional)

Para trackear visitas, agrega Google Analytics o Vercel Analytics:

**Opción 1: Google Analytics**
- Crea una cuenta en https://analytics.google.com
- Obtén tu "Measurement ID"
- Agrega esto en `<head>` de `src/layouts/Layout.astro`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Opción 2: Vercel Analytics**
- Es automático, no requiere config
- Dashboard en Vercel mostrará visitas

## 📧 Form de contacto (Futuro)

Si quieres agregar un form que envíe emails:

**Opción 1: Formspree** (gratis, simple)
- Ve a https://formspree.io
- Crea un form y obtén el endpoint
- Agrega a tu página

**Opción 2: Nodemailer + Serverless** (más control)
- Requiere setup más complejo

Por ahora, los links de email directo (`mailto:`) son suficientes.

## 🔄 Actualizaciones

Para actualizar tu sitio:

1. Edita los archivos `.astro` localmente
2. Test en tu navegador: `npm run dev`
3. Commit y push:
```bash
git add .
git commit -m "Update projects"
git push origin main
```
4. Vercel auto-deploya en segundos ✨

## ⚙️ Troubleshooting

### "npm install" no funciona
- Asegúrate de tener Node.js 18+ instalado
- Intenta: `npm install --legacy-peer-deps`

### El sitio se ve diferente en Vercel
- Vercel corre `npm run build` automáticamente
- Si hay errores, verás en el dashboard de Vercel
- Revisa el build log: Vercel Dashboard → Deployments → Logs

### PAIR Bot no carga
- Verifica que tu iframe URL sea correcta
- Revisa la consola del navegador (F12) para errores

### Cambios no aparecen
- Astro cachea, intenta: Ctrl+Shift+R (hard refresh)
- Si no funciona, espera 1 minuto y recarga

## 📚 Recursos

- **Astro Docs**: https://docs.astro.build
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind (si lo usas)**: https://tailwindcss.com/docs
- **GitHub Pages (alternativa a Vercel)**: https://pages.github.com

## 🎯 Próximos Pasos

1. ✅ Personaliza los datos (About, Projects, Skills)
2. ✅ Agrega tu foto si quieres (en `public/`)
3. ✅ Conecta GitHub a Vercel
4. ✅ Comparte tu URL en LinkedIn/CV
5. ✅ Agrega Google Analytics si quieres trackear

## 📄 Licencia

Este portafolio es tuyo, úsalo como quieras.

---

**¿Preguntas?** Revisa la docs de Astro o contacta a tu ayudante (Claude).

**¡Buena suerte! 🚀**
