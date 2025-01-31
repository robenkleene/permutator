inlets = 1;
outlets = 1;

function anything() {
  var path = arrayfromargs(messagename, arguments).join(" ");
  var liveObject = new LiveAPI(value);
  var name = liveObject.get("name");
  var parameters = liveObject.get("parameters");

  var parameterNames = [];
  for (var i = 0; i < parameters.length; i++) {
    var parameterPath = "parameters " + i;
    var parameterName = liveObject.get(parameterPath + " name");
    parameterNames.push(parameterName);
  }

  outlet(0, parameterNames);
}
