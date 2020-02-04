const csv = require('csv-parser');
const fs = require('fs');
const createCSVWriter = require('csv-writer').createObjectCsvWriter;
class CSVHeaderClass{
  constructor(id,name){
    this.id =id;
    this.name = name;
  }
}
const CSVWriter = createCSVWriter({
  path: 'chunk1.csv',
  header: [
    {id: 'name', title: 'Name'} 
  ]
});
var numberOFRows =0;
readStream = fs.createReadStream('big.csv.tar');
// readStream .on('data', function (chunk) {
//   console.log(csv(chunk));
//   readStream.destroy();
// })
// .on('end', function () {
//   // This may not been called since we are destroying the stream
//   // the first time 'data' event is received
//   console.log('All the data in the file has been read');
// })
// .on('close', function (err) {
//   console.log('Stream has been destroyed and file has been closed');
// });
readStream
  .pipe(csv())
  .on('data', (row) => {
    if(numberOFRows==10){
      console.log(row);
      
      return;
         
     } 
    console.log(numberOFRows++,row);
   
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });