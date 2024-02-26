import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'order_details',
})

export class OrderDetail extends Model<OrderDetail> {

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
  order_id: String;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cx_id: String;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  voucher_id: String;


  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  order_time: String;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  rewards_redeem: Boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  score: number;
}