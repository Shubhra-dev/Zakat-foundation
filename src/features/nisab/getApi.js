export const getGoldRAte = async () => {
  const response = await fetch(
    "https://admin.alzakati.com/api/v1/fetch-metal-rate?metal=xau&gram=1",
    {
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Accept: "application/json",
      },
    }
  );
  return await response.json();
};
