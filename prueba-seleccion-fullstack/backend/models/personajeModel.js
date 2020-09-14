const mongoose = require("mongoose");

const personajeSchema = new mongoose.Schema({
  nombre: { type: String, required: false },
  genero: { type: String, required: false },
  vivo: { type: Boolean, required: false },
  slug: { type: Boolean, required: false },
  casa: { type: Boolean, required: false },
});

module.exports = Personaje = mongoose.model("personaje", personajeSchema);
