const mongoose = require('mongoose');

module.exports = function(modelName) {
	const Model = mongoose.model(modelName);

	return {
		async getAll(req, res) {
			const response = await Model.find({});
	
			return res.json(response);
		},
		async index(req, res) {
			const { page = 1 } = req.query; // recuperar o {{ base_url  }}/response?page=2
			const response = await Model.paginate({}, { page, limit: 6 });
			return res.json(response);
		},
	
		async get(req, res) {
			const response = await Model.findById(req.params.id);
			return res.json(response);
		},
	
		async update(req, res) {
			const response = await Model.findByIdAndUpdate(req.params.id, req.body, { new: false });
			return res.json(response);
		},
	
		async delete(req, res) {
			await Model.findByIdAndRemove(req.params.id);
			return res.send();
		},
	
		async add(req, res) {
			const response = await Model.create(req.body);
			return res.json(response);
		},
	
		async find(req, res) {
			const { filter, text } = req.body;
			const response = await Model.find({ [filter] : { '$regex' : text, '$options' : 'i' } });
			return res.json(response);
		}
		
	}
}
	
