let title;
let rating;



$('#submit').on('click', function (e) {
    e.preventDefault();
  
    title = $('#title').val();
    rating = $('#rating').val();
  
    if (title.length < 2) {
      alert('Error: Please enter a title with atleast 2 characters');
      return;
    }  
  
    $(`ol`).append(
      `<li>
          <b>Movie Title: </b> ${title} 
          <b>Movie Rating:</b> ${rating} 
          <button class="remove">Delete</button>
        </li>`
    );


    $('#form')[0].reset();
  });
  
  $(`body`).on(`click`, `.remove`, function () {
    $(this).closest(`li`).remove();
  });