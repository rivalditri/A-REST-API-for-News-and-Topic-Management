import { Sequelize, DataTypes, Model } from 'sequelize';

class News extends Model {
  public id!: number;
  public title!: string;
  public content!: string;
  public status!: 'draft' | 'deleted' | 'published';

  static associate(models: any) {
    News.belongsToMany(models.Topic, {
      through: models.NewsTopic,
      foreignKey: 'newsId',
      otherKey: 'topicId',
    });
  }
}

export default function (sequelize: Sequelize) {
  News.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('draft', 'deleted', 'published'),
        allowNull: false,
        defaultValue: 'draft',
      },
    },
    {
      sequelize,
      modelName: 'News',
    }
  );

  return News;
}