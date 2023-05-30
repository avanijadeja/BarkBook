// javascript file for create new review 

const newFormHandler = async function(event) {
    event.preventDefault();
  // console.log("hi");

  const postreview= document.querySelector('textarea[name="add-review"]').value;

  const id = document.querySelector('#post-id').value;
  
  // console.log(id);

    await fetch(`/api/post/review`, {
      method: 'POST',
      body: JSON.stringify({
        groomerId: id,  
      commentText : postreview,
    }),
    headers: { 'Content-Type': 'application/json' },
    });
    // alert("New Data is created");
   
    document.location.replace('/groomer/'+ id);
  };
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);
  
  