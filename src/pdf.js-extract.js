const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();
const fs = require('fs');
const buffer = fs.readFileSync("src/example.pdf");
const options = {}; /* see below */
pdfExtract.extractBuffer(buffer, options, (err, data) => {
  if (err) return console.log(err);
//   console.log(data);
  console.log(data.pages[0].content);

    // const { contents } = data.pages;
    // console.log(data.pages);

}); 