// Create realtionship between tables using sequelize

const User = require("./User");
const Comment = require("./Comment");
const Groomer = require("./Groomer");

User.hasMany(Groomer, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Groomer.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Groomer.hasMany(Comment, {
  foreignKey: "groomerId",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "userId",
});

Comment.belongsTo(Groomer, {
  foreignKey: "groomerId",
});

module.exports = {
  User,
  Comment,
  Groomer,
};
