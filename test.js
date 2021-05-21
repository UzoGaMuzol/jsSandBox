var {PythonShell} = require("python-shell")

var pyshell = new PythonShell("script.py");
pyshell.send("hello")
pyshell.on("message", function (message) {
    console.log(message);
});