const express = require('express');
const routes = express.Router();
const requireDir = require('require-dir');

const models = Object.keys(requireDir('./models'));

const Controllers = require('./Controllers');

models.map(model => {
  const Controller = Controllers(model);
  routes.get(`/${model}`, Controller.index);
  routes.get(`/${model}/all`, Controller.getAll);
  routes.get(`/${model}/:id`, Controller.get);
  routes.post(`/${model}`, Controller.add);
  routes.put(`/${model}/:id`, Controller.update);
  routes.delete(`/${model}/:id`, Controller.delete);
  routes.post(`/${model}/find`, Controller.find);
});

module.exports = routes;
