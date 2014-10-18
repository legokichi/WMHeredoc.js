(function(global) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;

// --- class / interfaces ----------------------------------
function WMHeredoc(fn) { // @arg Function
                         // @ret String
//{@dev
    $args(WMHeredoc, arguments);
//}@dev
    var str = fn.toString();
    var matches = str.match(/^function\s*\(\s*\)\s*\{\s*\/\*([\S\s]*)\*\/\s*\;?\}$/);
    if(!matches){
        //{@dev
        console.error(str);
        //}@dev
        throw new Error("heredoc format is worng. please check it.");
    }
    return matches[1];
}

//{@dev
WMHeredoc["repository"] = "https://github.com/duxca/WMHeredoc.js"; // GitHub repository URL. http://git.io/Help
//}@dev

// --- implements ------------------------------------------

// --- validate / assertions -------------------------------
//{@dev
//function $valid(val, fn, hint) { if (global["Valid"]) { global["Valid"](val, fn, hint); } }
//function $type(obj, type) { return global["Valid"] ? global["Valid"].type(obj, type) : true; }
//function $keys(obj, str) { return global["Valid"] ? global["Valid"].keys(obj, str) : true; }
//function $some(val, str, ignore) { return global["Valid"] ? global["Valid"].some(val, str, ignore) : true; }
function $args(fn, args) { if (global["Valid"]) { global["Valid"].args(fn, args); } }
//}@dev

// --- exports ---------------------------------------------
if ("process" in global) {
    module["exports"] = WMHeredoc;
}
global["WMHeredoc" in global ? "WMHeredoc_" : "WMHeredoc"] = WMHeredoc; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule
