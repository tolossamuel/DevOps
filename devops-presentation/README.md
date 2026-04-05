# DevOps Presentation App

This is a single-page React application built with **Vite, React, and Tailwind CSS**. It is designed with clean architecture and modern UI principles to serve as a presentation and demo for your DevOps assignment.

## Features

- **Modern UI Design**: Tailwind CSS, clean components, fully responsive.
- **Assignment Topics Covered**: Introduction to DevOps, Core Principles, Lifecycle, Tools, Benefits & Challenges, and a Real-World Case Study (Netflix).
- **Built for CI/CD**: Ready to be pushed to GitHub and automatically deployed.

## Local Setup

To run this project locally on your machine, follow these steps:

1. **Install Dependencies**
   ```bash
   npm install
   ```
2. **Start the Development Server**
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:5173`.

---

## Deploying via CI/CD (GitHub Actions to GitHub Pages)

To showcase your understanding of DevOps principles, you can set up a simple Continuous Integration / Continuous Deployment (CI/CD) pipeline using **GitHub Actions**. This pipeline will automatically build and deploy your React app every time you push to the `main` branch.

### 1. Create the GitHub Repository
1. Go to GitHub and create a new repository (e.g., `devops-presentation`).
2. Push your local code to this repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/devops-presentation.git
   git push -u origin main
   ```

### 2. Configure Vite for GitHub Pages
In your `vite.config.js`, add the `base` property with your repository name:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/devops-presentation/' // Replace with your repo name
})
```

### 3. Setup the GitHub Actions Workflow
Create a folder named `.github/workflows` in the root of your project, and inside it create a file named `deploy.yml` with the following content:

```yaml
name: Deploy React App to GitHub Pages

on:
  push:
    branches:
      - main # Trigger deployment on push to main branch

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Build the App
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. Enable GitHub Pages
1. Go to your repository settings on GitHub.
2. Navigate to **Pages** in the left sidebar.
3. Under **Build and deployment**, ensure **Source** is set to **GitHub Actions**.

Once configured, pushing code to the `main` branch will automatically trigger the pipeline, demonstrating a real-world CI/CD process to your class!