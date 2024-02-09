document.addEventListener("DOMContentLoaded", function () {
    // 初期設定
    let prevScrollPos = window.pageYOffset;
    let header = document.getElementById("header");
    let menu = document.querySelector(".Menu");
    let menuButton = document.getElementById("menuButton");

    // ページ読み込み時、ヘッダーを隠す
    header.classList.add("hidden");

    // スクロール時の処理
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;

        // 下に300pxスクロールしたか、メニューが開いている場合はヘッダーを表示
        if (currentScrollPos > 300 || menu.classList.contains('Menu-Open')) {
            header.classList.remove("hidden");
        } else {
            // それ以外の場合は、ヘッダーを隠す
            header.classList.add("hidden");
        }

        // ページトップにスクロールした際、ヘッダーも一時的に隠れる
        if (currentScrollPos === 0 && !menu.classList.contains('Menu-Open')) {
            header.classList.add("hidden");
        }

        prevScrollPos = currentScrollPos;
    };

    // ハンバーガーメニューのトグル
    menuButton.addEventListener("click", function () {
        // メニューが開かれた瞬間にヘッダーを表示する
        header.classList.add('Header-Visible');

        // メニューの表示/非表示を切り替え
        menu.classList.toggle("Menu-Open");

        // body要素にoverflow: hidden;を適用するか解除する
        document.body.style.overflow = (document.body.style.overflow === 'hidden') ? '' : 'hidden';

        // メニューが開いている場合、ハンバーガーメニューのアイコンを切り替える
        if (menu.classList.contains('Menu-Open')) {
            menuButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="Menu-CloseBtn-Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>';
        } else {
            menuButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="Menu-CloseBtn-Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path></svg>';
        }
    });

    // ページを離れる際にトップにスクロール
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
});

// ローディングJS
$(document).ready(function () {
    // ローディング画面の表示
    $(".loader").delay(1500).fadeOut('slow', function () {
        // ローディングが終了したらスクロールを再開
        $("body").css("overflow", "auto");
    });

    $(".loading_txt").delay(1200).fadeOut('slow');

    // ローディング中はスクロールを禁止
    $("body").css("overflow", "hidden");
});

// ビデオ要素を取得
var video = document.getElementById("myVideo");

// ビデオの速度を変更する関数
function changeSpeed(newSpeed) {
    video.playbackRate = newSpeed;
}

// 例: 速度をx倍に変更する
changeSpeed(0.9);