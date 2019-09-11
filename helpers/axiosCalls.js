import axios from "axios";

export const routeUserLogin =
  "https://idl-timetable.herokuapp.com/studentweblogin";

export const titleCase = str => {
  return str
    .toLowerCase()
    .split(" ")
    .map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

export async function getData(params) {
  //Here i want to get the data then return them to the user.js page
  const res = await axios.get(params.url, { headers: params.headers });
  return res.data;
}

export async function getTeachingTimeTable(params) {
  const { prog_cen_id } = params[0];
  console.log("params: ", prog_cen_id);
  const res = await axios.get(
    `https://idl-timetable.herokuapp.com/teachingTimeTableItem?prog_cen_id=${8}`,
    { headers: params.headers }
  );
  return res.data;
}
