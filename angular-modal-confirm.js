'use strict';

angular.module('angular.modal.confirm', [])

.value('angularModalConfirmDefaults', {})

.factory('angularModalConfirm', function( $modal, $templateCache, angularModalConfirmDefaults ) {
    
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
        confirm : function( configuracion ){
            return $modal.open({
                templateUrl: angularModalConfirmDefaults.template || 'views/angular-modal-confirm.html',
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

.controller('angularModalConfirmCtrl', function ( $scope, $modalInstance, AlertaService, configuracion, angularModalConfirmDefaults ){
    
    var defaults = {
        title           : 'Confirmar',
        message         : '¿Está seguro que desea realizar la acción?',
        confirmBtnClass : 'btn btn-success',
        confirmBtnIcon  : 'fa fa-check',
        confirmBtnText  : 'Aceptar',
        cancelBtnClass  : 'btn btn-default',
        cancelBtnIcon   : 'fa fa-times',
        cancelBtnText   : 'Cancelar',
    };

    angular.extend( defaults, angularModalConfirmDefaults );

    $scope.params = {
        title           : configuracion.title           || defaults.title,
        message         : configuracion.message         || defaults.message,
        confirmBtnClass : configuracion.confirmBtnClass || defaults.confirmBtnClass,
        confirmBtnIcon  : configuracion.confirmBtnIcon  || defaults.confirmBtnIcon,
        confirmBtnText  : configuracion.confirmBtnTxt   || defaults.confirmBtnText,
        cancelBtnClass  : configuracion.cancelBtnClass  || defaults.cancelBtnClass,
        cancelBtnIcon   : configuracion.cancelBtnIcon   || defaults.cancelBtnIcon,
        cancelBtnText   : configuracion.cancelBtnTxt    || defaults.cancelBtnText,
    };

    $scope.aceptar = function (){
        $modalInstance.close();    
    };

    $scope.cancelar = function (){
        $modalInstance.dismiss();
    };
})