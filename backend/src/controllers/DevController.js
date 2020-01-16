// controllers do Node, devem ter apenas 5 nomes:
// Index (utilizado para lista),
// show (demonstra apenas 1 item), 
// store ( para criar),
// update e destroy

//axios faz integração com outras APIS
const axios = require('axios');
//Importando o DEV!!!
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');


module.exports = {
    async index(request, response){
        const devs = await Dev.find();
        
        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
        let dev = await Dev.findOne({ github_username });

        if (!dev) {

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

            // se name não existgir, ele pega o login
            const { name = login, avatar_url, bio } = apiResponse.data;
            console.log(name, avatar_url, bio, github_username);

            const techsArray = parseStringAsArray(techs)

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }

        return response.json(dev);
    }
};

