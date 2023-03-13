const pdfParse = require('pdf-parse');
const fs = require('fs');
const PDFExtract = require('pdf.js-extract').PDFExtract;

const pdfPath = 'src/example.pdf';

const pdfExtract = new PDFExtract();
const options = {}; /* see below */
pdfExtract.extract(pdfPath, options, (err, data) => {
  if (err) return console.log(err);
  console.log(data);
  fs.writeFile('file.txt', JSON.stringify(data.pages[0]), err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File saved successfully!');
  });
});

// const pdfData = fs.readFileSync(pdfPath);

// pdfParse(pdfData).then(function(data) {
//   console.log(data.text);
// });
