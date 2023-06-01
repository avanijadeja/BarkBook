// javascript file for logout

const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  // redirect to main page('/')
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};
//eventListner for logout.
document.querySelector("#logout").addEventListener("click", logout);
