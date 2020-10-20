import request from "request";
import cheerio from "cheerio";

export function searchLinks(
  url = "https://www.globo.com/",
  query = "section.topglobocom ol.home-analytics-id-E > li.topglobocom__content-item > a.topglobocom__content-title"
) {
  return new Promise((resolve, reject) => {
    request(url, function (error, response, html) {
      if (error) return reject("Não foi possivel carregar página");

      const $ = cheerio.load(html);
      const titulos = [];
      $(query).each(function (i) {
        const titulo = $(this).text().trim();
        const link = $(this).attr("href");

        titulos.push({ titulo, link });
      });
      return resolve(titulos);
    });
  });
}
