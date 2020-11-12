document.addEventListener('DOMContentLoaded',() =>{
//task 1
  var div2 = document.querySelector('#div2').innerHTML;
  var div1 = document.querySelector('#div1').innerHTML;
  document.querySelector('#div2').innerHTML = div1;
  document.querySelector('#div1').innerHTML = div2;
  onclick = function(){
    if(document.querySelector('#div1').innerHTML === div1){
      document.querySelector('#div2').innerHTML = div1;
      document.querySelector('#div1').innerHTML = div2;
    }
    else{
      document.querySelector('#div2').innerHTML = div2;
      document.querySelector('#div1').innerHTML = div1;
    }
  }
//task 2
  let a=3;
  let h=8;
  var res = a*h;
 // document.querySelector('#text').innerHTML += 'Площа паралелограма: ' + res;
});
//task 3
let text = document.querySelector('#text').textContent;
let arr = text.split(' ');

function task3(){
  document.cookie = 'Num of words =' + encodeURIComponent(arr.length) +'; path=/';
  alert(document.cookie)  
  const del = confirm(document.cookie + '\nCookies will be deleted after pressing "Ok" button!')
  if(del === true){
    document.cookie = "Num of words= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    const ok_del = confirm('\nCookies are deleted')
    
    if(ok_del === true){
      window.onload = () =>{     
        let arr2 = prompt("Enter data", '');
      //  alert('you enter:'+ arr2)
      }  
    }
  }
}
// task3();
//task 4
let sidebar = document.querySelector('#sidebar')
function loadColor() {
  sidebar.style.backgroundColor = localStorage.getItem('backgroundColor')

};
function task4(){
 
  
  const buttonR = document.createElement("button");
  const buttonG = document.createElement("button");
  const buttonY = document.createElement("button");

  const buttonArr = [buttonR, buttonY, buttonG]
  const colorArr = ['red', 'green', 'yellow']
  
  for(let i=0; i< buttonArr.length; i++){
    buttonArr[i].innerHTML = "change color to " + colorArr[i];
    sidebar.appendChild(buttonArr[i]);
    buttonArr[i].onclick = () => {
      localStorage.setItem('backgroundColor', colorArr[i]);
      loadColor();
        
    }
    window.addEventListener('load', event => {
      loadColor();
  });
  }
}
task4()
//task 5
const parent = document.querySelector('#text');
parent.onmouseout = handler;
function handler(event) {
  if (event.type == 'mouseout') {
    event.target.style.background = 'pink'
  }
}



//task 6
let header = document.querySelector('#header');
let center = document.querySelector('#center');
let footer = document.querySelector('#footer');
let s3 = document.querySelector('#s3');

function isValid(html)
{
    const f = document.createElement('div');
    f.innerHTML = html;
    return f.innerHTML === html;
}

function buildHtml(html) {
  let tags = Array.from(html.matchAll(/<\/?\w+[^\>]*>/g)),
      content = html.split(/<\/?\w+[^\>]*>/g),
      container = document.createElement('div'),
      div = document.createElement('div'),
      indexDict = {},
      tagName = [];

  tags.forEach(tag => {
      indexDict[tag[0]] = 0;
      tagName.push((tag[0]))});
  
  while (tags.length + content.length > 1){
      container.textContent += content.shift();
      let tag = tags.shift();
      div.innerHTML = tag[0];
      if (tag + `</${tag[0].match(/\w+/)}>` === div.innerHTML){
          let res = tagName.indexOf(`</${tag[0].match(/\w+/)}>`, indexDict[`</${tag[0].match(/\w+/)}>`]);
          if( res+1 ){
              indexDict[`</${tag[0].match(/\w+/)}>`] = res + 1;
              isNaN(indexDict[`<${tag[0].match(/\w+/)}>`]) ? indexDict[`<${tag[0].match(/\w+/)}>`] = 1 : ++indexDict[`<${tag[0].match(/\w+/)}>`];
              container.textContent += tag[0];
          }
          else {
              container.textContent += `<xmp>${tag[0]}</xmp>`;
          }
      } else {
          if (tag[0].includes('/')){
              if (indexDict[tag[0].replace(/\//, "")])
              {
                  --indexDict[tag[0].replace(/\//, "")];
                  container.textContent += tag[0];
              } else {
                  container.textContent += `<xmp>${tag[0]}</xmp>`;
              } 
          } else {
              if (tag[0] === div.innerHTML ){
                  container.textContent += tag[0];
              } else {
                  container.textContent += `<xmp>${tag[0]}</xmp>`;
              }
          }
      }
  }

  container.textContent += content.shift();
  return container;
}

function buttonSubmit(block) {
  let content = localStorage.getItem(block.id);
  if (content){
    let backup = block.innerHTML;
    block.innerHTML = content;
    let button = document.createElement('button');
    button.textContent = 'cancel';
    button.setAttribute("type", "submit");
    button.style.width = '60px';
    button.style.height = "20px";
    button.style.maxHeight = "100%";
    button.style.maxWidth = "100%";
    button.style.bottom = "20px";
    button.style.resize = "both";
    block.style.position = "relative";
    button.style.position = "absolute";
    button.id = 'btnSubmit';
    button.onclick = () => {
    block.innerHTML = backup;
      localStorage.removeItem(block.id);
      addInputEditor(block);
    };
  block.appendChild(button);
  }
  
};

function addInputEditor(block) {
 let area = document.createElement('textarea');
      area.style.width = '40px';
      area.style.height = "20px";
      area.value = block.innerHTML;
      area.style.position = "absolute";
      area.ondblclick = () => {
        if(isValid(area.value)){
          localStorage.setItem(block.id, area.value);
          console.log('onfocus')
          block.innerHTML = localStorage.getItem(block.id)
     
        }
        else{
          let content = area.value;
          document.querySelector('textarea').textContent=content;
          let newCont = buildHtml(content);
          localStorage.setItem(block.id, newCont.textContent);
          console.log('made text')
          block.innerHTML = localStorage.getItem(block.id);

        }
             
          };
  if (!localStorage.getItem(block.id)){
    block.appendChild(area);
  }
  
  return area;
};
let blocksArr = [sidebar, header, center, footer, s3];

let task6 = () => {
  blocksArr.forEach(block => {
      if (localStorage.getItem(block.id)) {
        buttonSubmit(block);
      } else {
        let area = addInputEditor(block);
      }
  });
};

task6();