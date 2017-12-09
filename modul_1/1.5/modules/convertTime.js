function convertToMin (time) {
	var convertedMin = Math.floor(time/60);
	var convertedSec = time%60;
	return convertedMin + ' min. ' + convertedSec +' sek.';
}

function convertToHour (time) {
	var convertedHour = Math.floor((time/3600));
	var convertedMin = Math.floor((time%3600)/60);
	var convertedSec = (time%3600)%60;
	return convertedHour + ' godz.' + convertedMin + ' min.' + convertedSec + ' sek.';
}

exports.convertToMin = convertToMin;
exports.convertToHour = convertToHour;