## Autor
Edward paulino xuluc chulim
  
## Instalación

```bash
bower install angular-modal-confirm
```

```
<script src="bower_components/angular-modal-confirm/angular-modal-confirm.js"></script>
```

## Importación

```javascript
angular.module('myModule', ['angular.modal.confirm']);
```
## Configuracion

```javascript
.value('angularModalConfirmDefaults',{
    title           : 'Titulo',
    message         : '¿Está seguro que desea realizar la acción?',
    confirmBtnClass : 'btn btn-success',
    confirmBtnIcon  : 'fa fa-check',
    confirmBtnText  : 'Aceptar',
    cancelBtnClass  : 'btn btn-default',
    cancelBtnIcon   : 'fa fa-times',
    cancelBtnText   : 'Cancelar',
})
```
## Uso
```javascript
 angularModalConfirm.confirm({ title : 'Confirmar', message : '¿Está seguro que desea realizar la acción?' }).then( function (){
    console.log('aceptar');
}, function (){
    console.log('cancelar');
});
```