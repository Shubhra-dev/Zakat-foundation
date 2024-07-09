var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");
myHeaders.append("X-Requested-With", "XMLHttpRequest");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
export const getPost = async () => {
  const response = await fetch(
    "https://blog.alzakati.com/api/v1/fetch-share-blogs/6",
    requestOptions
  );
  return await response.json();
};
