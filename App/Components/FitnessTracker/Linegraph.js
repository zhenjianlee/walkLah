import { LineChart, ProgressChart } from "react-native-chart-kit";

import { View, StyleSheet, StatusBar, Dimensions, Text,TouchableOpacity } from "react-native";

const chartConfig = {
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#fb8c00",
  backgroundGradientTo: "#ffa726",
  decimalPlaces: 1, 
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: "6",
    strokeWidth: "1",
    stroke: "#ffa726",
  },
};

const graphStyle={
    marginVertical: 1,
    borderRadius: 16,
}

export default function Linegraph({ arrayAcc,setArrayAcc }) {
  return (
    <View style={styles.viewcontainer}>
      <Text style={styles.heading}>Acceleration Logger</Text>
      <LineChart
        data={{
            labels: [],
            datasets: [
              {
                data: arrayAcc
              }
            ]
          }}
        width={Dimensions.get("window").width-20}
        height={350}
        chartConfig={chartConfig}
        style={graphStyle}
      />
       <TouchableOpacity
          onPress={()=>setArrayAcc([0])}
          style={styles.button}
        >
          <Text style={styles.buttontext}>Clear Graph</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewcontainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'blue',
    borderRadius:5,
    padding:5,
    height:45,
  },
  buttontext: {
    color: 'white',
    fontWeight:'bold',
  },
  heading: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
