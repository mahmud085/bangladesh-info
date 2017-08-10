# bangladesh-info
A small library providing information of Bangladesh

## Installation

  npm install bangladesh-info --save

## Usage

  var bangladesh = require('bangladesh-info')
  console.log("NID Info: ",bangladesh.nidInfo(19932611038000933));
  console.log("Area code ",bangladesh.areaCode('Dhaka'));
  console.log("Dial code ",bangladesh.dialCode('Dhaka'));
  console.log("All Divisions of Bangladesh : ",bangladesh.allDivision());
  console.log("All Districts of Bangladesh : ",bangladesh.allDistrict());
  console.log("Districts of Divisions ",bangladesh.districtsOfDivision('Dhaka'));


## Release History

* 0.0.1 Initial release