import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className={"flex flex-1 items-center justify-center"}>
      <Text className="text-3xl font-pblack border p-4 rounded-md bg-green-500">
        Aura live
      </Text>
      <Link href={"/profile"}>Go to profile</Link>
    </View>
  );
}
