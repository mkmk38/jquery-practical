$(function () {
  // メインビジュアルをカルーセルに
  $(".slider").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    fade: true,
    cssEase: "linear",
  });

  // class属性がopacityの要素の上にマウスカーソルが重なったら
  $(".opacity").on("mouseover", function () {
    // id属性がopacity1の要素の不透明度を0.6にする
    $(this).animate({
      opacity: 0.6,
    });
  });

  // class属性がopacityの要素の上からカーソルが離れたら
  $(".opacity").on("mouseout", function () {
    // id属性がopacity1の要素の不透明度を1に戻す
    $(this).animate({
      opacity: 1,
    });
  });

  $(window).scroll(function () {
    // スクロール量が100pxを超えたら
    if ($(this).scrollTop() > 100) {
      // TOPボタンを表示する
      $("#page-top").fadeIn();
      // スクロール量が100px未満ならばTOPボタンを非表示にする
    } else {
      $("#page-top").fadeOut();
    }
  });

  // TOPボタンをクリックしたらページのトップまでスクロールする
  $("#page-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "fast");
  });

  // ページ内リンクのスクロールをなめらかに
  $('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // スクロールしたときにセクションをフェードイン
  $(window).scroll(function () {
    $("section").each(function () {
      const imgPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll > imgPos - windowHeight + 100) {
        $(this).addClass("fade-in");
      }
    });
  });

  // Worksの画像の上にマウスカーソルが重なったら
  $(".item>img").on("mouseover", function () {
    // Worksの画像の不透明度を0.5にする
    $(this).animate({
      opacity: 0.5,
    });
  });

  // Worksの画像の上からカーソルが離れたら
  $(".item>img").on("mouseout", function () {
    // Worksの画像の不透明度を1に戻す
    $(this).animate({
      opacity: 1,
    });
  });

  // Worksの画像をクリックしたときにモーダルで拡大表示
  $(".item>img").on("click", function () {
    // クリックされた画像のsrc属性の値を取得する
    const imgSrc = $(this).attr("src");
    // モーダルの画像部分（img要素）のsrc属性に取得した値を追加する
    $(".big-img").attr("src", imgSrc);
    // モーダルを表示
    $(".modal").fadeIn();
  });

  //  閉じるボタンをクリックしたときにモーダルを非表示
  $(".close-btn").on("click", function () {
    $(".modal").fadeOut();
  });
});
