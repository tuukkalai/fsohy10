import { useEffect, useState } from "react";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepos = async () => {
    setLoading(true);

    const res = await fetch("http://192.168.1.106:5000/api/repositories");
    const resJson = await res.json();

    setLoading(false);
    setRepositories(resJson);
  };

  useEffect(() => {
    fetchRepos();
  }, []);
  return { repositories, loading, fetchRepos };
};

export default useRepositories;
