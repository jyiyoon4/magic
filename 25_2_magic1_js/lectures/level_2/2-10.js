var button = $('.tab-button');
var content = $('.tab-content');

// for (let i = 0; i < button.length; i++) {
//   button.eq(i).on('click', function () {
//     tabs(i);
//   });
// }

function tabs(i) {
  button.removeClass('orange');
  content.removeClass('show');
  button.eq(i).addClass('orange');
  content.eq(i).addClass('show');
}

$('.list').on('click', function (e) {
  tabs(Number(e.target.dataset.button));
  //   if (e.target == document.querySelectorAll('.tab-button')[0]) {
  //     tabs(0);
  //   }
  // });
  // $('.list').on('click', function (e) {
  //   if (e.target == document.querySelectorAll('.tab-button')[1]) {
  //     tabs(1);
  //   }
  // });
  // $('.list').on('click', function (e) {
  //   if (e.target == document.querySelectorAll('.tab-button')[2]) {
  //     tabs(2);
  //   }
});
