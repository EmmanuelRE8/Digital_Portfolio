# 🚀 Guía Rápida — Portafolio Astro en Vercel

## ¿Qué tienes?
✅ Astro (framework ultra-rápido)
✅ 5 páginas profesionales (Home, About, Projects, Skills, y contacto)
✅ PAIR Bot embebido
✅ Dark mode elegante
✅ Deployment gratis en Vercel

## Paso 1: Instalar Node.js
1. Ve a https://nodejs.org y descarga LTS (versión estable)
2. Instala
3. Abre terminal y escribe: `node --version` (debe mostrarte un número)

## Paso 2: Preparar tu repo en GitHub
1. Crea un repo nuevo en https://github.com/new
2. Nombre: `portfolio` (o el que prefieras)
3. Click "Create repository"
4. En tu terminal:
```bash
cd ~/Downloads  # o donde descargaste los archivos
git clone https://github.com/TU_USUARIO/portfolio.git
cd portfolio

# Copia todos los archivos que descargaste aquí
# (astro.config.mjs, package.json, src/, README.md, etc.)

git add .
git commit -m "Initial portfolio"
git push origin main
```

## Paso 3: Test local (opcional, pero recomendado)
```bash
npm install
npm run dev
```
Abre http://localhost:3000 y verás tu portafolio.

Prueba cambiar algo en `src/pages/index.astro` — ¡deberías ver el cambio en vivo!

## Paso 4: Deploy en Vercel (GRATIS)
1. Ve a https://vercel.com/signup
2. Click "Continue with GitHub"
3. Autoriza
4. Click "New Project"
5. Selecciona tu repo `portfolio`
6. Click "Deploy"
7. **¡Listo!** En 1-2 minutos tendrás una URL como `https://portfolio-abc123.vercel.app`

## Paso 5: Personaliza tu portafolio
Edita estos archivos:

**`src/pages/index.astro`** — cambiar nombre/descripción en hero
**`src/pages/about.astro`** — cambiar "About Me" y educación
**`src/pages/projects.astro`** — agregar/editar tus proyectos
**`src/pages/skills.astro`** — actualizar tech stack

Después:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```
Vercel auto-deploya en segundos ✨

## Paso 6 (Opcional): Dominio personalizado
- Compra un dominio en GoDaddy/Namecheap (~$10/año)
- En Vercel Dashboard → Settings → Domains
- Agrega tu dominio
- Sigue instrucciones de DNS

## Troubleshooting rápido

**Q: "npm install no funciona"**
A: Necesitas Node.js 18+ instalado

**Q: Los cambios no aparecen en local**
A: Ctrl+C para detener el servidor, luego `npm run dev` de nuevo

**Q: Vercel muestra error en deploy**
A: Ve a Vercel Dashboard → Deployments → logs para ver qué pasó

**Q: ¿Puedo cambiar el naranja?**
A: Sí, en `src/layouts/Layout.astro`, busca `--color-accent: #f59e0b;` y cambia el código de color

## ¿Qué sigue?
- Comparte tu URL en LinkedIn/CV
- Agrega Google Analytics si quieres trackear visitas
- Pide feedback a amigos
- ¡Aplica a jobs con tu portfolio profesional! 🎯

---

**¡Eso es todo! Tu portafolio está listo. 🚀**
