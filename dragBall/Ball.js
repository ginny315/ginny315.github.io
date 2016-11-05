// var Ball = {
//     obj : null,
//     distObj:null,
//     //初始化 
//     init : function(name){ 
//         var o = document.getElementsByClassName(name)[0]; 
//         //当onmousedown开始拖拽 
//         //o.ondragstart = Ball.start; 
//         o.addEventListener('dragstart',Ball.start);

//     },
//     //设置拖动事件处理程序
//     start : function(e){ 
//         console.log('start')
//         var o = Ball.obj = this; 
//         console.log(this)
//         //this.style = 'opacity:0';
//         var e = e || window.event;
//         var dt = e.dataTransfer;
//         dt.setData('Text','3');
//         console.log(dt.getData('Text'))
//     },
// };

function Ball (){
    var self = this;
    this.obj = null;
    this.img = './ball.png';
    this.index = null;
    //初始化 
    this.init = function(container,index){ 
        //var o = document.getElementsByClassName(name)[0]; 
        //当onmousedown开始拖拽 
        //o.ondragstart = Ball.start; 
        self.index = index;
        var o = document.createElement('li');
        o.setAttribute('draggable','true');
        o.setAttribute('id',index);
        o.setAttribute('class','ball');
        var img = document.createElement('img');
        img.setAttribute('src',self.img);
        o.appendChild(img);
        o.addEventListener('dragstart',self.start);
        container.appendChild(o);
    };
    //设置拖动事件处理程序
    this.start = function(e){ 
        console.log('start')
        console.log(e)
        //self.style = 'opacity:0';
        //console.log(self.parent)
        console.log(e.target.parentNode.id)
        var dt = e.dataTransfer;
        dt.setData('Text',e.target.parentNode.id);
        dt.effectAllowed = "move";
        console.log(dt.getData('Text'))
    };
};