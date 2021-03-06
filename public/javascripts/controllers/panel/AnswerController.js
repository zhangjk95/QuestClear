angular.module("QuestClear")
    .controller("AnswerController",function($scope, $state, alertService, panelService){

        $scope.qid=$state.params.qid;

        step1={title:'', isItem:false, count:"", detail:""};

        $scope.steps=[step1];

        $scope.hideUser=false;

        $scope.addStep=function(){
            newStep={title:'',isItem:false,count:0,detail:''};
            $scope.steps.push(newStep);
        };

        $scope.submitAnswer=function(){
            cnt={
                qid:$scope.qid,
                title:$scope.title,
                steps:$scope.steps,
                hideUser:$scope.hideUser
            };
            panelService.answer(cnt).then(function(data){
                $scope.message=data;
                if(data['aid']){
                    alertService.showAlert('提交成功');
                    $state.go('answers', {aid: data.aid});
                }
            });
        };
    })
    .directive('answerEditor',function(){
        return{
            templateUrl:'views/panel/answerEditor.html'
        }})
    .directive('mdToast',function(){
        return{
            templateUrl:'views/panel/toast.html'
        }
    });