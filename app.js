"use strict";

import createClient from "./config/PrismicConfig.js";
import linkResolver from "./config/linkResolver.js";
import * as prismic from "@prismicio/client";
import  * as prismicH from "@prismicio/helpers";
import path from "path";
import { fileURLToPath } from 'url';
import htmlSerializer from "./config/htmlSerializr.js"
import express from 'express';
const app = express();
const port = 3000

// Set EJS as templating engine
app.set('view engine', 'ejs');
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname ,'views')));

// Middleware to inject prismic context
app.use((req, res, next) => {
   // add PrismicHelpers in locals to access them in templates.
  res.locals.ctx = {
    prismicH,
    htmlSerializer,
    linkResolver
  };
  next();
});

app.get('/preview', (async (req, res) => {
  const { token, documentId } = req.query;
  const client = createClient(req);
  if (token){
    const redirectUrl = await client.resolvePreviewURL({
      token,
      documentId
    })
  console.log("redirectUrl is", redirectUrl)
  res.redirect(302, redirectUrl);
  } 
}));

app.get("/", (async (req, res, next) => {
  const client = createClient(req);
  const document = await client.getSingle("blog_homepage")
  console.log(JSON.stringify(document, null, 2))
  if (document) {
    res.render( "page", { document } )
   } else {
      console.error("Page not found");
    }
    next()
}));

app.get("/:uid", (async(req, res, next) => {
  const uid = req.params.uid;
  const client = createClient(req);
  const document = await client.getByUID("post", uid);
  console.log(document)
  if (document) {
    res.render( "page", { document } )
  } else {
    console.error("page not found");
  }
  next()
}));


app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`)
});




