const text = 'hello world';

test('it should have a string', ()=>{
  expect(text).toMatch(/world/);
})