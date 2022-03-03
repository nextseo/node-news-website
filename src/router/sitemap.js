// const express = require("express");
// const sitemapRouter = express.Router();
 
// const js2xmlparser = require("js2xmlparser");
// const moment = require("moment");
 
// /**
//  * It generates a standard sitemal.xml for SEO purposes
//  */
//  sitemapRouter.get("/", function(req, res, next) {
//     try {
//         //our records to index
//         // const records = getRecordsFromDataSource();
//         const collection = [];
//         let today = moment();
//         today = today.format("YYYY-MM-DD");
//         //add site root url
//         const rootUrl = {};
//         rootUrl.loc = "https://dev-sriwararak.herokuapp.com/";
//         rootUrl.lastmod = today;
//         rootUrl.changefreq = "daily";
//         rootUrl.priority = "1.0";
//         // rootUrl["image:image"] = {
//         //     "image:loc": "s://javaniceday.com/default-image.jpg",
//         //     "image:caption":
//         //         "javaniceday.com. Software development blog. Java, Node JS, Salesforce among other technologies",
//         // };
//         collection.push(rootUrl);
 
//         //add recipes urls
//         // for (let i = 0; i < records.length; i++) {
//         //     const url = {};
//         //     url.loc = records[i].url;
//         //     url.lastmod = records[i].updated_at;
//         //     // url["image:image"] = {
//         //     //     "image:loc": records[i].featured_image_url,
//         //     //     "image:caption": records[i].description,
//         //     // };
 
//         //     collection.push(url);
//         // }
//         const col = {
//             "@": {
//                 xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
//                 "xmlns:image": "http://www.google.com/schemas/sitemap-image/1.1",
//             },
//             url: collection,
//         };
//         const xml = js2xmlparser.parse("urlset", col);
//         res.set("Content-Type", "text/xml");
//         res.status(200);
//         res.send(xml);
//     } catch (e) {
//         next(e);
//     }
// });
 
// /**
//  * @return a collection to index (typically we'll get these records from our database)
//  */
// // function getRecordsFromDataSource() {
// //     //these records will have our own structure, we return as they are and later we convert them to the xml standard format
// //     //so let's just define two records hard-coded
 
// //     const record1 = {
// //         url: "https://dev-sriwararak.herokuapp.com/2019/07/11/better-queue-in-node-js/",
// //         description:
// //             "Introduction A good practice in software development is to delegate as much heavy work as possible to background jobs",
// //         featured_image_url: "https://javaniceday.com/example1.jpg",
// //         updated_at: "2019-07-11",
// //     };
// //     const record2 = {
// //         url: "https://www.javaniceday.com/2019/08/11/http-auth-basic-in-node-js-and-express/",
// //         description: "A small site in Node.js using Express that will have one protected page Http auth basic prompt",
// //         featured_image_url: "https://javaniceday.com/example1.jpg",
// //         updated_at: "2019-07-11",
// //     };
// //     return [record1, record2];
// // }



const SitemapXMLParser = require('sitemap-xml-parser');

const url = 'something sitemap url';

/*
If sitemapindex (link of xml or gz file) is written in sitemap, the URL will be accessed.
You can optionally specify the number of concurrent accesses and the number of milliseconds after processing and access to resume processing after a delay.
*/

const options = {
    delay: 3000,
    limit: 5
};

const sitemapXMLParser = new SitemapXMLParser(url, options);

sitemapXMLParser.fetch().then(result => {
    console.log(result);
});


/*
  Returns

  {
    loc: [ --- ],
    lastmod: [ --- ],
    changefreq: [ --- ],
    priority: [ --- ]
  },
  {
    loc: [ --- ],
    lastmod: [ --- ],
    changefreq: [ --- ],
    priority: [ --- ]
  },
  ...
*/

 
 module.exports = sitemapRouter;