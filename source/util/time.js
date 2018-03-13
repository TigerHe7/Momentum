const Time = {}

const secondsInDay = 86400;
const secondsInHour = 3600;
const secondsInMinute = 60;

Time.formatFromSeconds = function(totalSeconds, minutesMinimum = false) {
	if (totalSeconds === 0) {
		if (minutesMinimum) {
			return '0m';
		} else {
			return '0s';
		}
	}

	let seconds = totalSeconds;
	let returnString = '';
	let daysSet = false;
	let hoursSet = false;
	let minutesSet = false;

	const days = Math.floor(seconds / secondsInDay);
	if (days > 0) {
		returnString += days + 'd';
		seconds -= days * secondsInDay;
		daysSet = true;
	}

	const hours = Math.floor(seconds / secondsInHour);
	if (hours > 0) {
		if (daysSet) {
			returnString += ' ';
		}
		returnString += hours + 'h';
		seconds -= hours * secondsInHour;
		hoursSet = true;
	}

	const minutes = Math.floor(seconds / secondsInMinute);
	if (minutes > 0) {
		if (hoursSet) {
			returnString += ' ';
		}
		returnString += minutes + 'm';
		seconds -= minutes * secondsInMinute;
		minutesSet = true;
	}

	if (!minutesMinimum) {
		if (seconds > 0) {
			if (minutesSet) {
				returnString += ' ';
			}
			returnString += seconds + 's'
		}
	}

	return returnString;
}

Time.getCurrentFormattedDate = function() {
	const date = new Date();
	return  Time.monthIndexToName(date.getMonth()) + ' ' + date.getDate();
}

Time.dayIndexToName = function(index) {
	switch(index) {
		case 0:
			return 'Monday';
		case 1:
			return 'Tuesday';
		case 2:
			return 'Wednesday';
		case 3:
			return 'Thursday';
		case 4:
			return 'Friday';
		case 5:
			return 'Saturday';
		case 6:
			return 'Sunday';
		default:
			return 'error';
	}
}

Time.monthIndexToName = function(index) {
	switch(index) {
		case 0:
			return 'January';
		case 1:
			return 'February';
		case 2:
			return 'March';
		case 3:
			return 'April';
		case 4:
			return 'May';
		case 5:
			return 'June';
		case 6:
			return 'July';
		case 7:
			return 'August';
		case 8:
			return 'September';
		case 9:
			return 'October';
		case 10:
			return 'November';
		case 11:
			return 'December';
		default:
			return 'error';
	}
}

Time.formatFromDateStrings = function(date1, date2) {
	const dateArray1 = date1.split('-');
	const dateArray2 = date2.split('-');
	const outputString = '';
	if (dateArray1[1] === dateArray2[1]) {
		return Time.monthIndexToName(parseInt(dateArray1[1])) + ' ' + dateArray1[0] + ' to ' + dateArray2[0];
	}
	return Time.monthIndexToName(parseInt(dateArray1[1])) + ' ' + dateArray1[0] + ' to ' + Time.monthIndexToName(parseInt(dateArray2[1])) + ' ' + dateArray2[0];
}

export default Time;
