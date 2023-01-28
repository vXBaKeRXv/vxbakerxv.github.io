var agent = navigator.userAgent;
var ios = agent.match(/.*; CPU (?:iPhone )?OS ([0-9_]*) like Mac OS X[;)]/);
ios = ios == null ? '7.0' : ios[1].replace(/_/g, '.');

var minorDotIndex = ios.lastIndexOf('.');
if (minorDotIndex !== -1 && minorDotIndex !== ios.length - 1) {
    ios = ios.slice(0, minorDotIndex);
}

if (parseFloat(ios) >= 7.0) {
    document.write('<link rel="stylesheet" type="text/css" href="../../assets/css/ios78.css"');
} else {
    document.write('<link rel="stylesheet" type="text/css" href="../../assets/css/legacy.css"');
}