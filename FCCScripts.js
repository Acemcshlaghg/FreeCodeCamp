//Intermediate Algorithm Scripting: DNA Pairing
//in progress
function pairElement(str) {
	var pairs = [];
	for (var i = 0; i < str.length; i++) {
		if (str[i] == "G") {
			pairs.push(["G", "C"]);
		} else if (str[i] == "C") {
			pairs.push(["C", "G"]);
		} else if (str[i] == "A") {
			pairs.push(["A", "T"]);
		} else if (str[i] == "T") {
			pairs.push(["T", "A"]);
		}
	}
	return pairs;
}

document.write(pairElement("GCG"));

//Intermediate Algorithm Scripting: Search and Replace
//done
function myReplace(str, before, after) {
	var words = str.split(" ");
	let index = words.indexOf(before);
	let charInt = words[index].charCodeAt(0);
	if (charInt >= 65 && charInt <= 90) { //if is uppercase letter
		after.charAt(0).toUpperCase();
	} else if (charInt >= 97 && charInt <= 122) {
		after.charAt(0).toLowerCase();
	}
	words[index] = after;
	return words.join(" ");
}


//Intermediate Algorithm Scripting: Pig Latin
//done
function translatePigLatin(str) {
	let vowels = ['a', 'e', 'i', 'o', 'u'];
	if (vowels.indexOf(str.charAt(0)) >= 0) {
		return str + "way";
	}
	var i = 0;
	var first = "";
	while (vowels.indexOf(str.charAt(i)) < 0) {
		first += str.charAt(i);
		i++;
	}
	return str.slice(i, str.length) + first + "ay";
}

//Intermediate Algorithm Scripting: Spinal Tap Case
//done
function spinalCase(str) {
	var newStr = "";
	let firstCharInt = str.charCodeAt(0);
	if ((firstCharInt >= 65 && firstCharInt <= 90) ||
		(firstCharInt >= 97 && firstCharInt <= 122)) { //if first char is letter
		newStr += str.charAt(0).toLowerCase();
	}
	var charInt;

	for (var i = 1; i < str.length; i++) {
		charInt = str.charCodeAt(i); //convert to ascii value
		if (charInt == 45) {
			newStr += str.charAt(i);
		} else if (charInt >= 65 && charInt <= 90) { //if is uppercase letter
			newStr += "-" + str.charAt(i).toLowerCase();
		} else if (charInt >= 97 && charInt <= 122) { //if is lowercase letter
			if (str.charCodeAt(i - 1) == 32) {
				newStr += "-";
			}
			newStr += str.charAt(i);
		}
	}
	return newStr;
}

//done
//sym([1, 2, 3], [5, 2, 1, 4]);
function sym(...args) {
	if (args.length <= 1) {
		return args;
	}
	var finArr = args[0];
	for (var ar = 1; ar < args.length; ar++) {
		for (var i = args[ar].length - 1; i >= 0; i--) {
			if (finArr.indexOf(args[ar][i]) >= 0) {
				console.log("hello");
				finArr.splice(args[ar][i], 1);
				args[ar].splice(args[ar][i], 1);
			}
		}
		finArr = finArr.concat(args[ar]);
	}
	console.log(finArr);
	return finArr;
}

/*
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555*/
//in progress
// int asciis 48-57
function telephoneCheck(str) {
	// Good luck!
	let justNums = str.replace(/[\-()]/g, ""); //removes punctuation
	if (justNums.length == 11 && justNums.charAt(0) == 1) { //checks if starts with 1
		justNums = justNums.slice(1, 11);
	} else if (justNums.length != 10) { //checks if wrong size
		return false;
	}
	justNums.split("").forEach(function(c) { //checks that all are integers
		if (String.fromCharCode(parseInt(c + 48)) < 48 ||
			String.fromCharCode(parseInt(c)) > 57) {
			console.log("false");
			return false;
		}
	});
	let str1 = justNums.substr(0, 3);
	let str2 = justNums.substr(3, 3);
	let str3 = justNums.substr(6, 4);
	console.log(str1 + "" + str2 + "" + str3);
	if (
		str == str1 + "-" + str2 + "-" + str3 ||
		str == "(" + str1 + ")" + str2 + "-" + str3 ||
		str == "(" + str1 + ") " + str2 + "-" + str3 ||
		str == str1 + " " + str2 + " " + str3 ||
		str == justNums ||
		str == 1 + " " + str1 + " " + str2 + " " + str3
	) {
		return true;
	} else {
		return false;
	}
}
telephoneCheck("1123-345-7290");