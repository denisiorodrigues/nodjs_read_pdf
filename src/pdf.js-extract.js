const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();
const fs = require('fs');
const buffer = fs.readFileSync("src/example.pdf");
const options = {}; /* see below */

pdfExtract.extractBuffer(buffer, options, (err, data) => {
  if (err) return console.log(err);
    //console.log(data.pages[0].content);
    fs.writeFile('pdf.js-extract_1.txt', JSON.stringify(data), err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('File saved successfully!');
    });
}); 