const Sequelize = require("sequelize");
const sequelize = new Sequelize("sibsutis", "mysql", "mysql", {
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: false,
    freezeTableName: true,
  }
});
//{force: true}



sequelize.sync().then(result=>{
  console.log(result);
})
.catch(err=>console.log(err))


module.exports = sequelize