/**
 * Created by Luciano on 16/10/2018.
 */
STORE.namespace('STORE.Error');
(function(g){

    'use strict';

    var error = $("alertaError");

    STORE.Error = {

        COLOR : 'rgb(200, 128, 128)',

        off  : function(){
            error.style.display = "none";
        },

        on  : function(){
            error.style.display = "";
        },

        set_message : function(message){
            error.innerHTML = message;
        }



    }





})(window)

