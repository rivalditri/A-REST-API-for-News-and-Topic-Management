"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class News extends sequelize_1.Model {
    static associate(models) {
        News.belongsToMany(models.Topic, {
            through: models.NewsTopic,
            foreignKey: 'newsId',
            otherKey: 'topicId',
        });
    }
}
function default_1(sequelize) {
    News.init({
        title: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.ENUM('draft', 'deleted', 'published'),
            allowNull: false,
            defaultValue: 'draft',
        },
    }, {
        sequelize,
        modelName: 'News',
    });
    return News;
}
exports.default = default_1;
