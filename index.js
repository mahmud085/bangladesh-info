'use strict'
const _ = require('lodash');
const areacode = require('./data/areacode.json');
const divisions = require('./data/division.json');
const district = require('./data/district.json');
module.exports = {
	nidInfo : function(nid) {
		var nid = nid.toString();
		var length = nid.length;
		var info = {};

		if(length === 17) {
			var birth_year = nid.slice(0,4);
			birth_year = _.toNumber(birth_year);
			info.birth_year = birth_year;
		}
		if(length === 17) {
			var district_code = nid.slice(4,6);
		} else if(length === 13) {
			var district_code = nid.slice(0,2);
		}
		
		district_code = _.toNumber(district_code);
		info.district_code = district_code;
		if(length === 17) {
			var RMO_code = nid.slice(6,7);
		} else if(length === 13) {
			var RMO_code = nid.slice(2,3);
		}
		
		RMO_code = _.toNumber(RMO_code);
		info.RMO_code = RMO_code;
		if(length === 17) {
			var policeStation_code = nid.slice(7,9);
		} else if(length === 13) {
			var policeStation_code = nid.slice(3,5);
		}
		
		policeStation_code = _.toNumber(policeStation_code);
		info.policeStation_code = policeStation_code;

		if(RMO_code === 1) {
			if(length === 17) {
				var union_code = nid.slice(9,11);
			} else if(length === 13) {
				var union_code = nid.slice(5,7);
			}
			
			union_code = _.toNumber(union_code);
			info.union_code = union_code;	
		} else {
			if(length === 17) {
				var word_code = nid.slice(9,11);
			} else if(length === 13) {
				var word_code = nid.slice(5,7);
			}
			
			word_code = _.toNumber(word_code);
			info.word_code = word_code;
		}

		if(length === 17) {
			var form_number = nid.slice(11,17);
		} else if(length === 13) {
			var form_number = nid.slice(7,13);
		}

		info.form_number = form_number;
		return info;  
	},
	allAreaCode: function() {
		return areacode;
	},
	dialCode: function(location) {
    	location = location.charAt(0).toUpperCase() + location.slice(1);
    	let areaDetails = _.find(areacode,{"location":location});
		return areaDetails.dial_code;
	},
	areaCode:function(location) {
    	location = location.charAt(0).toUpperCase() + location.slice(1);
    	let areaDetails = _.find(areacode,{"location":location});
		return areaDetails.area_code;		
	},
	allDivision:function() {
		return divisions;
	},
	allDistrict:function() {
		return district;
	},
	districtsOfDivision:function(division){
		division = division.charAt(0).toUpperCase() + division.slice(1);
    	let allDistrict = _.filter(district,{"division":division});
		return allDistrict;
	}
};