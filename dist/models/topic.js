"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Topic extends sequelize_1.Model {
    static associate(models) {
        Topic.belongsToMany(models.News, {
            through: models.NewsTopic,
            foreignKey: 'topicId',
            otherKey: 'newsId',
        });
    }
}
function default_1(sequelize) {
    Topic.init({
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Topic',
    });
    return Topic;
}
exports.default = default_1;
