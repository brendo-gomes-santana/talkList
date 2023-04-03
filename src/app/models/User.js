const { Model } = require('sequelize');
const Sequelize = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password_hast: Sequelize.STRING,
            },
            {
                sequelize, 
            }
        );
    }
}

module.exports = User;