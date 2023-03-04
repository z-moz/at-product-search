const BASE_URL = "https://global.atdtravel.com/api/";

async function search(searchParams) {
  let query = new URLSearchParams(searchParams).toString();
  try {
    let response = await fetch(BASE_URL + "products?" + query, {
      method: "GET",
    });
    if (response.ok) return response.json();
  } catch (error) {
    console.log(error);
  }
}

const exports = { search };
export default exports;

// const args = {
//   geo: "en",
//   title: "london",
//   offset: 10,
//   limit: 5,
// };

// async function run() {
//   const result = await searchDatabase(args);
//   //   console.log("this is the result: ", result);
//   console.log(
//     "title: ",
//     result.data[0].title,
//     "destination: ",
//     result.data[0].dest,
//     "img url: ",
//     result.data[0].img_sml
//   );
// }
// run();
