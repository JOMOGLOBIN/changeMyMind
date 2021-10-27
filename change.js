

$('#submit').on('click', function() {
  $('.rebutContainer').append(` 
  <div class="rebuttals">
    <img class="guy" src="guy.png">

    <div class="commentDiv"> 
      <h6 class="name"> ${$('#name').val()} </h6>
      <div class="comment"> ${$('#comment').val()} </div>
      <div class="noDisplay">
        <input class="appendInput" type="text" placeholder="Comment">
        <input class="appendSubmit" type="submit" value="submit">
      </div>
    </div>

    <div class="commentEdit">
      <h6 class="editDel" id="edit">Edit</h6>
      <h6 class="editDel" id="delete">Delete</h6>
    </div>

  </div>
  `) //interpolation end backtick

  $('.rebutContainer').on('click', '.appendSubmit', function() {
    let noDisplay = $(this).parents()[0];
    let appendInput = $(noDisplay).children()[0];
    let commentDiv = $(this).parents()[1];
    let comment = $(commentDiv).children()[1]; // fix this
    $(comment).text(`
      ${$(appendInput).val()}
    `)
  })
})
// val() is only ever for inputs

// edit button
//$this AKA #edit so edit doesn't toggle every comment,
// start position 18 moving to 11 changing class
$('.rebutContainer').on('click', '#edit', function() {
  let rebuttals = $(this).parents()[1];
  let commentDiv = $(rebuttals).children()[1];
  let noDisplay = $(commentDiv).children()[2];
  $(noDisplay).toggleClass('noDisplay');
})
// delete button
$('.rebutContainer').on('click', '#delete', function() {
  let rebuttals = $(this).parents()[1];
  $(rebuttals).text("");
})