const express = require('express');
const axios = require('axios'); 

const app = express();
const port = 3000;

// ruta (e.g., HTML, CSS)
app.use(express.static('public'));

// obtener datoss de un pokemon por su nombre
app.get('/pokemon/:name', async (req, res ) => {
    const {name} = req.params;

    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        res.json(response.data);
    } catch (error){
        res.status(404).send ('Pokemon no encontrado');
    }
});

// inicia el servidor
app.listen(port,() => {
    console.log(`Servidor escuchado en http://localhost:${port}`);
});

