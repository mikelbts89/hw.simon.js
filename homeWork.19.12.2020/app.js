const DOM = {};

const getUsersInfo = () => {
  if (DOM.init) return;
  const result = $.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
  });
  DOM.init = $("#main_div");
  DOM.init.append(
    drawHeaders(),
    result.done((res) => getUsersContent(res))
  );
};

const getUsersContent = (users) => {
  for (let key in users) {
    let userName = users[key].name;
    let userNick = users[key].username;
    let userEmail = users[key].email;
    let userPhone = users[key].phone;
    let userCity = users[key].address.city;
    let userStreet = users[key].address.street;
    draw(userName, userNick, userEmail, userPhone, userCity, userStreet);
  }
};

function drawHeaders() {
  let thRow = $("#tHead");
  let trLayoutHeaders = $("<tr/>");
  let thFirstName = $("<th/>", {
    text: "Name",
  });
  let thLastName = $("<th/>", {
    text: "User Name",
  });
  let thEmail = $("<th/>", {
    text: "Email",
  });
  let thPhone = $("<th/>", {
    text: "Phone",
  });
  let thCity = $("<th/>", {
    text: "City",
  });
  let thStreet = $("<th/>", {
    text: "Street",
  });

  thRow.append(trLayoutHeaders);
  trLayoutHeaders.append(
    thFirstName,
    thLastName,
    thEmail,
    thPhone,
    thCity,
    thStreet
  );
}

function draw(first, nick, email, phone, city, street) {
  let mainTbody = $("#tBody");
  let tduserName = $("<td/>");
  let trLayout = $("<tr/>");
  let tduserNick = $("<td/>");
  let tduserEmail = $("<td/>");
  let tduserPhone = $("<td/>");
  let tduserCity = $("<td/>");
  let tduserStreet = $("<td/>");

  tduserName.text(first);
  tduserNick.text(nick);
  tduserEmail.text(email);
  tduserPhone.text(phone);
  tduserCity.text(city);
  tduserStreet.text(street);
  mainTbody.append(trLayout);
  trLayout.append(
    tduserName,
    tduserNick,
    tduserEmail,
    tduserPhone,
    tduserCity,
    tduserStreet
  );
}

const reloadPage = () => {
  window.location.reload();
};
