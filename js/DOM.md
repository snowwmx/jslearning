# DOM

 Document object model

一个网页-文档
网页内各个部分，各个组件-对象
对象之间的关系，方便获取对象-模型

![dom对象结构](/day01/imgs/dom.png)

## 节点

网页中每一个部分都是节点
分为四类

- 文档节点：整个html文档
- 元素节点： html文档中的html标签
- 属性节点： 标签的属性，属性名和属性值
- 文本节点： 页面文本
![节点属性](/day01/imgs//nodevalue.png)

## 事件

各类浏览器与前端页面的交互行为

### 处理事件

  1. 在事件对应属性中设置js代码，当事件触发时，代码执行

## 文档加载

   页面读一行，加载一行
   需要把script标签放到body中，便于获取到文档元素
   window.onload 所有页面加载完成之后执行onload函数

```js
   <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
     <script>
          window.onload=function(){
            var bbb=document.getElementById("btn");
         bbb.innerHTML="i am a button";
         console.log(bbb);
         console.log(bbb.innerHTML);
       bbb.onclick=function(){     //响应函数
        alert("你为什么要点我");
       }
          }
    </script>
  
</head>
<body>
    <button id="btn">我是一个按钮
    </button>  
    <!-- <script>
         var bbb=document.getElementById("btn");
        //  bbb.innerHTML="i am a button";
         console.log(bbb);
         console.log(bbb.innerHTML);
       bbb.onclick=function(){     //响应函数
        alert("你为什么要点我");
       }
    </script> -->
</body>
</html>
```

## dom查询

[domApi查看](https://www.w3school.com.cn/jsref/dom_obj_document.asp)

