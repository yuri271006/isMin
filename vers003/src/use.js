const $sys = {
    info: ()=>{
        console.log("isMin (Lib CSS and JAVASCRIPT)\nVề chúng tôi: https://iwt.io.vn/isMin/vers003/index.html");
    },
    vers: ()=> console.log("isMin - Version: 0.03"),
    bug: {
        e: (x)=> console.error("isMin: " + x),
        w: (x)=> console.warn("isMin: " + x),
        n: (x)=> console.log("isMin: " + x),
        d: ()=> console.clear()
    } 
};
//$un()
const $un = (x)=>{
    if(x === undefined || x === ""){
        $sys.bug.w("Hàm $un() sẽ không chạy nếu thiếu tham số");           
    }else{
        switch (x) {
            case "csl":
                console.clear();
                break;
            default:
                $sys.bug.e(`Hàm $un(${x}) không hiểu tham số này`);
                break;
        }
    }
}
//Console
const $csl = (x, y) => {
    if(y === "" || y === undefined){
        console.log(x);
    }else{
        switch (y) {
            case "e":
                console.error(x);
                break;
            case "w":
                console.warn(x);
                break;
            default:
                $sys.bug.e(`$csl(${y}) không hiểu được tham số này`);
                break;
        }
    }
}
//Number
const $PI = (x)=>{
    if(x === undefined || x === ""){
        return Math.PI;
    }else if(x === true){
        $sys.bug.n("Hàm $PI(true) sẽ trả về số pi rút ngắn là 3,14");
        return Math.PI.toFixed(2);
    }else if(x === "round"){
        return Math.PI.toFixed(2);
    }
    else{
        $sys.bug.e(`Hàm $PI(${x}) tham số vào không hợp lệ`)
    }
}
//Document.write();
const $txt = function(x){
    document.write(x);
};
//Check data type
const $chk =  function(x){
    if(x === ""){
        console.log("$chk() cho biết tham số truyền vào là chuỗi rỗng");
    }
    else if(x === undefined){
        console.log("$chk() cho biết tham số truyền vào là undefined");
    }
    else{
        console.log("$chk() cho biết [" + x + "] thuộc kiểu: " + typeof x);
    }
};
//Random
const $rand = (x)=>{
    if(x === undefined){
        $sys.bug.w("$rand() cho về số ngẫu nhiên từ 0 đến 271006 nếu không có giá trị neo");
        return Math.random() * 271006;
    }else{
        if(typeof x === "number" || typeof x === "Number"){
            return Math.random() * x;
        }else{
            $sys.bug.e("$rand() không nhận kiểu tham số khác ngoài number"); 
        }
    }
}
//Hàm làm tròn số
const $round ={
    top: (x)=>{
        if(x === undefined){
            $sys.bug.w("$round.top() không nhận dữ liệu loại undefined");
        }else if(x === "info"){
            $sys.bug.n("$round.top() trả về số làm tròn trên");
        }else{
            if(typeof x === "number" || typeof x === "number"){
                return Math.ceil(x);
            }else{
                $sys.bug.e("$round.top() không nhận kiểu dữ liệu khác ngoài number"); 
            }
        }
    },
    cen: (x)=>{
        if(x === undefined){
            $sys.bug.w("$round.cen() không nhận dữ liệu loại undefined");
        }else if(x === "info"){
            $sys.bug.n("$round.cen() trả về số làm tròn theo qui ước x 5 x");
        }else{
            if(typeof x === "number" || typeof x === "number"){
                return Math.round(x);
            }else{
                $sys.bug.e("$round.cen() không nhận kiểu dữ liệu khác ngoài number"); 
            }
        }
    },
    bot: (x)=>{
        if(x === undefined){
            $sys.bug.w("$round.bot() không nhận dữ liệu loại undefined");
        }else if(x === "info"){
            $sys.bug.n("$round.bot() trả về số làm tròn dưới");
        }else{
            if(typeof x === "number" || typeof x === "number"){
                return Math.floor(x);
            }else{
                $sys.bug.e("$round.bot() không nhận kiểu dữ liệu khác ngoài number"); 
            }
        }
    }
}
//Hiển thị phần tử (Dom)
const $view = function(x, y){
    if(x === undefined || x === "" || y === undefined || y === ""){
        $sys.bug.e("Hàm $view() bắt buộc đủ 2 tham số truyền vào (x,y) với x là phần tử, y là trạng thái phần tử (True = Hiện và False = Ẩn)");
    }else{
        if(typeof x === "number" || typeof y === "number" || typeof x === "Number" || typeof y === "Number"){
            $sys.bug.w("Hàm $view() có tham số vào không hợp lệ");
        }else{
            if(y === true){
                document.querySelector(x).style.display = "initial";
            }else if(y === false){
                document.querySelector(x).style.display = "none";
            }else{
                $sys.bug.w("Hàm $view(x,y) có tham số vào y không hợp lệ");
            }
        }
    }
};
//Chọn phần tử
const $it = (x)=>{return document.querySelector(x);};
//Basic alert
const $al = function(x, y){
    if(y === 1){
        alert(x);
    }
    else if(y === 2){
        return prompt(x);
    }
    else if(y === 3){
        return confirm(x);
    }
    else{
        $sys.bug.e("$al() không chấp nhận các tham số vừa truyền");
    }
}
//Short Jquery [Need Jquery Lib for isMin()]
const jq = {
    load: (x, y)=>{
        $(x).load(y);
    },
    attr: {
        g: (x, y)=>{
            return $(x).attr(y);
        },
        s: (x,y,z)=>{
            $(x).attr(y, z);
        },
        r: (x,y)=>{
            $(x).removeAttr(y);
        }
    }, 
    val: {
        g: (x)=>{
            return $(x).val();
        },
        s: (x, y)=>{
            $(x).val(y);
        }
    },
    txt: {
        g : (x)=>{
            return $(x).text();
        },
        s : (x, y)=>{
            $(x).text(y);
        }
    },
    html: {
        g: (x)=>{
            return $(x).html();
        },
        s: (x, y)=>{
            $(x).html(y);
        }
    },
    view: {
        t: (x, y)=>{
            $(x).show(y);
        },
        f: (x, y)=>{
            $(x).hide(y);
        }
    },
    class: {
        a: (x,y)=>{
            $(x).addClass(y);
        },
        r: (x, y)=>{
            $(x).removeClass(y);
        },
        t: (x, y)=>{
            $(x).toggleClass(y);
        },
        tt: (x, y, z)=>{
            $(x).toggleClass(y, z);
        }
    },
    css: (x, y)=>{
        $(x).css(y);
    },
    ele: {
        r: (x, y)=>{
            $(x).remove(y);
        },
        e: (x, y)=>{
            $(x).empty(x);
        },
        a: (x, y)=>{
            $(x).append(y);
        }
    }
}
//Cần có thư viện SweetAlert
const $swal = function(x,y,z){
    Swal.fire({title: y, icon: x, text: z});
}