function testkey(key){
  if (key==''){return true}//пустой ключ
  if ((key.length<4) ||(key.length>16)){
    return false;
  }
  if ((!parseInt(key))&&((+key)!=0)){
    return false;
  }
return true;
}

function  encrypt(){
  var key=document.getElementById('key').value;
  if (!testkey(key)){
    if (!confirm('Ключ не является стандартным ключом VK COFFEE. Продолжить?'))
      return false;
  };
  var msg= document.getElementById('message').value;
   if ((msg!='') || (confirm('Вы хотите зашифровать пустую строку?'))){
    document.getElementById('result').value=window.data.COFFEE.encrypt(
      msg,key
    );
   };
}
function  decrypt(){
  var key=document.getElementById('key').value;
  if (!testkey(key)){
    if (!confirm('Ключ не является стандартным ключом VK COFFEE. Продолжить?'))
      return false;
  };
   document.getElementById('result').value=window.data.COFFEE.decrypt(
   document.getElementById('message').value,key);
};