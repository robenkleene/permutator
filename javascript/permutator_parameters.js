inlets = 1;
outlets = 1;

function anything() {
  var path = arrayfromargs(messagename, arguments).join(" ");
  var deviceObject = new LiveAPI(path);
  var deviceName = deviceObject.get("name");
  var parametersCount = deviceObject.getcount("parameters");
  var parameterNames = [];
  for (var i = 0; i < parametersCount; i++) {
    var parameterPath = path + " parameters " + i;
    var parameterObject = new LiveAPI(parameterPath);
    var parameterName = parameterObject.get("name");
    parameterNames.push(String(parameterName));
  }

  outlet(0, parameterNames);
}
