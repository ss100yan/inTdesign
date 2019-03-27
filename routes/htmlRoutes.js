var db = require("../models");

module.exports = function(app) {
  // Load index page

  // loads all users
  app.get("/all_users", function(req, res) {
    db.users.findAll().then(function(allUserInfo) {
      console.log(res);
      res.render("index", { userInfo: allUserInfo });
    });
  });
  // loads all modules
  app.get("/modules", function(req, res) {
    db.modules.findAll().then(function(modules) {
      console.log(res);
      res.render("index", { modules: modules });
    });
  });
  // loads all businesses
  app.get("/business", function(req, res) {
    db.business_type.findAll().then(function(types) {
      console.log(res);
      res.render("index", { businessTypes: types });
    });
  });

  // Get user info by chosen Id and populates the chosen template
  app.get("/template1/:id", function(req, res) {
    db.users.findOne({ where: { id: req.params.id } }).then(function(userInfo) {
      console.log(userInfo);
      res.render("template1", {userInfo: userInfo});
    });
  });
  app.get("/template2/:id", function(req, res) {
    db.users.findOne({ where: { id: req.params.id } }).then(function(userInfo) {
      console.log(userInfo);
      res.render("template2", {userInfo: userInfo});
    });
  });
  app.get("/template3/:id", function(req, res) {
    db.users.findOne({ where: { id: req.params.id } }).then(function(userInfo) {
      console.log(userInfo);
      res.render("template3", {userInfo: userInfo});
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
