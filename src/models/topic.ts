import {
    Column,
    Model,
    Table
  } from 'sequelize-typescript'
  import { DataTypes } from 'sequelize'
  
  @Table({ tableName: 'topic' })
  export class TopicModel extends Model {
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
      topic!: string
  }