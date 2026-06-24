# Mohammed Alyousefi - Software Developer Portfolio

A modern, responsive portfolio website built with **React**, **TypeScript**, and **Material-UI (MUI)**.

## 🎨 Features

✨ **Modern Design**
- Red color theme with professional styling
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Material-UI component library

📱 **Sections Included**
- **Hero** - Introduction with name and tagline
- **About** - Brief biography and career goals
- **Skills** - Technical skills organized by category (Frontend, Backend, Languages, Tools)
- **Projects** - Featured projects with descriptions and tech stack tags
- **Contact** - Contact form for visitors to reach out
- **Footer** - Social media links and copyright

🚀 **Quick Start***

```bash
cd "c:\Users\mna12\OneDrive\Desktop\code\profile"
npm install
npm run dev
```

Open your browser at **http://localhost:5173/**

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **UI Framework**: Material-UI (MUI) v5
- **Styling**: MUI Theme System + Emotion
- **Package Manager**: npm

## 📝 Customization

### Update Your Information

1. **Hero Section** → Edit `src/components/Hero.tsx`
   - Change name, email, and description

2. **About Section** → Edit `src/components/About.tsx`
   - Update your bio and career goals

3. **Skills** → Edit `src/components/Skills.tsx`
   - Add/remove skills and categories

4. **Projects** → Edit `src/components/Projects.tsx`
   - Update project titles, descriptions, links, and tech tags

5. **Footer** → Edit `src/components/Footer.tsx`
   - Update social media links

6. **Header** → Edit `src/components/Header.tsx`
   - Customize navigation or branding

### Add Resume

1. Place your resume PDF in `public/resume.pdf`
2. Update `Hero.tsx` to enable the resume button
3. Update the button's `href` to `/resume.pdf`

## 🎯 Color Scheme

- **Primary Red**: `#d32f2f`
- **Dark Red**: `#b71c1c`
- **Light Background**: `#ffebee`
- **Text**: `#333 / #666`

## 📊 File Structure

```
src/
├── components/
│   ├── Header.tsx      (Navigation bar)
│   ├── Hero.tsx        (Introduction section)
│   ├── About.tsx       (About section)
│   ├── Skills.tsx      (Technical skills)
│   ├── Projects.tsx    (Featured projects)
│   ├── Contact.tsx     (Contact form)
│   └── Footer.tsx      (Footer with links)
├── pages/
│   └── Home.tsx        (Main page layout)
├── App.tsx             (App container)
└── main.tsx            (Entry point)
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy!

### Other Options
- **Netlify**: Drop the `dist/` folder or connect GitHub
- **GitHub Pages**: Configure build output
- **Any static hosting**: Upload the `dist/` folder

## 📞 Contact Information

Update the email in `Hero.tsx`:
```typescript
href="mailto:your.email@example.com"
```

## 📄 License

Free to use and modify for your personal portfolio.

---

**Built with ❤️ using React + MUI**
