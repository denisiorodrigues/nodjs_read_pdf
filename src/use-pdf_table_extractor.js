const pdf_table_extractor = require("pdf-table-extractor");
const fs = require('fs');
 
//PDF parsed
function success(result)
{
   // console.log(result);
   // console.log(result.pageTables[1]);
   // console.log(JSON.stringify(result[1]));
   fs.writeFile('table_extractor.txt', JSON.stringify(result), err => {
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
 
pdf_table_extractor("src/example.pdf",success,error);