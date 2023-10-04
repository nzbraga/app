// controllers/userController.js

const { where } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async createUser(req, res) {
        try {
            const { name, email, password, status } = await req.body;
            const user = await User.findOne({ where: { email: email } });

            if (user) {
                res.json({ error: 'Email já cadastrado.' });
            } else {
                const user = await User.create({ name: name, email: email, password: password, status: true });
                res.json({ user: user });

                
            }
        } catch (error) {
            res.json({ error: 'Erro interno do servidor.' });
            //console.log({error})
        }
    },
    async updateUser(req, res) {
        try {
            const { id } = req.params
            const { name, email,password, token, status } = await req.body;


            const user = await User.findOne({ where: {id} })

            if (!user) {
                res.json({ error: 'nao encontrado' });
            } else {
                const user = await User.update({ name, email,password, token, status }, { where: { id } })
                res.json({ user:user });
                return user
            }


        } catch (error) {
            res.json({ error: 'Erro interno do servidor.' });
            //console.log({error})
        }
    },
    async listUsers(req, res) {
        try {
            const users = await User.findAll()
            
            if(!users){
                res.json({message: "nenhum resultado encontrado"})                
            }else{
                
                //const users = User.findAll()
                res.json({users: users})
                return users
            }
        } catch (error) {
            
        }
    },
    async deleteUser(req, res) {
        const { id } = req.params
        const user = await User.findOne({where: {id}})
        
        if(!user){
            res.json({ message: "nenhum resultado encontrado"})
        }else {

            const user = await User.destroy({where: {id}})
            res.json({ ok: true})

        }
    },
    async getUser(req, res) {
        const { id } = req.params
        const user = await User.findOne({where: {id}})
        
        if(!user){
            res.json({ message: "nenhum resultado encontrado"})
        }else {

            const user = await User.findOne({where: {id}})
            res.json({user:user})
            return user
        }
    }
};
