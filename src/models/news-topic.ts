import { Sequelize, Model } from 'sequelize';

class NewsTopic extends Model {
  public newsId!: number;
  public topicId!: number;
}

export default function (sequelize: Sequelize) {
  NewsTopic.init(
    {},
    {
      sequelize,
      modelName: 'NewsTopic',
      timestamps: false,
    }
  );

  return NewsTopic;
}
