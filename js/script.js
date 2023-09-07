const personalData = {
  slackName: "Daniel Essien",
  currentTrack: "Frontend Track",
  githubURL: "https://github.com/danieledisons",
};

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

  const utcTimestamp = new Date().getTime();
  console.log(utcTimestamp);

  document.getElementById("currentUTCTime").innerHTML =
    "<h3>Current UTC time " + utcTimestamp + "</h3>";

  document.getElementById("currentDayOfTheWeek").innerHTML =
    "<h3> Current Day of the week: " + weekday + "</h3>";
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
};

currentTime();
