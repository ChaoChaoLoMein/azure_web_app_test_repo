const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Basic route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint for Azure
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    message: 'Azure Web App GitHub integration test is running successfully!'
  });
});

// API endpoint to test functionality
app.get('/api/info', (req, res) => {
  res.json({
    app: 'Azure Web App Test',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    port: port,
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Azure Web App test server running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});