// ナビゲーション展開
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function() {
    ham.classList.toggle('active');
    nav.classList.toggle('active');
});


$(function () {
  // ハンバーガーボタンクリックで実行
        $("#js-hamburger").click(function () {
        $(this).toggleClass("active");
        $("#js-nav").toggleClass("active");
    });

        $(".menu-nav-link").click(function () {
        $("#js-hamburger").removeClass("active");
        $("#js-nav").removeClass("active");
    });
});