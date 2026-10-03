# 🎨 Personalización del Portafolio — Ejemplos Paso a Paso

## 1️⃣ Cambiar tu nombre en la página principal

**Archivo**: `src/pages/index.astro`

**Busca esta línea** (alrededor de la línea 15):
```html
<h1>Emmanuel Rueda</h1>
```

**Cámbiala por**:
```html
<h1>Tu Nombre</h1>
```

**Guarda el archivo** (Ctrl+S) y verás el cambio en http://localhost:3000 en segundos.

---

## 2️⃣ Cambiar la descripción (tagline)

**Archivo**: `src/pages/index.astro`

**Busca**:
```html
<p class="tagline">Data Analytics & Business Intelligence Leader</p>
```

**Cámbiala por**:
```html
<p class="tagline">Tu título o descripción aquí</p>
```

---

## 3️⃣ Agregar un proyecto nuevo

**Archivo**: `src/pages/projects.astro`

**Busca la sección "Professional Projects"** (alrededor de la línea 40)

**Copia este template**:
```html
<div class="project-card">
  <div class="project-header">
    <h3>NOMBRE DE TU PROYECTO</h3>
    <span class="project-type">Categoría (ej: Data Engineering)</span>
  </div>
  <p class="company">Empresa | Ubicación</p>
  <div class="project-description">
    <p>
      Descripción breve (1-2 líneas) del proyecto.
    </p>
    <ul>
      <li>Logro o resultado #1</li>
      <li>Logro o resultado #2</li>
      <li>Logro o resultado #3</li>
    </ul>
  </div>
  <div class="tags">
    <span class="tag">Herramienta1</span>
    <span class="tag">Herramienta2</span>
    <span class="tag">Herramienta3</span>
  </div>
</div>
```

**Pégalo después de otro project-card** y personaliza:
- Título del proyecto
- Empresa/ubicación
- Descripción
- Logros (ul/li items)
- Tags (herramientas usadas)

---

## 4️⃣ Actualizar tu información de About

**Archivo**: `src/pages/about.astro`

### Cambiar "Who I Am"
**Busca** (línea ~30):
```html
<p>
  I'm a Business Intelligence and Data Analytics leader with 5+ years of experience...
</p>
```

Reemplaza con tu historia (1-2 párrafos).

### Cambiar educación
**Busca la sección "Education"** (alrededor de línea 150)

Ejemplo:
```html
<div class="education-card">
  <h3>MBAI in Business Analytics & AI</h3>
  <p class="school">Ontario Tech University</p>
  <p class="details">Completed 2026</p>
  <p>
    Descripción de lo que estudiaste...
  </p>
</div>
```

Personaliza los 3 cards con tus títulos (Bachelor, Maestría, etc.)

### Cambiar experiencia laboral (Timeline)
**Busca la sección "Professional Journey"** (alrededor de línea 90)

Ejemplo de un item:
```html
<div class="timeline-item">
  <div class="timeline-marker"></div>
  <div class="timeline-content">
    <h3>Tu Cargo — Tu Empresa</h3>
    <p class="timeline-period">~2 años</p>
    <p>
      Descripción breve de lo que hiciste y logriste.
    </p>
    <ul>
      <li>Logro 1</li>
      <li>Logro 2</li>
      <li>Logro 3</li>
    </ul>
  </div>
</div>
```

Copia/pega este template para cada trabajo anterior.

---

## 5️⃣ Actualizar tus skills

**Archivo**: `src/pages/skills.astro`

### Cambiar "Core Competencies"

**Busca** (línea ~35):
```html
<div class="competency">
  <h3>📊 Analytics & BI</h3>
  <p>Building dashboards, designing metrics...</p>
  <div class="skills-list">
    <span class="skill">Tableau</span>
    <span class="skill">Looker Studio</span>
    ...
  </div>
</div>
```

Personaliza:
- Emoji y categoría (h3)
- Descripción (p)
- Skills (span class="skill")

### Cambiar proficiency bars

**Busca la sección "Technical Stack"** (alrededor de línea 120)

Cada stack item tiene un `width`:
```html
<div class="stack-item">
  <span class="proficiency-bar">
    <span class="bar-fill" style="width: 95%"></span>
  </span>
  <p><strong>Python</strong> — Advanced</p>
</div>
```

- `width: 95%` = Advanced (muy bueno)
- `width: 75%` = Intermediate (medio)
- `width: 50%` = Beginner (principiante)

Cambia el `width` y el texto (Advanced/Intermediate/Beginner) según corresponda.

---

## 6️⃣ Cambiar colores del sitio

**Archivo**: `src/layouts/Layout.astro`

**Busca** (alrededor de línea 12):
```css
:root {
  --color-bg: #0f172a;              /* Fondo principal */
  --color-bg-secondary: #1e293b;    /* Fondo secundario */
  --color-text: #f1f5f9;            /* Texto */
  --color-accent: #f59e0b;          /* NARANJA (acentos) */
  --color-accent-dark: #d97706;     /* Naranja oscuro */
  --color-border: #334155;          /* Bordes */
}
```

**Ejemplo: cambiar naranja a azul**
```css
--color-accent: #3b82f6;            /* Azul brillante */
--color-accent-dark: #1d4ed8;       /* Azul oscuro */
```

**Paletas de colores rápidas**:
- Rojo: `#ef4444` / `#dc2626`
- Verde: `#10b981` / `#059669`
- Púrpura: `#8b5cf6` / `#6d28d9`
- Teal: `#14b8a6` / `#0d9488`

---

## 7️⃣ Cambiar la descripción en el navbar/footer

**Archivo**: `src/layouts/Layout.astro`

**Busca** (línea ~270, en el footer):
```html
<p>Data Analytics & Business Intelligence Leader</p>
```

Cámbiala.

También busca (línea ~210, en el navbar):
```html
<a href="/" class="logo">Emmanuel</a>
```

Puedes cambiar "Emmanuel" a tu nombre o iniciales.

---

## 8️⃣ Agregar una foto (opcional)

1. Guarda una foto tuya en `public/foto.jpg` (o el nombre que prefieras)
2. En `src/pages/index.astro`, busca la sección hero
3. Agrega esto dentro de `<div class="hero-content">`:

```html
<img src="/foto.jpg" alt="Emmanuel" class="hero-photo">
```

4. En el CSS (al final del archivo), agrega:

```css
.hero-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid var(--color-accent);
  margin-bottom: 2rem;
  object-fit: cover;
}
```

---

## 9️⃣ Cambiar links (GitHub, LinkedIn, Email)

**Busca en cualquier página**:
```html
<a href="https://github.com/EmmanuelRE8" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/emmanuelre" target="_blank">LinkedIn</a>
<a href="mailto:emmanuel.ruedaescalona@ontariotechu.net">Email</a>
```

Reemplaza con tus propios URLs.

---

## 🔟 Cambiar el PAIR Bot por otro URL

**Archivo**: `src/pages/index.astro`

**Busca** (alrededor de línea 65):
```html
<iframe 
  src="https://emmanuelre8.github.io/PAIR_Bot/" 
  ...
></iframe>
```

Cambia el `src` si quieres usar un bot diferente.

---

## ✅ Checklist de Personalización

- [ ] Cambié mi nombre en index.astro
- [ ] Actualicé mi descripción (tagline)
- [ ] Edité la sección "About Me"
- [ ] Agregué/actualicé mis proyectos
- [ ] Cambié mi educación
- [ ] Actualicé mi experiencia laboral (timeline)
- [ ] Personalicé mis skills y proficiency
- [ ] Cambié links (GitHub, LinkedIn, Email)
- [ ] Probé en local: `npm run dev`
- [ ] Hice commit y push a GitHub
- [ ] Vercel auto-deployó

---

## 🆘 "No sé dónde editar X"

1. Abre `src/pages/index.astro`, `about.astro`, `projects.astro` o `skills.astro`
2. Busca con Ctrl+F el texto que ves en el navegador
3. Cambialo, guarda (Ctrl+S)
4. Recarga el navegador (F5)

---

## 📍 Estructura rápida de dónde editar qué

| Qué quiero cambiar | Archivo | Sección |
|---|---|---|
| Nombre/tagline principal | `src/pages/index.astro` | Hero |
| About/educación/experiencia | `src/pages/about.astro` | Cualquier sección |
| Proyectos | `src/pages/projects.astro` | Professional/Academic |
| Skills | `src/pages/skills.astro` | Competencies/Tech Stack |
| Colores | `src/layouts/Layout.astro` | CSS `:root` |
| Links (GitHub, etc) | Cualquiera | `<a href="...">` |
| Footer/navbar | `src/layouts/Layout.astro` | Footer/navbar sections |

---

¡**Eso es todo!** Ahora tienes un portafolio profesional personalizado. 🚀
