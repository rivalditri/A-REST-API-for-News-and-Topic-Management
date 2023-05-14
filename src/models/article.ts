import { DataTypes } from 'sequelize'
import { Model, Table, Column, BelongsToMany,ForeignKey } from 'sequelize-typescript'
import { TopicModel } from './topic'

@Table({ tableName: 'article' })
export class ArticleModel extends Model {
  @Column({
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  })
    id!: number

  @Column({
    type: DataTypes.STRING,
    allowNull: false
  })
    title!: string

    @Column({
      type: DataTypes.STRING,
      allowNull: false
    })
    text!: string

    @Column({
      type: DataTypes.STRING,
      allowNull: false
    })
      status!: string
}