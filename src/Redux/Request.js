import { URL } from "../utils/constants";

const sendRequest = async (path, method, item) => {
  const auth = JSON.parse(localStorage.getItem("auth"));

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
    body: JSON.stringify(item),
  };

  const delMethods = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify(item),
  };

  const putMethods = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify(item),
  };

  let result = fetch(
    URL.concat(path),
    method === "GET"
      ? getMethods
      : method === "POST"
      ? postMethods
      : method === "PUT"
      ? putMethods
      : delMethods
  );

  let api_response = await result.then((response) => response.json());

  return api_response;
};

export default sendRequest;
