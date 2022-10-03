/**
 * Global variable
 */
const title = $('.titleForCard');
const desc = $('.descForCard');

$.ajax({
  type: 'GET',
  url: 'http://localhost:3000/project',
  data: {},
  success: function (result) {
    result.forEach((e) => {
      // $('.card-title').text(e.judul_project);
      // $('.card-text').html(e.desc_project);
      // $('.card').prepend(`<img class="card-img-top" src="img/${e.gambar_project}" />`);
    });
    // const ada = $('.card-title').html(result[0]['judul_project']);
  },
});

//post data
$('form').on('submit', function (e) {
  e.preventDefault();
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/project',
    data: {
      judul_project: title.val(),
      desc_project: desc.val(),
    },
    success: (req) => {
      req.forEach((e) => {
        $('.card-title').html(e.judul_project);
        $('.card-text').html(e.desc_project);
      });
    },
    error: () => {
      alert('error');
    },
  });
});
