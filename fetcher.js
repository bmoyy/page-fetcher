const request = require('request');
const fs = require('fs');

const args = process.argv;
let link = args[2];
let path = args[3];

const requestFile = function(args) {

  request(link, (error, response, body) => {
    if (error) {
      console.log("URL is invalid, will not complete the request.");
      return;
    }
    // fs.exists(path, function (doesExist) {
    //     if (doesExist) {
    //       console.log('file exists');
    //       return;
    //     } else {
    //       console.log('file not found!');
    //     }
    //   });
    fs.writeFile(path, body, err => {
  
      if (err) {
        console.error(err);
      }
      returnData(body);
    });
  });
};

const returnData = function(data) {
  let bytes = 0;
  for (let char of data) {
    bytes += 1;
  }
  console.log(`Downloaded and saved ${bytes} bytes to ${path}`);
};

requestFile(args);