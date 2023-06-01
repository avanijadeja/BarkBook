// javascript file for create new review

const newFormHandler = async function (event) {
  event.preventDefault();
  const postreview = document.querySelector(
    'textarea[name="add-review"]'
  ).value;
  const id = document.querySelector("#post-id").value;
  await fetch(`/api/post/review`, {
    method: "POST",
    body: JSON.stringify({
      groomerId: id,
      commentText: postreview,
    }),
    headers: { "Content-Type": "application/json" },
  });
  document.location.replace("/groomer/" + id);
};
//eventListener for submit button
document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormHandler);
