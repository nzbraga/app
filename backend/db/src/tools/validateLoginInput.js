const User = require('../models/User')

module.exports = {

async validLoginInput(req,res,next){

    const { email, password } = req.body;
    const regex = /^[A-Za-z1-9._%+-]+@[A-Za-z1-9.-]+\.[A-Za-z]{2,}$/;

    if (!email) {
        return res.status(400).json({ error: 'Email obrigatórios não preenchidos.' });
    }
    if (!password) {
        return res.status(400).json({ error: 'Senha obrigatórios não preenchidos.' });
    }  
    if (!regex.test(email)) {
        return res.status(400).json({ error: 'Email inválido.' });
    }  
    
    next()
}
}