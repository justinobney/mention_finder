import lib from './lib'

export default function run(){
  describe('lib.val', function() {
    it('should be true...', function() {
     expect(lib.val).toBe(true);
    });
  });
}