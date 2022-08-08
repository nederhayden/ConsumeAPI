import { useEffect, useState } from "react";
import axios from "axios";

// api deezer = "https://api.deezer.com/";
// search = /search?q=
// genre = /genre

const api = axios.create({
  baseURL: "https://api.github.com/users/nederhayden",
  // baseURL: "https://api.deezer.com",
  // headers: { "Content-Type": "application/json" },
});

export function useApi(URL) {
  const [data, setData] = useState([]);

  async function loadRepositories() {
    let response = await api.get(URL);

    setData(response.data);

    return;
  }

  useEffect(() => {
    loadRepositories();
  }, []);

  return { data };
}
