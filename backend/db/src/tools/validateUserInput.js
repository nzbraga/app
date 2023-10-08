const User = require('../models/User')

module.exports = {

async validUserInput(req,res,next){

    const { name, email, password, confirmPassword } = req.body;
    const regex = /^[A-Za-z1-9._%+-]+@[A-Za-z1-9.-]+\.[A-Za-z]{2,}$/;
    if (!name) {
        return res.status(400).json({ error: 'Nome obrigatórios não preenchidos.' });
    }
    if (!email) {
        return res.status(400).json({ error: 'Email obrigatórios não preenchidos.' });
    }
    if (!password) {
        return res.status(400).json({ error: 'Senha obrigatórios não preenchidos.' });
    }  
    if (!regex.test(email)) {
        return res.status(400).json({ error: 'Email inválido.' });
    }        
    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'As senhas não coincidem.' });
    }
    const user = await User.findOne({ where: { email: email } });
    if (user) {
        return res.status(400).json({ error: 'Email já cadastrado.' });
    }
    next()
}
}