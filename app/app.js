// Carica le variabili d'ambiente da un file .env
require('dotenv').config();

const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;

app.use(cors())

// Collegati al db 
require('./config/db')

// Middleware per il parsing dei dati in formato JSON
app.use(express.json());

// Importa e utilizza le rotte API
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});