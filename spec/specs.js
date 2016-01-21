describe('decompose', function() {
	it("take input, and split into parts", function() {
		expect(decompose(36)).to.eql([10,10,10,5,1]);
	});
});
