const UserModel = require("../models/User.js")

class ControllerUser {

    constructor() {
        this.model = new UserModel();
    }

    static getIndex(req, res) {
        //lógica para manipular a solicitação get
        res.send("Tesposta do método")
    }

    static postData(req, res) {
        //lógica para adcionar 
        const data = req.body;

        //processar dados
        res.send("Resposta")
    }

    static deleteUser(req, res) {
        // Lógica para manipular a solicitação DELETE
        // Processar a exclusão dos dados
        res.send('Resposta do método DELETE');
    }
}

module.exports = ControllerUser;