$.ajax({
  type: 'GET',
  url: 'http://localhost:3000/project',
  data: {},
  success: function (result) {
    result.forEach((e) => {
      $('.card-title').html(e.judul_project);
      $('.card-text').html(e.desc_project);
      const i = $('.card').prepend(`<img class="card-img-top" src="img/${e.gambar_project}" />`);
      console.log(i);
    });
    // const ada = $('.card-title').html(result[0]['judul_project']);
  },
});
