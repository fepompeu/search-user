const render = (allRequestedUsers) => {
  buildUsersPanel(allRequestedUsers);
  buildStatisticsPanel(allRequestedUsers);
};

const buildUsersPanel = (allRequestedUsers) => {
  const panelUserHTML = document.querySelector("#users");
  let newPanelHTML = `<div>
  <h5>${allRequestedUsers.length} User(s) Found</h5>
  `;

  allRequestedUsers.forEach((user) => {
    const { name, picture, age } = user;

    newPanelHTML += `<div class="divRow">
    <img src="${picture}" alt="${name}">
    <p>${name}, ${age} years old</p>
    </div>
    `;
  });

  newPanelHTML += "</div>";
  panelUserHTML.innerHTML = newPanelHTML;
};

const buildStatisticsPanel = (allRequestedUsers) => {
  const panelStatisticsHTML = document.querySelector("#statistics");

  const countMaleGender = countTotalMaleGender(allRequestedUsers);
  const countFemaleGender = countTotalFemaleGender(allRequestedUsers);
  const sumAges = sumAgesOfUsers(allRequestedUsers);
  const averageAges = averageAllAges(sumAges, allRequestedUsers);

  const newPanelHTML = `
  <div>
    <h5>Statistics</h5>
    <div class="divRow">
      Male gender: ${countMaleGender}
    </div>
    <div class="divRow">
      Female gender: ${countFemaleGender}
    </div>
    <div class="divRow">
      Sum of ages: ${sumAges}
    </div>
    <div class="divRow">
      Average ages: ${averageAges}
    </div>
  </div>
  `;
  panelStatisticsHTML.innerHTML = newPanelHTML;
};

const countTotalMaleGender = (allRequestedUsers) => {
  return allRequestedUsers.filter((user) => user.gender === "male").length;
};

const countTotalFemaleGender = (allRequestedUsers) => {
  return allRequestedUsers.filter((user) => user.gender === "female").length;
};

const sumAgesOfUsers = (allRequestedUsers) => {
  return allRequestedUsers.reduce((accumulator, current) => {
    return accumulator + current.age;
  }, 0);
};
const averageAllAges = (sumAges, allRequestedUsers) => {
  if (sumAges) {
    return (sumAges / allRequestedUsers.length).toFixed(2);
  } else {
    return 0;
  }
};
