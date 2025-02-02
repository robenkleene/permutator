inlets = 1;
outlets = 2;
OUTLET_NAMES = 0;
OUTLET_PARAMETER = 1;
var parameters = [];

function msg_int(value) {
  var parameter = parameters[value];
  var parameterString = parameter.name + ' ' + parameter.min + ' ' + parameter.max;
  outlet(OUTLET_PARAMETER, parameterString);
}

function anything() {
  parameters = [];
  var path = arrayfromargs(messagename, arguments).join(" ");
  var deviceObject = new LiveAPI(path);
  var deviceName = deviceObject.get("name");
  var parametersCount = deviceObject.getcount("parameters");
  var parameterNames = [];
  for (var i = 0; i < parametersCount; i++) {
    var parameter = {};
    var parameterPath = path + " parameters " + i;
    var parameterObject = new LiveAPI(parameterPath);
    var parameterName = parameterObject.get("name");
    var parameterMin = parameterObject.get("min");
    var parameterMax = parameterObject.get("max");
    parameterNames.push(String(parameterName));
    parameter.name = parameterName;
    parameter.min = parameterMin;
    parameter.max = parameterMax;
    parameters.push(parameter);
  }

  outlet(OUTLET_NAMES, parameterNames);
}
