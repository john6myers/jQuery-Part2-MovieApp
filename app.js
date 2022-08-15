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

    // const list = document.getElementById('list')
    // const li = document.createElement('li');
    // li.addEventListener('click', () => {
    //   // todo
    //   alert('clicked')
    // })
    // li.innerHTML = 
    //  `<b>Movie Title: </b> ${title} 
    //   <b>Movie Rating:</b> ${rating} 
    //   <button class="remove">Delete</button>`;
    // list.appendChild(li)

    $('#form')[0].reset();
  });
  
  $(`body`).on(`click`, `.remove`, function () {
    $(this).closest(`li`).remove();
  });