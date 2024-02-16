import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'Feed',
})

export class FeedTable extends Model<FeedTable> {

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  feedId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  feedSubject: String;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  feedTime: String;
}