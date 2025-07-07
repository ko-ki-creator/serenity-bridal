// ナビゲーション展開
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function() {
    ham.classList.toggle('active');
    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden'; //activeの時はスクロールさせない
    } else {
        document.body.style.overflow = ''; //activeがない時はスクロールを可能にする
    }
});