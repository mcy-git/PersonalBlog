import eventBus from "@/eventBus";
import {debounce} from "@/tools";
import defaultImg from "@/assets/default.gif";

let imgs = [];

function setImage(img) {
    img.dom.src = defaultImg;
    const rect = img.dom.getBoundingClientRect();
    //视口的高度
    const clientH = document.documentElement.clientHeight;
    const imgHeight = rect.height || 150;
    if (rect.top > -imgHeight && rect.top < clientH) {
        //表示在视口范围内
        img.dom.src = img.src;
        //处理过之后这一项就不在处理了，把它从数组中删除
        imgs = imgs.filter(item => item !== img);
    }
}

function setImages() {
    for (const item of imgs) {
        setImage(item);
    }
}

eventBus.$Bus.$on("DetailScroll", debounce(setImages, 100));
export default {
    inserted(el, binding) {
        const img = {
            dom: el,
            src: binding.value,
        };
        imgs.push(img);
        //加入数组后立即处理一次
        setImage(img);
    },
    unbind(el, binding) {
        //解绑时清空数组
        imgs = imgs.filter(item => item !== el);
    }
}