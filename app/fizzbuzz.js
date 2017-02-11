function fizzBuzz(number) {

	var response;
	
	if (number % 3 === 0 && number % 5 === 0) {
		response = 'FizzBuzz';
	}
	else if (number % 3 === 0) {
		response = 'Fizz';
	}
	else if (number % 5 === 0) {
		response ='Buzz';
	} else {
		response = number;
	}

	return response;
}

exports.fizzBuzz = fizzBuzz;