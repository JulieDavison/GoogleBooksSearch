const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const axios = require("axios");

//API Key goes here
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = process.env.APIKEY;

//ROute Prefixes - /api/books
  // Gets all books
 router.get("/q/:query", function (req, res) {
     axios
      .get(BASEURL + req.params.query + APIKEY)
      .then(function(results){
        res.json(results.data);
      })
      .catch(function(err){
        console.log(err);
      })

  });

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/id/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
