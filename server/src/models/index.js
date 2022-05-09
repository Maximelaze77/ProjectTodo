const fs = require("fs")
const path = require("path");
const Sequelize = require("sequelize")

const db = {}

const sequelize = new Sequelize(
    'postgres://postgres:root77127@localhost:5432/todo'
);

fs.
    readdirSync(__dirname)
    .filter(function(file){
        return file !== 'index.js'
    })
    .forEach(function(file){
        var model = require(path.join(__dirname,file))(sequelize,Sequelize.DataTypes)
        db[model.name] = model;
    });
    Object.keys(db).forEach(function(modelName){
        if(db[modelName].associate){
            db[modelName].associate(db);
        }
    });
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;