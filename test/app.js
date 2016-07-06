var convert = require('../src/app.js');

describe('Roman numerals suite', function () {

    it('should convert 1 to I', function () {
        convert.toRoman(1).should.eql('I');
    });

    it('should convert 2 to II', function () {
        convert.toRoman(2).should.eql('II');
    });

    it('should convert 14 to XIV', function () {
        convert.toRoman(14).should.eql('XIV');
    });

    it('should convert 20 to XX', function () {
        convert.toRoman(20).should.eql('XX');
    });

    it('should convert 24 to XXIV', function () {
        convert.toRoman(24).should.eql('XXIV');
    });

    it('should convert 30 to XXX', function () {
        convert.toRoman(30).should.eql('XXX');
    });

    it('should convert 31 to XXXI', function () {
        convert.toRoman(31).should.eql('XXXI');
    });

    it('should convert 39 to XXXIX', function () {
        convert.toRoman(39).should.eql('XXXIX');
    });

    it('should convert 39 to XXXIX', function () {
        convert.toRoman(39).should.eql('XXXIX');
    });

    it('should convert 74 to LXXIV', function () {
        convert.toRoman(74).should.eql('LXXIV');
    });

    it('should convert 984 to CMLXXXIV', function () {
        convert.toRoman(984).should.eql('CMLXXXIV');
    });

    it('should convert 1500 to MD', function () {
        convert.toRoman(1500).should.eql('MD');
    });

    it('should convert 1800 to MDCCC', function () {
        convert.toRoman(1800).should.eql('MDCCC');
    });
});

describe('Backwards compatibility', function(){
    it('should convert I to 1', function(){
        convert.toDecimal('I').should.eql(1);
    });

    it('should convert II to 2', function(){
        convert.toDecimal('II').should.eql(2);
    });

    it('should convert V to 5', function(){
        convert.toDecimal('V').should.eql(5);
    });

    it('should convert VI to 6', function(){
        convert.toDecimal('VI').should.eql(6);
    });

    it('should convert CMLXXXIV to 984', function () {
        convert.toDecimal('CMLXXXIV').should.eql(984);
    });

    it('should convert MDCCC to 1800', function () {
        convert.toDecimal('MDCCC').should.eql(1800);
    });

    it('should convert MCM to 1900', function () {
        convert.toDecimal('MCM').should.eql(1900);
    });
});
