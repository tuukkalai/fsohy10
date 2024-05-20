import { useEffect, useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    backgroundColor: "#c6c6c6",
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [repositories, setRepositories] = useState();

  const fetchRepos = async () => {
    const res = await fetch("http://192.168.1.106:5000/api/repositories");
    const resJson = await res.json();
    setRepositories(resJson);
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const repoNodes = repositories ? repositories.edges.map((e) => e.node) : [];

  return (
    <FlatList
      style={styles.content}
      data={repoNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <RepositoryItem item={item} />}
    />
  );
};

export default RepositoryList;
