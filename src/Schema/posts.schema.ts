import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'posts',
})

export class Posts extends Model<Posts> {

  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  post_id: String;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  media_url: String;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  caption: String;


  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  like_count: String;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  timestamp: String;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  comments: String;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  media_type: String;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  comments_count: String
}