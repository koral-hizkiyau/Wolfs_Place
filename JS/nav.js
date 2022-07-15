function getOriginalWidthOfImg(img_element) {
    var t = new Image();
    t.src = (img_element.getAttribute ? img_element.getAttribute("src") : false) || img_element.src;
    return t.width;
}