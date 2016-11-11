/**
 * Created by EdwardChor on 15/10/2016.
 */
angular.module("QuestClear")
    .controller("AnswerController",function($scope,$state,panelService){

        //$scope.quest=questInfo;

        $scope.qid=$state.params.qid;
        $scope.title=$state.params.title;

        stepN=1;
        step1={title:'', isItem:false, count:"", detail:""};

        $scope.steps=[step1];

        $scope.addStep=function(){
            stepN+=1;
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

            })
        }
    })
    .directive('answerEditor',function(){
        return{
            templateUrl:'views/panel/answerEditor.html'
        }});