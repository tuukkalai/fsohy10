import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import Text from "../Text";

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
  const { repositories, loading } = useRepositories();
  // console.log(repositories);

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <FlatList
          style={styles.content}
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RepositoryItem item={item} />}
        />
      )}
    </>
  );
};

export default RepositoryList;
