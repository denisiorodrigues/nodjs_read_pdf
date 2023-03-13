const pdfjsLib = require('pdfjs-dist');
const fs = require('fs');
const tableExtractor = require('pdf-table-extractor');

// Load a PDF file
const pdfPath = "d:/workspace/node/read_pdf/src/extrato.pdf";
const data = new Uint8Array(fs.readFileSync(pdfPath));

// Load PDF file with pdfjs
pdfjsLib.getDocument(data).promise.then(function(pdf) {

  // Iterate through each page
  for (let i = 1; i <= pdf.numPages; i++) {

    // Get the page object
    pdf.getPage(i).then(function(page) {

      // Get the page's text content
      page.getTextContent().then(function(textContent) {

        // Extract tables from the text content using pdf-table-extractor
        const tables = tableExtractor(textContent.items);

        // Do something with the tables
        tables.forEach(function(table) {
          console.log('Found table with', table.length, 'rows and', table[0].length, 'columns:', table);
        });
      });
    });
  }
});
