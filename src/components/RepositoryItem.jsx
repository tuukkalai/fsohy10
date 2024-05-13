import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 16,
    backgroundColor: "#ffffff",
    gap: 16,
  },
  top: {
    flexGrow: 1,
    flexDirection: "row",
    gap: 16,
  },
  details: {
    flexGrow: 1,
    gap: 8,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 4,
  },
  numbers: {
    flexDirection: "row",
    justifyContent: "space-around",
    item: {
      gap: 4,
    },
  },
  languages: {
    flexDirection: "row",
    gap: 4,
  },
  language: {
    padding: 8,
    backgroundColor: "#5141ef",
    borderRadius: 4,
  },
});

const roundCount = (count) => {
  if (count >= 1000) {
    return Math.round(count / 100) / 10 + " k";
  }
  return count;
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.top}>
        <View style={styles.image}>
          <Image
            source={{ uri: item.ownerAvatarUrl }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text fontWeight="bold">{item.fullName}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              color="secondary"
              style={{ flex: 1, flexWrap: "wrap" }}
            >
              {item.description}
            </Text>
          </View>
          <View style={styles.languages}>
            <View style={styles.language}>
              <Text
                style={{ color: "#ffffff" }}
                code
              >
                {item.language}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.numbers}>
        <View style={styles.numbers.item}>
          <Text
            fontWeight="bold"
            align="center"
          >
            {roundCount(item.stargazersCount)}
          </Text>
          <Text align="center">
            Star{item.stargazersCount === 1 ? "" : "s"}
          </Text>
        </View>
        <View style={styles.numbers.item}>
          <Text
            fontWeight="bold"
            align="center"
          >
            {roundCount(item.forksCount)}
          </Text>
          <Text align="center">Fork{item.forksCount === 1 ? "" : "s"}</Text>
        </View>
        <View style={styles.numbers.item}>
          <Text
            fontWeight="bold"
            align="center"
          >
            {roundCount(item.reviewCount)}
          </Text>
          <Text align="center">Review{item.reviewCount === 1 ? "" : "s"}</Text>
        </View>
        <View style={styles.numbers.item}>
          <Text
            fontWeight="bold"
            align="center"
          >
            {roundCount(item.ratingAverage)}
          </Text>
          <Text align="center">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
