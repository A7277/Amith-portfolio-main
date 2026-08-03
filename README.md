# ☁️ Amith Raj — DevOps & Cloud Engineering Portfolio (2029 Edition)

A high-performance, ultra-premium **2029 Glassmorphism** personal portfolio built for **Amith Raj**, DevOps Engineer & Cloud Infrastructure Specialist based in Bengaluru, India.

---

## 🌟 Features & Highlights

- **2029 Apple Glassmorphism Aesthetic**: Creamy off-white background (`#FBFBFD`), high-density frosted glass panels (`backdrop-filter: blur(24px)`), subtle ambient light reflections, and 1px crisp borders.
- **Cinematic Clean Background Hero**: Video architecture featuring crisp `amith-hero-video.mp4` playback with direct audio/unmute controls and non-cropped navbar layout.
- **Interactive S-Curve Process Path**: Scroll-driven SVG dashed path animation (`Services.jsx`) with dynamic `useMotionValueEvent` line-tip triggers highlighting process steps (`01 Discover & Scope` to `05 Launch & Scale`).
- **DevOps Command Center Deck**: Interactive domain carousel (`TechnicalSkills.jsx`) categorizing Cloud Platforms, Containers & Orchestration, Infrastructure as Code, CI/CD, Observability, and AI Tools with greyish-black tech badges (`#1E293B`).
- **Production Architecture Cards**: Detailed blueprints for AWS 3-Tier Web Architecture, Jenkins End-to-End CI/CD, Terraform Cloud Provisioning, and ELK/Prometheus Observability Stack (`Projects.jsx`).
- **Credential Center & Lightbox**: Fullscreen interactive preview modals for AWS, DevOps, Solutions Architect, and Generative AI certificates (`Certificates.jsx`).
- **Direct WhatsApp Messaging**: Instant pre-filled WhatsApp redirection (`https://wa.me/918123012310`) formatting Full Name, Email, and Message details with proper line spacing.

---

## 🛠️ Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) + [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + [AOS](https://michalsnik.github.io/aos/)
- **Fonts**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) + [Caveat](https://fonts.google.com/specimen/Caveat)

---

## 📁 How to Customize & Edit Portfolio Content

All personal data, projects, certificates, experience, and contact details are centralized in **one single file**:

📍 **`src/data/portfolioData.js`**

### 1. Modifying Personal Details & Bio
Open `src/data/portfolioData.js` and edit the `personalInfo` object:
```javascript
export const personalInfo = {
  name: "Amith Raj",
  brandName: "AMITH RAJ",
  title: "DevOps Engineer | Cloud Infrastructure Specialist",
  location: "Bengaluru, Karnataka, India",
  phone: "+91 8123012310",
  emails: { primary: "amithraj873@gmail.com" },
  // ...
};
```

### 2. Updating Resume PDF File (In the Future)
To update your resume:
1. Save your new resume PDF with the filename **`amith-raj-resume.pdf`**.
2. Replace the file inside the **`public/`** directory:
   `public/amith-raj-resume.pdf`
3. All *"Download Resume"* buttons throughout the site will automatically download your updated PDF file without needing any code changes!

### 3. Adding or Editing Projects
Edit the `projects` array in `src/data/portfolioData.js`:
```javascript
export const projects = [
  {
    id: "aws-three-tier-app",
    number: "01",
    badge: "☁️ Cloud Infrastructure",
    title: "AWS Three-Tier Web Architecture",
    tagline: "Highly Available, Secure & Auto-Scaling Architecture",
    // ...
  }
];
```

### 4. Updating Certificates & Credentials
To add or update certificates:
1. Place the new certificate screenshot PNG/JPG in `src/assets/amith/`.
2. Import it in `src/data/portfolioData.js`.
3. Add a new entry to `certificatesList`:
```javascript
export const certificatesList = [
  {
    id: "cert-aws-devops-internship",
    name: "AWS & DevOps Internship Program",
    issuer: "MicroDegree",
    issuedDate: "13/12/2024",
    certificateNo: "INCC-994",
    badge: "Full Internship",
    image: certAwsDevopsInternship,
    skills: ["AWS Cloud Architecture", "DevOps Pipelines", "Linux Administration"],
  }
];
```

### 5. Replacing Hero Video or Poster
- Hero Video: `public/amith-hero-video.mp4`
- Hero Poster Fallback: `public/amith-hero-poster.png`

---

## 🚀 Local Development & Build Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the **`dist/`** directory.

---

## 📄 License
Created for **Amith Raj**. All rights reserved © 2026.
