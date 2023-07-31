/*
document.querySelector（）选择器，选择文档中的第一个匹配的元素
*/

let myImage = document.querySelector("img");	//<img>标签

let myButton = document.querySelector("button");//<button>标签
let myHeading = document.querySelector("h1");	//<h1>标签

/*------------------------------------------------
点击切换图片
------------------------------------------------*/
myImage.onclick = function () {					//匿名函数
  let mySrc = myImage.getAttribute("src");		//获取属性值
  if (mySrc === "../img/01.jpeg") {
    myImage.setAttribute("src", "../img/02.jpeg");
  } else {
    myImage.setAttribute("src", "../img/01.jpeg");
  }
};

/*----------------------------------------------
该函数首先调用了 prompt() 函数，
与 alert() 类似会弹出一个对话框。
但是这里需要用户输入数据，
并在确定后将数据存储在 myName 变量里。

接下来将调用 localStorage API，它可以将数据存储在浏览器中供后续获取。
这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，并把 myName 变量复制给它。
最后将 textContent 属性设置为一个欢迎字符串加上这个新设置的名字。
----------------------------------------------*/
function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
}

//初始化代码，在页面初次读取时进行构造工作：
if (!localStorage.getItem("name")) {
  setUserName();	//不存在，创建新用户
} 
else {//存在，获取数据
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function () {
  setUserName();
};
