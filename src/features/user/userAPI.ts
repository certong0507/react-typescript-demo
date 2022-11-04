import axios from "axios";

export async function doLogin() {
  return await axios.get(
    `${process.env.REACT_APP_API_ROOT_URL}/api/v1/coffees`
  );
}
