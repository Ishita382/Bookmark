const send_request = async (path, method, data) => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  const url = "https://bookmarks-app-server.herokuapp.com/";

  const getMethods = {
    method: "GET",
    headers: { Authorization: `Bearer ${auth}` },
  };

  const postMethods = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify(data),
  };

  let result = fetch(
    url.concat(path),
    method === "GET" ? getMethods : postMethods
  );

  let api_response = await result.then((response) => response.json());
  return api_response;
};

export default send_request;
