describe('returnedWord', function(){
  it('finds the word in a string and returns the found word', function(){
  expect(returnedWord("the cat in the hat", "hat", "box")).to.eql("the cat in the box");
  });
});
