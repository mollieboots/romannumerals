describe('wordpuzzle', function() {
	it("will take string input and remove vowels, replacing them with dashes", function() {
		expect(wordpuzzle("apple")).to.equal("-ppl-");
	});
});
