const UserModel = require('../model/user');

module.exports = (app) => {
    app.post('/api/themes', async (req, res) => {
        const email = req.body.email
        const result = await UserModel.findOne({email: email}, {themes: 1});
        if(result){
            res.status(200).json(result);
            
        } else{
            res.sendStatus(500);
        }
    })

    app.post('/api/updatethemes', async (req, res) => {
        const themes = req.body.themes;
        const email = req.body.email

        const result = await UserModel.updateOne({email: email}, {themes: themes});
        if(result){
            const response = await UserModel.findOne({email: email}, {themes: 1});
            res.status(200).json(response);
            
        } else{
            res.sendStatus(500);
        }
    })

    app.post('/api/updatedelay', async (req, res) => {
        const delay = req.body.delay;
        const email = req.body.email

        const result = await UserModel.updateOne({email: email}, {delay: delay});
        if(result){
            const response = await UserModel.findOne({email: email}, {dalay: 1});
            res.status(200).json(response);
            
        } else{
            res.sendStatus(500);
        }
    })

    app.post('/api/messages', async (req, res) => {
        const email = req.body.email

        const result = await UserModel.findOne({email: email}, {messages: 1});
        if(result){
            res.status(200).json(result);
            
        } else{
            res.sendStatus(500);
        }
    })

    app.post('/api/data', async (req, res) => {
        const email = req.body.email

        const result = await UserModel.findOne({email: email}, {messages: 1, themes:1, delay:1});
        if(result){
            res.status(200).json(result);
            
        } else{
            res.sendStatus(500);
        }
    })
}