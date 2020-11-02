window.onload = function(){
}

document.addEventListener('DOMContentLoaded', function(){
  var div2 = document.querySelector('#div2').innerHTML;
  var div1 = document.querySelector('#div1').innerHTML;
  document.querySelector('#div2').innerHTML = div1;
  document.querySelector('#div1').innerHTML = div2;
  onclick = function(){
    document.querySelector('#div2').innerHTML = div2;
    document.querySelector('#div1').innerHTML = div1;
    }
  let a=3;
  let h=8;
  var res = a*h;
  document.querySelector('#text').innerHTML += 'Площа паралелограма: ' + res;
//завдання №3
  let text = document.querySelector('#text').innerHTML;
  let arr = text.split(' ');
  
  document.cookie = 'Num of words =' + arr.length + '\nCookies will be deleted after pressing "Ok" button!'+'; path=/';
  alert(document.cookie);

document.cookie.split(';').map(item => {
    if (item.includes('Num of words =')) {
      if (window.confirm('Num of words =' + item.substring(item.indexOf('=') + 1, item.length)
      + '\nCookies will be deleted after pressing "Ok" button!')){
          //document.cookie.replace('Num=12','hiiiii');
          deleteAllCookies();
          alert("Cookies were deleted!");
      }
    }
});
