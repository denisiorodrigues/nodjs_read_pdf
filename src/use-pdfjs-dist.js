const pdfjsLib = require('pdfjs-dist');

const pdfPath = 'src\\example.pdf';

pdfjsLib.getDocument(pdfPath).promise.then(function(pdfDoc) {
  let pagesPromises = [];

  for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
    pagesPromises.push(pdfDoc.getPage(pageNum).then(function(page) {
      return page.getTextContent().thnen(function(textContent) {
        let textItems = textContent.items;
        let finalText = '';

        for (let i = 0; i < textItems.length; i++) {
          let item = textItems[i];

          finalText += item.str + ' ';
        }

        return finalText;
      });
    }));
  }

  Promise.all(pagesPromises).then(function(pagesText) {
    console.log(pagesText.join('\n\n'));
  });
});
