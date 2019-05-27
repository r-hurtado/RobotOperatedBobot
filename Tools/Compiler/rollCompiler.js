const commandsJSON = require("../../Config/commands.json")

/*
* Start -> Command
* Command -> pre Fpre | lambda
* Fpre -> comm Fcomm
* Fcomm -> Command | Expr Command
* Expr -> Term Expr1
* Expr1 -> + Term Expr1 | - Term Expr1 | lambda
* Term -> Factor Term1
* Term1 -> * Factor Term1 | / Factor Term1 | lambda
* Factor -> ( Expr ) | num
*/

var filterInt = function(value) {
    if (/^(-|\+)?(\d+|Infinity)$/.test(value)) return Number(value)
    return NaN
}

function strToArray(str) {
    var stack = []
    for (var i = 0; i < str.length; i++) stack.push(str[i])
    return stack
}

function reduce(stack, input) {
    

    return stack
}

// Shift reduce function for the roll command
function rollSR(stack, input) {
    if (input[0]) {
        var next = input[0]
        var top = stack[stack.length - 1]
        var nextNum = filterInt(next)
        var topNum = filterInt(top)
        
        if(!isNaN(nextNum) && !isNaN(topNum)) {
            stack.pop()
            input.shift()
            var num = topNum * 10 + nextNum
            stack.push(num)
        } else {
            if (!isNaN(topNum)) {
                stack = reduce(stack, input)
            }
            stack.push(input.shift())
        }
        rollSR(stack, input)
    }
    return stack
}

exports.compile = function(command) {
    var input = strToArray(command)
    var stack = []
    stack.push(input.shift())
    var out = rollSR(stack, input)
    return out
}
