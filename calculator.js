function insert(n){
    document.form.textview.value = document.form.textview.value + n;
   
}

function equal(){
   document.form.textview.value = eval(document.form.textview.value);
}

function clr(){
   document.form.textview.value = 0;
   document.form.textview.value = " ";
   return;
}

function back(){
   var deal = document.form.textview.value;
   document.form.textview.value = deal.substring(0,deal.length - 1);
}
function soh(){
   document.form.textview.value = Math.sin(document.form.textview.value);
}
function cah(){
   document.form.textview.value = Math.cos(document.form.textview.value);
   
}
function indie(){
   document.form.textview.value = Math.log(document.form.textview.value);
}

function toa(){
   document.form.textview.value = Math.tan(document.form.textview.value);
}
function square(){
   document.form.textview.value = Math.sqrt( document.form.textview.value);
}