import React, { useState } from 'react'
import { View ,Text,StyleSheet ,Image,TouchableOpacity} from 'react-native'


const TwoPlayer = (props) => {
  
  
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  const toggle = (num) => {
    if (lock || data[num]) return;

    const newData = [...data];
    newData[num] = count % 2 === 0 ? "x" : "o";
    setData(newData);
    setCount(count + 1);
    
    checkWinner(newData);
  };

  const checkWinner = (newData) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (newData[a] && newData[a] === newData[b] && newData[a] === newData[c]) {
        setLock(true);
        alert(`${newData[a].toUpperCase()} wins!`);
        return;
      }
    }

    if (newData.every((item) => item !== "")) {
      setLock(true);
      alert("It's a draw!");
    }
  };

  return (
    <View>
        <View>
          <Text style={styles.heading}>XO Game</Text>
        </View>
        <View style={styles.sub}>
          <Text style={styles.subheading}>X - 1st player</Text>
          <Text style={styles.subheading}>O - 2nd player</Text>
        </View>
        <View style={styles.board}>
          <TouchableOpacity style={styles.boxes} onPress={() => toggle(0)}>
            {data[0] === "x" && <Image source={require('../assets/images/X.png')} style={styles.icon} />}
            {data[0] === "o" && <Image source={require('../assets/images/O.png')} style={styles.icono} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.boxes} onPress={() => toggle(1)}>
            {data[1] === "x" && <Image source={require('../assets/images/X.png')} style={styles.icon} />}
            {data[1] === "o" && <Image source={require('../assets/images/O.png')} style={styles.icono} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.boxes} onPress={() => toggle(2)}>
            {data[2] === "x" && <Image source={require('../assets/images/X.png')} style={styles.icon} />}
            {data[2] === "o" && <Image source={require('../assets/images/O.png')} style={styles.icono} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.boxes} onPress={() => toggle(3)}>
            {data[3] === "x" && <Image source={require('../assets/images/X.png')} style={styles.icon} />}
            {data[3] === "o" && <Image source={require('../assets/images/O.png')} style={styles.icono} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.boxes} onPress={() => toggle(4)}>
            {data[4] === "x" && <Image source={require('../assets/images/X.png')} style={styles.icon} />}
            {data[4] === "o" && <Image source={require('../assets/images/O.png')} style={styles.icono} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.boxes} onPress={() => toggle(5)}>
            {data[5] === "x" && <Image source={require('../assets/images/X.png')} style={styles.icon} />}
            {data[5] === "o" && <Image source={require('../assets/images/O.png')} style={styles.icono} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.boxes} onPress={() => toggle(6)}>
            {data[6] === "x" && <Image source={require('../assets/images/X.png')} style={styles.icon} />}
            {data[6] === "o" && <Image source={require('../assets/images/O.png')} style={styles.icono} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.boxes} onPress={() => toggle(7)}>
            {data[7] === "x" && <Image source={require('../assets/images/X.png')} style={styles.icon} />}
            {data[7] === "o" && <Image source={require('../assets/images/O.png')} style={styles.icono} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.boxes} onPress={() => toggle(8)}>
            {data[8] === "x" && <Image source={require('../assets/images/X.png')} style={styles.icon} />}
            {data[8] === "o" && <Image source={require('../assets/images/O.png')} style={styles.icono} />}
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
  
  heading:
  {
    fontSize:40,
    textAlign:'center',
    fontWeight:'bold',
    fontFamily:'sans-serif'
  },
  subheading:{
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold',
    padding:10,
  },
  sub:
  {
    marginTop:80
  },
  board:
  {
    marginVertical:'10%',
    //display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    flexWrap:'wrap',
    alignItems:'center',
    alignContent:'center',
    width:405,
    height:400,
    backgroundColor:'lightgrey',
  },
  
  boxes:
  {
    display:'flex',
    direction:'column',
    height:100,
    width:100,
    margin:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'grey',
    borderColor:'white',
    borderWidth:2,
    borderRadius:12,
    cursor:'pointer'
  },
  icon: {
    width: 90,
    height: 90,
    
  },
  icono:
  {
    height:100,
    width:90
  }
});

export default TwoPlayer