module.exports = {
  HOST: "localhost",
  USER: "oluser",
  PASSWORD: "ol12341234",
  DB: "oltestdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
