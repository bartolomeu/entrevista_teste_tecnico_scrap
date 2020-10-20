const express = require("express"),
  fs = require("fs"),
  request = require("request"),
  cheerio = require("cheerio"),
  app = express();

app.get("/titulos", function (req, res) {
  const url = "https://www.globo.com/";
  request(url, function (error, response, html) {
    if (error) {
      return res.send(500, "Não foi possivel acessar os dados");
    }

    const $ = cheerio.load(html);

    const titulos = [];
    $(
      "section.topglobocom " +
        "ol.topglobocom__content-news > " +
        "li.topglobocom__content-item > " +
        "a.topglobocom__content-title"
    ).each(function (i) {
      const titulo = $(this).text().trim();

      titulos.push(titulo);
    });
    res.json(titulos);
  });
});

app.listen(3000);
console.log("server running");
