inlets = 1;
outlets = 1;

var liveObject = new LiveAPI("live_set");

function msg_int(value) {
  liveObject.id = value;
  var parameters = liveObject.children["parameters"];
  var parameterNames = [];

  for (var i = 0; i < parameters.length; i++) {
    var parameterPath = "parameters " + i;
    var parameterName = liveObject.get(parameterPath + " name");
    parameterNames.push(parameterName);
  }

  outlet(0, parameterNames);
}
