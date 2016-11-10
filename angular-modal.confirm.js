'use strict';

angular.module('angular.modal.confirm', [])

.factory('angularModalConfirm', function( $modal, $templateCache ) {
    
    $templateCache.put('views/angular-modal-confirm.html', 
        '<div class="modal-header bg-default" style="font-size: 16px;">' +
        '   <strong>{{params.title}}</strong>' +
        '    <button type="button" class="close" data-dismiss="modal" aria-hidden="true" ng-click="cancelar()">'+
        '        <i class="fa fa-times"></i>' +
        '    </button> ' +
        '</div>' +
        '<div class="modal-body">' +
        '    <div class="text-md">' +
        '        <strong>{{params.message}}</strong>' +
        '    </div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '    <button class="{{params.cancelBtnClass}}" ng-click="cancelar()">' +
        '        <i class="{{params.cancelBtnIcon}}"></i> {{params.cancelBtnText}}' +
        '    </button>' +
        '    <button class="{{params.confirmBtnClass}}" ng-click="aceptar()">' +
        '        <i class="{{params.confirmBtnIcon}}"></i> {{params.confirmBtnText}}' +
        '    </button>' +
        '</div>'
    );

    return {
        create : function( configuracion ){
            return $modal.open({
                templateUrl: 'views/angular-modal-confirm.html',
                controller: 'angularModalConfirmCtrl',
                resolve: {
                    configuracion : function(){
                        return configuracion || {};
                    }
                }
            }).result;
        }
    };
})

.value('angularModalConfirmDefaults', {
    title           : 'Confirmar',
    message         : '¿Esta seguro que desea realizar la acción?',
    confirmBtnClass : 'btn btn-success',
    confirmBtnIcon  : 'fa fa-check',
    confirmBtnText  : 'Aceptar',
    cancelBtnClass  : 'btn btn-default',
    cancelBtnIcon   : 'fa fa-times',
    cancelBtnText   : 'Cancelar',
})

.controller('angularModalConfirmCtrl', function ( $scope, $modalInstance, AlertaService, configuracion, angularModalConfirmDefaults ){
    $scope.params = {
        title           : configuracion.title           || angularModalConfirmDefaults.title,
        message         : configuracion.message         || angularModalConfirmDefaults.message,
        confirmBtnClass : configuracion.confirmBtnClass || angularModalConfirmDefaults.confirmBtnClass,
        confirmBtnIcon  : configuracion.confirmBtnIcon  || angularModalConfirmDefaults.confirmBtnIcon,
        confirmBtnText  : configuracion.confirmBtnTxt   || angularModalConfirmDefaults.confirmBtnText,
        cancelBtnClass  : configuracion.cancelBtnClass  || angularModalConfirmDefaults.cancelBtnClass,
        cancelBtnIcon   : configuracion.cancelBtnIcon   || angularModalConfirmDefaults.cancelBtnIcon,
        cancelBtnText   : configuracion.cancelBtnTxt    || angularModalConfirmDefaults.cancelBtnText,
    };

    $scope.aceptar = function (){
        $modalInstance.close();    
    };

    $scope.cancelar = function (){
        $modalInstance.dismiss();
    };
});