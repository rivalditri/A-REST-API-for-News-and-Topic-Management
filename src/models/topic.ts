import { Sequelize, DataTypes, Model } from 'sequelize';

class Topic extends Model {
  public id!: number;
  public name!: string;

  static associate(models: any) {
    Topic.belongsToMany(models.News, {
      through: models.NewsTopic,
      foreignKey: 'topicId',
      otherKey: 'newsId',
    });
  }
}

export default function (sequelize: Sequelize) {
  Topic.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Topic',
    }
  );

  return Topic;
}