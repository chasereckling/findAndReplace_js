describe('findAndReplace', function(){
  it('replaces a word in a string with a given word', function(){
  expect(findAndReplace("the cat in the hat", "hat", "box")).to.equal("the cat in the box");
  });

  it('replaces a number in a string with a given word', function(){
  expect(findAndReplace("kittens are number 1", "1", "one")).to.equal("kittens are number one");
  });
});
