const router = require("express").Router();
const axios = require("axios");
const Personaje = require("../models/personajeModel");

// FUNCION PARA POBLAR LA BASE DE DATOS, MANUAL.
router.get("/apiFirstCall", async (req, res, next) => {
  try {
    const data = await axios.get("https://api.got.show/api/book/characters");
    var bulk = Personaje.collection.initializeUnorderedBulkOp();
    data.data.map((p) =>
      bulk.insert({
        nombre: p.name,
        genero: p.gender,
        vivo: p.alive,
        slug: p.slug,
        casa: p.house,
      })
    );
    bulk.execute();
    res.status(200).json("Datos exportados a MongoDB");
  } catch (error) {
    next(error);
  }
});

router.get("/characters", async (req, res) => {
  try {
    const data = await Personaje.find();
    res.json(data);
  } catch (error) {}
});

router.get("/characters/:id", async (req, res) => {
  const data = await Personaje.find({ _id: req.params.id });
  console.log(req.params.id);
  res.json(data);
});

module.exports = router;
