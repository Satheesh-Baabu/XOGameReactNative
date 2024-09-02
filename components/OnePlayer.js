import React from 'react'
import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'

const OnePlayer = (props) => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  const toggle = (num) => {
    if (lock || data[num]) return;

    const newData = [...data];
    newData[num] = "x"; // Player is always "x"
    setData(newData);
    setCount(count + 1);
    
    if (checkWinner(newData)) return;

    if (newData.some((item) => item === "")) {
      computerMove(newData);
    }
  };

  const computerMove = (newData) => {
    let availableMoves = [];
    newData.forEach((value, index) => {
      if (value === "") availableMoves.push(index);
    });

    const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    newData[randomMove] = "o"; // Computer is always "o"
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
        return true;
      }
    }

    if (newData.every((item) => item !== "")) {
      setLock(true);
      alert("It's a draw!");
      return true;
    }

    return false;
  };

  return (
    <View>
      <View>
        <Text style={styles.heading}>XO Game</Text>
      </View>
      <View style={styles.sub}>
        <Text style={styles.subheading}>X - Player</Text>
        <Text style={styles.subheading}>O - Computer</Text>
      </View>
      <View style={styles.board}>
        {data.map((value, index) => (
          <TouchableOpacity
            key={index}
            style={styles.boxes}
            onPress={() => toggle(index)}
          >
            {value === "x" && <Image source={require('../assets/images/X.png')} style={styles.icon} />}
            {value === "o" && <Image source={require('../assets/images/O.png')} style={styles.icono} />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
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
export default OnePlayer