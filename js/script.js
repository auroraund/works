let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 300) {
        // 下に300pxスクロールしたら、ヘッダーを表示
        document.getElementById("header").classList.remove("hidden");
    } else {
        // それ以外の場合は、ヘッダーを隠す
        document.getElementById("header").classList.add("hidden");
    }
    prevScrollPos = currentScrollPos;
};
