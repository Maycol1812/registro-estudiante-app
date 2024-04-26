// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/api/student', (req, res) => {
    // Aquí se manejará la lógica para almacenar los datos del estudiante
    console.log(req.body);
    res.send('Datos del estudiante recibidos');
});

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

