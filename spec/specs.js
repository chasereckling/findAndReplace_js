describe('returnedWord', function(){
  it('replaces a word in a string with a given word.', function(){
  expect(returnedWord("the cat in the hat", "hat", "box")).to.eql("the cat in the box");
  });

  it('replaces a  uppercase word in a string with a given word ', function(){
  expect(returnedWord("the cat in the Hat", "hat", "box")).to.eql("the cat in the box");
  });
});
