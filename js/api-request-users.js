const getListOfUsersFromApi = async (text) => {
  const allUsers = await requestUsersApi();
  const allRequestedUsers = allUsers.filter((user) =>
    user.name.toLowerCase().includes(text.toLowerCase())
  );
  return allRequestedUsers;
};

const requestUsersApi = async () => {
  const res = await fetch(
    "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
  );
  const json = await res.json();
  allUsers = json.results.map((user) => {
    const { name, picture, dob, gender } = user;
    return {
      name: `${name.first} ${name.last}`,
      picture: picture.thumbnail,
      age: dob.age,
      gender: gender,
    };
  });
  return allUsers;
};
