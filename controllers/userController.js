import axios from 'axios';

const get_caracter = async (req, res) => {

    const {nombre,limit=1, until = 0} = req.query;

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
        console.error('Error al obtener los personajes:', error.message);
      }
    
}

const put_users = (req, res) => {

    const {id} = req.params;

    res.status(200).json({
        "msg":req.body,
        id
    });
}

const post_users = (req, res) => {

    const body = req.body;

    res.status(200).json({
        "msg":"Post Api",
        body
    });
}

const delete_users = (req, res) => {
    res.status(200).json({
        "msg":"get API"
    });
}

const patch_users = (req, res) => {
    res.status(200).json({
        "msg":"get API"
    });
}

export {
    get_caracter,
    put_users,
    post_users,
    delete_users,
    patch_users
}