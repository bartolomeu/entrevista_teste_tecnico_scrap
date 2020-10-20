import { searchLinks } from "./searchLinks.js";

searchLinks()
  .then((e) => {
    console.log("foi bem");
    console.log(e);
  })
  .catch((e) => {
    console.log("nao foi bem");
    console.log(e);
  });
