'use strict';

$(function () {
  $('.search-item').on('click', function () {
    $('.search-item').removeClass('active');
    // サーチアイテムに設定したdata-group属性の値を取得
    const group = $(this).addClass('active').data('group');
    searchFilter(group);
  });
});

// リストを絞り込むファンクション
function searchFilter(group) {
  // 非表示状態を解除
  $('.list-item').removeClass('hide is-animated');
  if (group === '') {
    return;
  }
  const target = $('.list-item');
  target.each(function () {
    // リストアイテムに設定したdata-group属性の値を取得
    const itemData = $(this).data('group');
    if (itemData !== group) {
      $(this).addClass('hide');
    } else {
      $(this).addClass('is-animated');
    }
  });
}
