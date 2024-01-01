const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  githubUrl: { type: String, required: true },
  projectUrl: { type: String, required: true },
  // technologies: { type: Array, required: true },
});

module.exports = mongoose.model("Project", projectSchema);
