"use strict";angular.module("trackApp",[]),angular.module("trackApp").controller("MainCtrl",["$scope","$http",function(a,b){function c(a){var b="",c=moment.duration(a,"minutes"),d=c.hours(),e=c.minutes();return 1==d&&(b+=d+" hora"),d>1&&(b+=d+" horas"),d>0&&e>0&&(b+=" e "),e>0&&(b+=e+" minutos"),b}a.resources=[],a.getTime=c,function(){b.get("/scripts/data.json").success(function(b){console.dir(b),a.resources=_.sortByAll(b.resources,["section","_id"])})}()}]);