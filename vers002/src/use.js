const $start = function(){
    console.log("isMin (Thư viện Css - Js)\nBấm vào link: " +
                "https://iwt.io.vn/isMin/ để đến trang chủ của chúng tôi.");
}();
const check = {
    err : (x)=>{console.error("isMin lỗi: " + x);},
    war: (x)=>{console.warn("isMin cảnh báo: " + x);}
};
const $chk = function(x){
    console.log("log() create by isMin: " + x);
};
const chk = function(x){
    console.log(x);
};
const $txt = function(x){
    document.write("write() crate by isMin: " + x);
};
const txt = function(x){
    document.write(x);
};
const $check = {
    t : function(x){
        return console.log("Thuộc kiểu: " + typeof x);
    },
    v: ()=>console.log("isMin version: 0.02")
};
const $view = {
    f :(x) =>{document.querySelector(x).style.display = "none";},
    t: (x)=>{document.querySelector(x).style.display = "initial";},
};
const $is = (x)=>{return document.querySelector(x);};
const $get = {
    v : (x)=>{return document.querySelector(x).value;},
    a : (x, y)=>{return document.querySelector(x).getAttribute(y);}
};
const $rand = (x)=>{
    if(x == "" || x == undefined){
        return Math.random() * 271006;
    }else{
        return Math.random() * x;
    }
}
const $rand_r = (x)=>{
    if(x == "" || x == undefined){
        return Math.round(Math.random() * 271006);
    }else{
        return Math.round(Math.random() * x);
    }
}
const $load = (x, y)=>{
    $(x).load(y);
    //Need Jquery Lib for $load
}
const $new = () => location.reload();
const $new_page = (x) => location.replace(x);
const $new_page_true = (x) => location.href(x);
const $dbox = {
    nor : (x)=>{alert(x);}
}
const $pi = ()=>{
    return Math.PI;
}
const $round = (x)=>{
    if(typeof x == Number){
        return Math.round(x);
    }else{
        return check.err("$round() không chấp nhận loại dữ liệu bạn vừa truyền vào");
    }
}