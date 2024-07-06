var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-2m9bslyag2evo-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

export const getGoldRAte = async () => {
  const response = await fetch(
    "https://www.goldapi.io/api/XAU/USD",
    requestOptions
  );
  return await response.json();
};
