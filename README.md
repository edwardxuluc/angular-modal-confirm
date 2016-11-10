## Autor
Edward paulino xuluc chulim
  
## Instalación

```bash
bower install angular-modal-confirm
```
## Importación

```javascript
angular.module('myModule', ['mwl.confirm']);
```
## Configuracion

```javascript
.value('angularModalConfirmDefaults',{
    title           : 'Nuevo titulo',
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
angularModalConfirm.create({ title : 'Eliminar', message : '¿Está seguro que desea eliminar el producto?' }).then( function (){
    console.log('aceptar');
}, function (){
    console.log('cancelar');
});
```