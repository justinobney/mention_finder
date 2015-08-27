import Promise from './npo';
import compose from './compose'

export default function run(){
    describe('compose', function() {
      it('can compose 2 functions', function() {
        var lowerback = compose(lower, reverse);
        expect(lowerback('BAR')).toBe('rab');
      });

      it('can compose functions with same input params', function() {
        var lower_back_double = compose(lower, reverse, repeat);
        expect(lower_back_double('BAR')).toBe('rraabb');
      });

      it('can compose functions with different input params', function() {
        // order matters in this ecample
        var lower_back_double = compose(lower, join, split, reverse, repeat);
        expect(lower_back_double('BAR')).toBe('rraabb');
      });

      it('should handle flowing a promise', function(done) {
        var asyncTest = compose(lower, reverseAsync);
        asyncTest('BAR').then(function(result){
            expect(result).toBe('rab');
            done();
        })
      });

      it('should handle flowing multiple promises', function(done) {
        var asyncTest = compose(reverseAsync, lower, reverseAsync);
        asyncTest('BAR').then(function(result){
            expect(result).toBe('bar');
            done();
        })
      });
    });
}


function lower(str) { return str.toLowerCase(); }

function split(str) { return str.split(''); }

function join(strArray){ return strArray.join(''); }

function reverse(str) { return join(split(str).reverse()); }
 
function reverseAsync(str){ return Promise.resolve(reverse(str)); }

function repeat(str) {
    return str.split('').map(function(letter) {
        return letter + letter
    }).join('');
}