// controllers/userController.js

const { where } = require('sequelize');
const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    async createUser(req, res) {
        try {
            const { name, email, password,confirmPassword, status } = await req.body;
            const user = await User.findOne({ where: { email: email } });
            
            if(name === '' || email === '' || password === '') {
                res.status(400).json({ error: 'Campos obrigatorio' });
            }
            if (user) {
                res.status(400).json({ error: 'Email já cadastrado.' });
            } else {
                if(password === confirmPassword){
                    const salt = await bcrypt.genSalt(12)
                    const passwordHash = await bcrypt.hash(password, salt)

                    const user = await User.create({
                        name,
                        email,
                        password: passwordHash,
                        
                    });
                    res.status(200).json({ user: {name, email, password: passwordHash},msg: "Cadastrado com sucesso" })                 
                }else{                    
                    res.status(400).json({ error: 'senha nao confere' });
                }
            }

            
            
               
        } catch (error) {
            res.status(400).json({ error: 'Erro interno do servidor.' });
            //console.log({error})
        }
    },
    async loginUser(req, res) {

        const{email, password} = req.body
        const user = await User.findOne({ where: { email: email } });
        if(email === '' || password === '') {
            res.status(400).json({ error: 'Campos obrigatorio' });
        }
        if(!user){            
            res.status(400).json({ error: 'usuario nao encontrado' });
        }
        const checkPassword = await bcrypt.compare(password, user.password)
        
        
        if(!checkPassword){
            res.status(400).json({ error: 'email ou senha incorretos' });
        }

        try {
            const secret = process.env.SECRET
            const token = jwt.sign({id:user._id},secret, )
            res.status(200).json({msg: "Autenticado com sucesso!"}, token)

            
        } catch (error) {
            
        }

    },    
    async updateUser(req, res) {
        try {
            const { id } = req.params
            const { name, email,password, token, status } = await req.body;
            const user = await User.findOne({ where: {id} })

            if (!user) {
                res.status(400).json({ error: 'nao encontrado' });
            } else {
                const user = await User.update({ name, email,password, token, status }, { where: { id } })
                res.status(200).json({ user: {name, email} })
                return user
            }

        } catch (error) {
            res.status(400).json({ error: 'Erro interno do servidor.' });
            //console.log({error})
        }
    },
    async listUsers(req, res, next) {
        try {
            const users = await User.findAll()
            
            if(!users){
                res.status(200).json({message: "nenhum resultado encontrado"})                
            }else{
                
                //const users = User.findAll()
                res.status(200).json({users})
                return users
            }
        } catch (error) {
            
        }
    },
    async deleteUser(req, res) {
        const { id } = req.params
        const user = await User.findOne({where: {id}})
        
        if(!user){
            res.status(200).json({ message: "nenhum resultado encontrado"})
        }else {

            const user = await User.destroy({where: {id}})
            res.status(200).json({ ok: true})

        }
    },
    async getUser(req, res) {
        const { id } = req.params
        const user = await User.findOne({where: {id}})
        
        if(!user){
            res.status(400).json({ message: "nenhum resultado encontrado"})
        }else {

            const user = await User.findOne({where: {id}})
            const {name,email} = user            
            res.status(200).json({ user: {id, name, email} })  
            return user
        }
    }
};
