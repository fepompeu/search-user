window.addEventListener("load", () => {
  const userSearchInput = document.querySelector("#icon_prefix");
  userSearchInput.addEventListener("keyup", searchUsers);

  const userSearchButton = document.querySelector("#search_button");
  userSearchButton.addEventListener("click", searchUsers);
  userSearchButton.click();
});

const searchUsers = async (event) => {
  event.preventDefault();

  if (!event.target.value) {
    event.target.value = document.querySelector("#icon_prefix").value;
  }
  const allUsers = await getListOfUsersFromApi(event.target.value);
  render(allUsers);
};
