describe('checkForFourOrNine', function() {
	it("will check to see if the number contains a 4 or 9", function() {
		expect(checkForFourOrNine("93")).to.equal(true);
	});
});

describe('decompose', function() {
	it("take input, and split into parts", function() {
		expect(decompose(36)).to.eql([10,10,10,5,1]);
	});
});

// describe('detectNumerals', function() {
// 	it("take parts and convert them to their Roman Numeral Equivalent", function() {
// 		expect(convertToRomanNumerals([10,10,10,5,1])).to.equal(["X","X","X","V","I"]);
// 	});
// });

describe('convertToRomanNumerals', function() {
	it("take parts and convert them to their Roman Numeral Equivalent", function() {
		expect(convertToRomanNumerals([10,10,10,5,1])).to.eql('XXXVI');
	});
});

describe('checkForMultiples', function() {
	it("if a string contains 4 or more of the same character consecutively return true, else return false", function() {
		expect(checkForMultiples('XXXVI')).to.equal(true);
	});
});

describe('prependZeros', function () {
	it("prepend leading zeros to equal string length of 4", function() {
		expect(prependZeros('45')).to.eql(['0','0','4','5']);
	});
});



// describe('checkForMultiples', function() {
// 	it("rejoin array as string and check for multiple iterations of the same character greater than 4")
// })
