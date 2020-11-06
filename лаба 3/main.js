document.addEventListener('DOMContentLoaded',() =>{
//task 1
  var div2 = document.querySelector('#div2').innerHTML;
  var div1 = document.querySelector('#div1').innerHTML;
  document.querySelector('#div2').innerHTML = div1;
  document.querySelector('#div1').innerHTML = div2;
  onclick = function(){
    document.querySelector('#div2').innerHTML = div2;
    document.querySelector('#div1').innerHTML = div1;
  }
//task 2
  let a=3;
  let h=8;
  var res = a*h;
  document.querySelector('#text').innerHTML += 'Площа паралелограма: ' + res;
});
//task 3
  let text = document.querySelector('#text').textContent;
  let arr = text.split(' ');
  document.cookie = 'Num of words =' + arr.length +'; path=/';
  alert(document.cookie)

  
 
  window.onload = () => {
    const del = confirm(document.cookie + '\nCookies will be deleted after pressing "Ok" button!')
    if(del === true){
      document.cookie = "cookiename= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      const ok_del = confirm('\nCookies are deleted')
      if(ok_del === true){
        location.reload();
        const data = prompt("Enter data", '');    
      }
    }
  };
  


