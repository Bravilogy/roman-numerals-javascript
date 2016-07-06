var bindings = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
};

module.exports = {
    toRoman: function (value) {
        var output = '';

        Object.keys(bindings).forEach(function(symbol) {
            while (value >= bindings[symbol]) {
                output += symbol;
                value -= bindings[symbol];
            }
        });

        return output;
    },
    toDecimal: function(roman) {
        var output = 0;
        
        var symbols = Object.keys(bindings);

        symbols.forEach(function(symbol) {
            var regex = new RegExp('^' + symbol + '+'),
                match = (roman.match(regex) || [])[0];
            
            if (match) {
                output += match.length / symbol.length * bindings[symbol];
                roman = roman.substr(match.length);
            }
        });
        
        return output;
    }
};
