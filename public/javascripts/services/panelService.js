angular.module('QuestClear').factory('panelService',function(request){
    var service={};

    service.answer=function(ans){
        return request.post("/panel/answer",{
            ans:ans
        });
    };

    service.search = function(query){
        return request.post('/panel/search', query);
    };

    return service;
});