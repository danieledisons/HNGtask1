const personalData = {
  slackName: "Daniel Essien",
  currentTrack: "Frontend Track",
  githubURL: "https://github.com/danieledisons",
};

// document.getElementById("slackUsername").innerHTML = personalData.slackName;
// document.getElementById("myTrack").innerHTML = personalData.currentTrack;
// document.getElementById("githubURL").innerHTML = personalData.githubURL;
// document.getElementById("testingstuff").innerHTML = "testing stuff";

const currentTime = () => {
  const now = new Date();
  const weekdayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const year = now.getUTCFullYear();
  const month = now.getUTCMonth() + 1;
  const day = now.getUTCDate();
  const hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();
  const seconds = now.getUTCSeconds();
  const weekday = weekdayNames[now.getUTCDay()];
  //   const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  const formattedDateTime = `${hours}:${minutes}:${seconds}`;

  //   document.getElementById("date-time").innerHTML = personalData.slackName;
  //   document.getElementById("slackUsername").innerHTML =
  //     "<p>Slack username is </p> + personalData.slackUsername";

  //   document.body.innerHTML =
  //     "<h3>Today's date is " + formattedDateTime + "</h3>";

  document.getElementById("currentUTCTime").innerHTML =
    "<h3>Current UTC time " + formattedDateTime + "</h3>";

  document.getElementById("currentDayOfTheWeek").innerHTML =
    "<h3> Current Day of the week: " + weekday + "</h3>";
  let t = setTimeout(function () {
    currentTime();
  }, 1000);

  //   console.log(formattedDateTime);
};

currentTime();

// console.log(weekday);

// document.getElementById("slackUsername").innerHTML = personalData.slackName;
