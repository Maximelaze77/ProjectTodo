module.exports = (sequelize,DataTypes) => {
    const Task = sequelize.define("Task",{
        id_task : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(255),
            unique: false
        },
        status: {
            type: DataTypes.STRING(255),
            unique: false
        }
    }, {
        timestamps: false
    })
    return Task
}