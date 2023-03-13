const fs = require('fs');
const pdf_table_extractor = require("pdf-table-extractor");
const path = require('path');

const fileName = 'example.pdf';
const filePath = path.resolve(__dirname, fileName);

//PDF parsed
function success(result)
{
   let resultJson = JSON.stringify(result);

   fs.writeFile("example.json", resultJson, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('File saved successfully!');
    });
}
 
//Error
function error(err)
{
   console.error('Error: ' + err);
}

pdf_table_extractor(filePath,success,error);