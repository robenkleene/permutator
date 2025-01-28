inlets = 1;
outlets = 1;

var liveObject = new LiveAPI(callback, "live_set");

function msg_int(value) {
  liveObject.id = value;
  var paramCount = liveObject.getcount("parameters");
  var parameterNames = [];

  for (var i = 0; i < paramCount; i++) {
    var parameterPath = "parameters " + i;
    var parameterName = liveObject.get(parameterPath + " name");
    parameterNames.push(parameterName);
  }

  outlet(0, parameterNames);
}
