import getCapture from './lib'

export default function run(){
  describe('getCapture(text, rightBounds)', function() {
    var text1 = '@this is for #channel m#nti@ns';
    // ranges:
    //    1 -  5 == @this
    //   14 - 21 == #channel
    
    // custom identifier "!"
    var text2 = 'is @this is for !channel  m#nti@ns';
    // ranges:
    //   17 - 24 == !channel

    it('should return null given empty string', function() {
      expect(getCapture('', 0)).toBe(null);
    });

    it('should return info about word when cursor at end of word', function() {
      expect(getCapture(text1, 5)).toEqual({
        left: 0,
        right: 5,
        capture: '@this'
      });

      expect(getCapture(text1, 21)).toEqual({
        left: 13,
        right: 21,
        capture: '#channel'
      });
    });

    it('should skip identifiers in middle of words', function() {
      expect(getCapture(text1, 30)).toEqual(null);
    });

    it('should allow passing in custom identifiers', function() {
      expect(getCapture(text2, 8, ['!'])).toEqual(null);

      expect(getCapture(text2, 24, ['!'])).toEqual({
        left: 16,
        right: 24,
        capture: '!channel'
      });
    });
  });
}