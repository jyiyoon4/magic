var button = $('.tab-button');
var content = $('.tab-content');

// $('.tab-button')
//   .eq(0)
//   .on('click', function () {
//     button.removeClass('orange');
//     button.eq(0).addClass('orange');
//     content.removeClass('show');
//     content.eq(0).addClass('show');
//   });

// $('.tab-button')
//   .eq(1)
//   .on('click', function () {
//     button.removeClass('orange');
//     button.eq(1).addClass('orange');
//     content.removeClass('show');
//     content.eq(1).addClass('show');
//   });

// $('.tab-button')
//   .eq(2)
//   .on('click', function () {
//     button.removeClass('orange');
//     button.eq(2).addClass('orange');
//     content.removeClass('show');
//     content.eq(2).addClass('show');
//   });

for (let i = 0; i < button.length; i++) {
  button.eq(i).on('click', function () {
    button.removeClass('orange');
    button.eq(i).addClass('orange');
    content.removeClass('show');
    content.eq(i).addClass('show');
  });
}

// let이 아니라 var 사용/ for문 실행한 상태 ㄱ
// i=3
// button.eq(0).on('click', function () {});
// button.eq(1).on('click', function () {});
// button.eq(2).on('click', function () {});
// 안에 있는건 i. 그래서 3 넣으려고 할 것..
// let은 점위 {} 라 안에 있는 것까지 한 묶음으로 ㅇㅇ
