import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

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
  const { repositories } = useRepositories();

  const repoNodes = repositories ? repositories.edges.map((e) => e.node) : [];

  return (
  );
};

export default RepositoryList;
