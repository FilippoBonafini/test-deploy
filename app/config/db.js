const mongoose = require("mongoose");

// Carica le variabili d'ambiente da un file .env
require('dotenv').config();

// Crea la stringa di connessione utilizzando le variabili d'ambiente
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@personal.yrrzfmp.mongodb.net/?retryWrites=true&w=majority`;

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log('Connessione al database riuscita');
    } catch (error) {
        console.error(error); // Stampa l'errore nella console
    }
}

connect();