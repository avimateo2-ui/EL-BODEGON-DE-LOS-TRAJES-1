const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Servir archivos estáticos
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'public')));

// Ruta API de prueba / salud
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Servidor Express corriendo con éxito en Docker y Git',
    timestamp: new Date().toISOString()
  });
});

// Ruta principal fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});
