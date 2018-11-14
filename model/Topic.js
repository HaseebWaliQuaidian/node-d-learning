const sequelize = require("../db/db");
const Sequelize = require("Sequelize");
const Avatar = require("./Avatar");
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define(
    "topic",
    {
      topicId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      topicDetail: {
        type: DataTypes.TEXT
      },
      topicName: {
        type: DataTypes.STRING(255)
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  return Topic;
};
