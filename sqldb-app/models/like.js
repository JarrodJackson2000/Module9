const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Like extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Like.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
      references: { model: "users", key: "id" },
    },

    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
      references: { model: "posts", key: "id" },
    },
  },

  {
    sequelize: sequelizeInstance,
    modelName: "likes", // use lowercase plural format

    freezeTableName: true,
  }
);
module.exports = Like;
