import axios from 'axios';

const get_caracter = async (req, res) => {

    const {nombre,limit=12, until = 0} = req.query;

    try {

        const response = await axios.get(`https://rickandmortyapi.com/api/character?name=${nombre}`);
        const characters = response.data.results.slice(until, limit);;
        // Aquí puedes realizar cualquier operación con los datos de los personajes
        console.log(characters);
        res.status(200).json({
            "msg":"GET CARACTER",
            nombre,
            characters
        });
      } catch (error) {

        res.status(400).json({
          "msg":"Los personajes que buscas no están en esta dimensión:",
        });
        
      }
    
}


export {
    get_caracter
}