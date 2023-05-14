"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class NewsTopic extends sequelize_1.Model {
}
function default_1(sequelize) {
    NewsTopic.init({}, {
        sequelize,
        modelName: 'NewsTopic',
        timestamps: false,
    });
    return NewsTopic;
}
exports.default = default_1;
