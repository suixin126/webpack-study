import { checkPwd,checkUserName} from "../utils/check.js";
import './index.css'
const btn = document.getElementById('btn');
btn.onclick = function(){
    const username = document.getElementById('name').value;
    const pwd = document.getElementById('pwd').value;
    if(checkPwd(pwd) && checkUserName(username)){
        alert("登录成功");
    }else {
        alert("登陆失败")
    }
}