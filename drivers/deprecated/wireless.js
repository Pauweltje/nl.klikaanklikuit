var kaku = {};
var signal = new Homey.wireless('433').Signal({   
	sof: [210, 2724], //Start of frame
   	eof: [210], //End of frame
   	words: [
        [210,  320, 210, 1320],	// 0
       	[210, 1320, 210,  320],	// 1
       	[210,  320, 210,  320]  // 2 <-- used for dim
    ],
    interval: 10150, //Time between two messages
    sensitivity: 0.9, 
    repetitions: 10,
    minimalLength: 32,
    maximalLength: 36
});	

var Debouncer = require('./debouncer.js');

module.exports = {
	init: function(kakuJS){
		kaku = kakuJS;
		var debouncer = new Debouncer(1000);

		signal.register(function( err, success ){ //Register signal
		    if(err)	console.log('KaKu: ERROR', err); //Print error if there is one
		});
		
		//Start receiving
		signal.on('payload', function(payload, first){ //Start listening to payload event
			if(debouncer.check(signal.bitArrayToString(payload))) return;
	        var rxData = parseRXData(payload); //Convert received data to usable variables
	        if(rxData == -1) return; //Only continue if the received data is valid
	        //console.log(signal.bitArrayToString(payload));
	        console.log(rxData);
	        kaku.received(rxData);
		});
	},

	sendState: function(device, state){
		var address = signal.bitStringToBitArray(device.address); 
		var group   = [device.group ? 1 : 0];
		var channel = signal.bitStringToBitArray(device.channel);
		var unit    = signal.bitStringToBitArray(device.unit);

		if(state > 0 && state < 1){
			var onoff = 2;
			var dim   = numberToBitArray(Math.round(state * 15), 4); //Calculate dim value to send
			var frame = new Buffer(address.concat(group, onoff, channel, unit, dim)); //Make send buffer
		}else{
			var onoff = state ? 1 : 0;
			var frame = new Buffer(address.concat(group, onoff, channel, unit)); //Make send buffer
		}	

		signal.tx( frame, function( err, result ){ //Send the buffer to device
			if(err)console.log('KaKu: ERROR', err); //Print error if there is one
	    });

	},

	bitArrayToString    : signal.bitArrayToString, 
	bitArrayToNumber    : signal.bitArrayToNumber,
	numberToBitArray    : /*signal.*/numberToBitArray,
	bitStringToBitArray : signal.bitStringToBitArray
};

function parseRXData(data) { //Convert received data to usable variables
	if(data.length == 32 || data.length == 36){ 
		if(data.slice(0, 26).indexOf(2) >= 0) return -1;
		if(data.slice(26, 27)[0] == 2) return -1;
		if(data.slice(28, 30).indexOf(2) >= 0) return -1;
		if(data.slice(30, 32).indexOf(2) >= 0) return -1;
		return { 
			address : address = signal.bitArrayToString(data.slice(0, 26)),
			group   : group = data.slice(26, 27)[0] ? 1 : 0,
			channel : channel = signal.bitArrayToString(data.slice(28, 30)),
			unit    : unit = signal.bitArrayToString(data.slice(30, 32)),
			state   : state = data.slice(27, 28)[0] ? true : false,
			dim     : dim = signal.bitArrayToNumber(data.slice(32, 36)) / 16, // <-- KaKu dimmers use 0-15   Homey uses 0-1
		};
	}else return -1;
}

function numberToBitArray(number, bit_count){
    var result = [];
    for (bit_count > 0; bit_count--;){
        if(number >= Math.pow(2, bit_count)){
        	result.push(1);
        	number = number - Math.pow(2, bit_count);
        }else{
        	result.push(0);
        }
    }
    return result;
};