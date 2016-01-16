function imgProcess(obj){
    if(typeof obj.callback != "function")
        throw new Error("please give me function ");
    if(!obj.img.src){
        obj.img.load(function(){
            obj.callback();
        });
    }
    obj.callback();
}
var obj = {
    img:new Image(),
    callback:function(){
    
    }
};
