class UserModel {

    constructor() {
        this.data = []
    }

    //Método para interagir com a camada de dados
    getAllData() {
        return this.data;
    }

    addData(newData) {
        this.data.push(newData)
    }

    deleteData(id) {
        if (id >= 0 && id < this.data.length) {
            this.data.splice(id, 1);
        }
    }
}

module.exports = UserModel;