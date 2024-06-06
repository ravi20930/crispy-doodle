import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import User from "./User";

interface UserPdfsAttributes {
  id?: number;
  userId: string;
  pdfUrl: string;
}

class UserPdfs extends Model<UserPdfsAttributes> implements UserPdfsAttributes {
  public id!: number;
  public userId!: string;
  public pdfUrl!: string;
}

UserPdfs.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    pdfUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "UserPdfs",
  }
);

export default UserPdfs;
