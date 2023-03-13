const PdfExtract = require('pdf-extract');
const fs = require('fs');

// Load a PDF file
const pdfPath = './example.pdf';
const data = new Uint8Array(fs.readFileSync(pdfPath));

// Create a new PdfExtract object
const pdfExtract = new PdfExtract();

// Define the table extraction options
const tableOptions = {
  includeLines: true,
  includeRectangles: false,
  minRowHeight: 10,
  minColWidth: 10,
  minTableWidth: 250,
  pageOverride: null
};

// Extract tables from the PDF
pdfExtract.extract(data, tableOptions, function(err, data) {

  // Do something with the extracted tables
  if (err) {
    console.log('Error:', err);
  } else {
    data.pages.forEach(function(page) {
      page.tables.forEach(function(table) {
        console.log('Found table with', table.rows.length, 'rows and', table.columns.length, 'columns:', table.rows);
      });
    });
  }
});
