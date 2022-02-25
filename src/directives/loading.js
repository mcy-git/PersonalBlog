import ImgSrc from "../assets/loading.svg";
import styles from "./loading.module.less";
//创建img
function CreateImg() {
    const img = document.createElement('img');
    img.src = ImgSrc;
    img.className = styles.loading;
    img.setAttribute('existence', 'true');
    return img;
}
export default function (el, binding) {
    if (binding.value) {
        if (!el.querySelector('img[existence]')) {
            //如果没有img,则创建
            const img = CreateImg();
            el.appendChild(img);
        }
    } else {
        //删除img
        if (el.querySelector('img[existence]')) {
            //如果存在img,数据更新后删除
            el.querySelector('img[existence]').remove();
        }
    }

}