// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');
 
// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');
 
// Cria tabela no BD e seus campos
const Produto = sequelize.define("produto", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
    },
    
    descricao: {
        allowNull: false,
        type: Sequelize.STRING(256),
    },
    
    preco: {
        allowNull: false,
        type: Sequelize.DOUBLE(100000),  
    },
    
    qtd_estoque: {
        allowNull: false,
        type: Sequelize.INTEGER(50000),  
    },
    
    ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaultValue: true
    }
});
 
module.exports = Produto;