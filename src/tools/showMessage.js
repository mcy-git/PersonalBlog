import icon from "../components/icon";
import getComponentDom from "./getComponentDom";
import styles from "./showMessage.module.less";
export default function (options = {}) {
    const content = options.content || "默认文字";
    const container = options.container || document.body;
    const type = options.type || "info";
    const duration = options.duration || 1500;
    const div = document.createElement("div");
    div.className = `${styles.message} ${styles['message-' + `${type}`]}`;
    const el = getComponentDom(icon, { type });
    div.innerHTML = `${el.outerHTML}<span>${content}</span>`;
    if (getComputedStyle(container).position == "static") {
        container.style.position = "relative";
    }
    container.appendChild(div);
    div.clientHeight;
    div.style.transform = `translate(-50%, -50%)`;
    div.style.opacity = 1;
    setTimeout(() => {
        div.style.transform = `translate(-50%, -50%) translateY(-20px)`;
        div.style.opacity = 0;
        div.addEventListener('transitionend',()=>{
            div.remove();
            //如果穿了回调则运行
            options.callback && options.callback();
        },{once: true})
    }, duration);
}