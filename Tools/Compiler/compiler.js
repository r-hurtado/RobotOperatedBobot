exports.compile = function (command){
    //switch
        const roll = require("./rollCompiler.js").compile
        return roll(command)
    
    return "Compiled"
}