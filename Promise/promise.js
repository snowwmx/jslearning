function Promise(executor){
    //同步调用执行器函数
     this.promiseState='pending';
     this.promiseResult=null;
     const self=this;
     this.callbacks=[];
    function resolve(data){
           //修改状态
     if(self.promiseState!='pending')
               return;
    self.promiseState='fulfilled';
           //设置对象结果值
       self.promiseResult=data;

    self.callbacks.forEach(item=>{
        item.onResolved(data);
    })
    }

    function reject(data){
        if(self.promiseState!='pending')
        return;
    self.promiseState='rejected';
        //设置对象结果值
    self.promiseResult=data;

    self.callbacks.forEach(item=>{
        item.onRejected(data);
    })
}
    try{
     executor(resolve,reject);
    }catch(e){
        reject(e);
    }  

}

Promise.prototype.then=function(onResolved, onRejected){
    //调用回调函数
    const self=this;
    if(typeof onRejected!=='function'){
        onRejected=reason=>{
            throw reason;
        }
    }
    if(typeof onResolved!=='function'){ 
        onResolved=value=>value;
    }
    return new Promise((resolve,reject)=>{
        function callback(type){
            try{
                let result=type(self.promiseResult);
                if(result instanceof Promise){
                 result.then(v=>{
                     resolve(v);
                 },r=>{
                     reject(r);
                 })
                }
                else{
                 resolve(result);
                }
               }catch(e){
                  reject(e);
               }
        }
    if(this.promiseState==='fulfilled'){
        callback(onResolved);
      }


     if (this.promiseState==='rejected'){
      callback(onRejected);
        }


    if (this.promiseState==='pending'){
         //保存回调函数
      this.callbacks.push({
        onResolved:function(){callback(onResolved)},
        onRejected:function(){callback(onRejected)}
      });                  
     }

 });
}

Promise.prototype.catch=function(onRejected){
    return this.then(undefined,onRejected);
}

Promise.resolve=function(value){

    return new Promise((resolve,reject)=>{
         if(value instanceof Promise){
            value.then(v=>{
              resolve(v);
         },r=>{
                reject(r);
         });
        }
         else
            resolve(value);
    });
}

Promise.reject=function(reason){
    return new Promise((resolve,reject)=>{
          reject(reason);
    });
}

Promise.all=function(promises){
    return new Promise((resolve,reject)=>{
      for(var i=0;i<promises.length;i++){
        promises[i].then()
      }
    });
}