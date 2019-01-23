export const checkAuthorization = async (email, password) => {
  const url = `https://kennel-staging.herokuapp.com/api/v1/login?auth[email]=${email}&auth[password]=${password}`;
  const optionsObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = await fetch(url, optionsObj);
  return await response.json();
};
