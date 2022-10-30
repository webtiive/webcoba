/**
 * Global variable
 */

$.ajax({
  type: 'GET',
  url: 'http://localhost:3000/projects',
  data: {},
  success: function (result) {
    result.forEach((e) => {
      const ada = $('.swiper-wrapper').append(`
      <div class="card swiper-slide">
            <input type="hidden" name="trigger loop" value="${e}" />
            <img src="../../${e.gambar_project}"  />
            <div class="card-body">
              <h5 class="title-card">${e.judul_project}</h5>
              <hr />
              <p class="text-card">${e.desc_project}</p>
            </div>
          </div>
      `);
    });
  },
});
