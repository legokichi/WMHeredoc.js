var ModuleTestWMHeredoc = (function(global) {

var _runOnNode = "process" in global;
var _runOnWorker = "WorkerLocation" in global;
var _runOnBrowser = "document" in global;

return new Test("WMHeredoc", {
        disable:    false,
        browser:    true,
        worker:     true,
        node:       true,
        button:     true,
        both:       true, // test the primary module and secondary module
    }).add([
        testWMHeredoc
    ]).run().clone();

function testWMHeredoc(test, pass, miss) {

    var result = WMHeredoc(function(){/*
a
  b
    c
  d
e
    */});
    var expected = "\n\
a\n\
  b\n\
    c\n\
  d\n\
e\n\
    ";
    if (result === expected) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

})((this || 0).self || global);
