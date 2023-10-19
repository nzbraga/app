// controllers/ListController.js
require('dotenv').config()

const { where } = require('sequelize');
const List = require('../models/List');


module.exports = {
    async createList(req, res) {

    const { title, description, user_id} = req.body;    
    try {     
    const list = await List.findOne({ where: { title:title } });
    if (list) {
        return res.status(400).json({ error: 'Lista já cadastrado.' });
    }

    const newList = await List.create({
        title, description, user_id
    });        
        res.status(200).json({ list:{title,description,user_id}, msg: "Postado com sucesso" });            
    }catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor.' });
        }
    },
    async updateList(req, res) { 
        
    const { id } = req.params
    const { description} = req.body;    
       
    const list = await List.findOne({ where: { id } });
    if (!list) {
        return res.status(400).json({ error: 'Lista nao encontrada.' });
    }else {
        await List.update({ description }, { where: { id } }).then(()=>{
            res.status(200).json({ list: { description } })
        })
        return list
    }

    },

  
    async lists(req, res) {  
        const {id} = req.params
        try {
            const lists = await List.findAll({ where: { user_id:id} })

            if (!lists) {
                res.status(200).json({ message: "nenhum resultado encontrado" })
            } else {
               //const lists = List.findAll()
                res.status(200).json({ lists })
                return lists
            }
        } catch (error) {

        }  
    },
    async deleteList(req, res) {      
        const { id } = req.params
        const list = await List.findOne({ where: { id } })

        if (!list) {
            res.status(200).json({ message: "nenhum resultado encontrado" })
        } else {

            const list = await List.destroy({ where: { id } })
            res.status(200).json({ ok: true })

        }
    }
    
};
