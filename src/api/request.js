import axios from "axios";
import showMessage from "../tools/showMessage";
const ins = axios.create();
ins.interceptors.response.use(function (resp) {
    if (resp.data.code == 0) {
        //说明成功
        return resp.data.data;
    } else {
        showMessage({
            content: resp.data.msg,
            type: 'error',
        })
    }
    console.log('拦截器');
})
export default ins;