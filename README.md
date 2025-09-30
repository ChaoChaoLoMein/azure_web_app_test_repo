# Azure Web App GitHub Integration Test

This repository tests how Azure Web App connects and deploys from a GitHub repository.

## 🚀 Features

- **Simple Node.js Express server** - Minimal web application
- **Health check endpoint** - `/health` for monitoring
- **API endpoint** - `/api/info` for testing functionality
- **Static file serving** - Serves HTML, CSS, and JS files
- **Azure deployment ready** - Includes all necessary configuration files

## 📁 Project Structure

```
├── server.js              # Main Express.js server
├── package.json           # Node.js dependencies and scripts
├── public/
│   └── index.html         # Frontend interface
├── .github/workflows/
│   └── azure-webapps-node.yml  # GitHub Actions CI/CD
├── web.config            # IIS configuration for Azure
├── .gitignore           # Git ignore rules
└── README.md           # This file
```

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:8080`

## ☁️ Azure Web App Deployment

### Method 1: GitHub Actions (Recommended)

1. **Create an Azure Web App** with Node.js runtime
2. **Configure deployment credentials:**
   - Download the publish profile from Azure portal
   - Add it as a GitHub secret named `AZUREAPPSERVICE_PUBLISHPROFILE`
3. **Update the workflow file:**
   - Edit `.github/workflows/azure-webapps-node.yml`
   - Replace `your-azure-web-app-name` with your actual app name
4. **Push to main branch** - Deployment will trigger automatically

### Method 2: Direct GitHub Integration

1. **In Azure Portal:**
   - Go to your Web App
   - Navigate to Deployment Center
   - Choose GitHub as source
   - Authorize and select this repository
   - Select the main branch
   - Azure will automatically detect Node.js and deploy

## 🔍 Testing the Deployment

Once deployed, your app will have:

- **Main page:** `https://your-app.azurewebsites.net/`
- **Health check:** `https://your-app.azurewebsites.net/health`
- **API info:** `https://your-app.azurewebsites.net/api/info`

## 🏗️ Configuration Details

- **Runtime:** Node.js 18+
- **Port:** Uses `process.env.PORT` (Azure sets this automatically)
- **Static files:** Served from `/public` directory
- **Health monitoring:** Available at `/health` endpoint

## 📋 Requirements

- Node.js 14+ (18+ recommended)
- Express.js 4.18+
- Azure Web App with Node.js runtime

## 🎯 Purpose

This repository demonstrates:
- ✅ GitHub to Azure Web App integration
- ✅ Automated CI/CD pipeline
- ✅ Node.js application deployment
- ✅ Health monitoring setup
- ✅ Static file serving
- ✅ RESTful API endpoints
