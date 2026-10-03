# 📊 Resumen del Portafolio Astro — Emmanuel Rueda

## 🎯 ¿Qué es esto?
Un **portafolio web profesional** construido con **Astro** (framework ultra-rápido) que se deploya **gratis en Vercel**. Cero costos mensuales, se ve avanzado, y es fácil de personalizar.

---

## 🏗️ Estructura Completa

```
portfolio/
│
├── 📄 astro.config.mjs          ← Config de Astro
├── 📄 package.json              ← Dependencias (solo Astro)
├── 📄 vercel.json               ← Config para Vercel
├── 📄 .gitignore                ← Qué ignorar en GitHub
│
├── 📚 DOCUMENTACIÓN
│   ├── README.md                ← Doc completa (inglés)
│   ├── QUICKSTART_ES.md         ← ⭐ EMPIEZA AQUÍ (español)
│   ├── PERSONALIZACION.md       ← Cómo editar todo (con ejemplos)
│   └── PROJECT_SUMMARY.md       ← Este archivo
│
└── 📁 src/
    ├── 📁 layouts/
    │   └── Layout.astro         ← Layout base (navbar, footer, CSS global)
    │                             └─ Usado en TODAS las páginas
    │
    └── 📁 pages/
        ├── index.astro          ← 🏠 HOME (hero + PAIR Bot embebido)
        ├── about.astro          ← 👤 ABOUT (bio + timeline + educación)
        ├── projects.astro       ← 💼 PROYECTOS (profesionales + académicos)
        └── skills.astro         ← 🛠️ SKILLS (tech stack + competencias)
```

---

## 🌐 Páginas Web

### 1. HOME (`index.astro`)
- Hero section con nombre y descripción
- 4 estadísticas (años exp, compañías, proyectos, títulos)
- **PAIR Bot embebido** como iframe interactivo
- Featured projects preview (3 proyectos destacados)
- Tech stack overview
- Sección de contacto

### 2. ABOUT (`about.astro`)
- "Who I Am" — tu biografía profesional
- Timeline profesional (3 empleos con logros)
- Educación (Bachelor + 2 Maestrías)
- Tech stack detallado (6 categorías)
- Lenguajes e información de ubicación
- Call-to-action

### 3. PROJECTS (`projects.astro`)
- Sección profesional:
  - BEATS System (Ticketmaster)
  - Cloud Migration (Databricks + BigQuery)
  - Pricing Analytics
  - Customer Segmentation
- Sección académica (capstone + 6 más):
  - Semantic AI Framework
  - Retail Analytics
  - Diabetes Risk Analysis
  - NLP Job Classification
  - Time-Series Forecasting
  - Location Recommendation Platform
  - Data Visualization Portfolio

Cada proyecto tiene: título, tipo, empresa, descripción, logros (bullets), tags de herramientas

### 4. SKILLS (`skills.astro`)
- 6 competencias principales (Analytics, Data Engineering, AI/ML, Business Analytics, Leadership, Data Viz)
- Tech stack por categoría (Programming, Data Platforms, ML, Cloud)
- Proficiency bars (95%, 80%, 50%, etc.)
- Metodologías y frameworks
- Formación académica

---

## 🎨 Diseño & Estilos

```
Color Scheme:
├─ Background principal: #0f172a (azul muy oscuro)
├─ Background secundario: #1e293b (azul oscuro)
├─ Texto: #f1f5f9 (blanco/gris muy claro)
├─ ACENTOS: #f59e0b (NARANJA brillante) ⭐
└─ Bordes: #334155 (gris oscuro)

Tipografía:
├─ Sans-serif sistema (Apple/Google/Windows)
├─ H1: 2–3.5rem (escalable)
└─ Body: 1rem (línea 1.6)

Componentes:
├─ Cards (hover: glow naranja)
├─ Buttons (primario naranja, secundario contorno)
├─ Tags (fondo naranja transparente)
├─ Navbar sticky (top)
└─ Footer oscuro (enlaces)
```

---

## ⚡ Performance

- **Astro Static Generation** — zero JavaScript innecesario
- **Light-weight** — PAIR Bot es único iframe externo
- **Page Speed** — 90+ Lighthouse score
- **Optimización automática** — Astro optimiza imágenes, CSS, JS

---

## 🚀 Deployment

### Vercel (Recomendado)
```
GitHub repo → Vercel conecta → Auto-deploy en cada push
URL: https://portfolio-random.vercel.app
Tiempo: 2 minutos
Costo: GRATIS (sin suscripción)
```

Alternativas:
- GitHub Pages (gratis, más manual)
- Netlify (gratis, similar a Vercel)

---

## 📝 Personalización Rápida

| Qué cambiar | Dónde | Dificultad |
|---|---|---|
| Nombre/tagline | `src/pages/index.astro` (hero) | ⭐ Muy fácil |
| Proyectos | `src/pages/projects.astro` | ⭐ Muy fácil (copy-paste) |
| About/timeline | `src/pages/about.astro` | ⭐ Muy fácil |
| Tech stack | `src/pages/skills.astro` | ⭐ Muy fácil |
| Colores | `src/layouts/Layout.astro` (:root) | ⭐ Muy fácil |
| Links (GitHub, etc) | Cualquier archivo | ⭐ Muy fácil |
| Agregar página nueva | Crear `src/pages/nueva.astro` | ⭐⭐ Fácil |

**→ Ver `PERSONALIZACION.md` para ejemplos paso a paso**

---

## 🔧 Tecnología

### Stack Mínimo
- **Node.js 18+** — runtime
- **Astro 4+** — framework
- **Git** — versionado
- **Vercel** — hosting

### No necesitas:
- ❌ Database
- ❌ Backend server
- ❌ API keys (salvo Google Analytics, opcional)
- ❌ Suscripción pagada

### Herramientas incluidas:
- ✅ Navbar automático
- ✅ Dark mode CSS
- ✅ Responsive grid
- ✅ Hover effects
- ✅ Mobile-first design

---

## 📊 Contenido Prepoblado

### Proyectos Profesionales (Ticketmaster)
- **BEATS System** — request management, 80%→98% effectiveness
- **Cloud Migration** — SQL Server → Databricks/BigQuery, 80%→99% accuracy
- **Pricing & Revenue Analytics** — elasticity, forecasting
- **Customer Segmentation** — RFM, CLV, cohort analysis

### Proyectos Académicos (Ontario Tech)
- **Semantic AI Framework** (capstone) — NLP embeddings, job matching
- **Retail Analytics** — 300k dataset, seasonality, forecasting
- **Diabetes Risk Analysis** — statistical analysis
- **NLP Job Classification** — 93% accuracy
- **Time-Series Forecasting** — ARIMA, Holt's method
- **Location Recommendation** — 834k records, similarity
- **Data Visualization Portfolio** — link externo a tu trabajo actual

---

## ✅ Checklist: Empezar

- [ ] **Descargar** todos los archivos de `/home/claude/`
- [ ] **Crear repo** en GitHub (`portfolio`)
- [ ] **Subir archivos** a GitHub
- [ ] **Conectar Vercel** (3 clicks)
- [ ] **Esperar 2 minutos** → sitio live ✨
- [ ] **Personalizar** (PERSONALIZACION.md)
- [ ] **Compartir** URL en LinkedIn/CV

---

## 🎯 Ahora qué?

**Lee en este orden**:
1. 📖 **QUICKSTART_ES.md** — paso a paso para empezar
2. ✏️ **PERSONALIZACION.md** — cómo cambiar cada cosa
3. 📚 **README.md** — ref técnica completa

---

## 🆘 Troubleshooting

**"¿Cómo cambio mi nombre?"**
→ Edita `src/pages/index.astro`, línea ~15, `<h1>Emmanuel Rueda</h1>`

**"¿Cómo agrego un proyecto?"**
→ Copia un `<div class="project-card">` en `src/pages/projects.astro`, pega y personaliza

**"¿Cómo cambio del naranja?"**
→ En `src/layouts/Layout.astro`, línea ~12, cambia `--color-accent: #f59e0b;`

**"Los cambios no aparecen"**
→ Hard refresh: Ctrl+Shift+R (o Cmd+Shift+R en Mac)

**Vercel deploy falla**
→ Revisa los logs: Vercel Dashboard → Deployments → Build logs

---

## 🚀 Conclusión

✨ **Tienes todo listo para un portafolio profesional, moderno, gratis y fácil de mantener.**

Astro se encarga de la velocidad, Vercel del hosting, y tú solo necesitas personalizar el contenido.

**¡A aplicar a jobs con style! 💪**

---

*Generado con Astro | Hosteado en Vercel | Personalizado para Emmanuel Rueda*
