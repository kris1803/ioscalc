import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Box } from 'native-base';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles/main';
//import styled from 'styled-components/native';

export default function MainScreen() {
   const [display, setDisplay] = useState('0');
   const [operator, setOperator] = useState('');
   const [firstNumber, setFirstNumber] = useState('');
   const [secondNumber, setSecondNumber] = useState('');

   const handleNumber = (number) => {
      number = number.toString();
      if (number === '0' && display === '0') {
         return;
      }
      if (display.length === 9) {
         return;
      }
      if (display === '0') {
         setDisplay(number);
         return;
      }
      setDisplay((text) => text + number);
   }
   const handleOperator = (text) => {
      setFirstNumber(display);
      setOperator(text);
      setDisplay('0');
   }
   const clearAll = () => {
      if (display === '0' || display === '0.' || display === '-0' || display === '-0.') {
         setDisplay('0');
         setOperator('');
         setFirstNumber('');
         setSecondNumber('');
         return;
      } else {
         setDisplay('0');
         setSecondNumber('');
      }
   }
   const handlePercent = () => {
      if (display === '0' || display === '0.' || display === '-0' || display === '-0.') {
         setDisplay('0');
         return;
      }
      setDisplay(display / 100);
   }

   const handleSign = () => {
      let displayCopy = `${display}`;
      displayCopy = displayCopy.split('');
      if (displayCopy[0] === '-') {
         displayCopy.shift();
         setDisplay(displayCopy.join(''));
         return;
      } else {
         displayCopy.unshift('-');
         setDisplay(displayCopy.join(''));
      }
   }

   const handleExecute = () => {
      setSecondNumber(display);
      let tempSecond = parseFloat(display);
      console.log(tempSecond);
      if (operator === '+') {
         setDisplay(parseFloat(firstNumber) + tempSecond);
      } else if (operator === '-') {
         setDisplay(parseFloat(firstNumber) - tempSecond);
      } else if (operator === '*') {
         setDisplay(parseFloat(firstNumber) * tempSecond);
      } else if (operator === '/') {
         setDisplay(parseFloat(firstNumber) / tempSecond);
      }
      setOperator('');
      setFirstNumber('');
      setSecondNumber('');
   }

   return (
      <SafeAreaView style={styles.container} >
         <Box style={{ width: '100%', flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', paddingHorizontal: '5%' }} >
            <Text style={styles.mainText} >{display}</Text>
         </Box>
         <Box style={{ width: '100%', paddingHorizontal: '1%', paddingBottom: '1.5%' }}>
            <Box style={styles.buttonRow}>
               <Box style={styles.buttonContainer} >
                  <TouchableOpacity onPress={() => { clearAll() }} style={styles.buttonLight}>
                     <Text style={styles.blackButtonText} >{display === '0' ? 'AC' : 'C'}</Text>
                  </TouchableOpacity>
               </Box>
               <Box style={styles.buttonContainer} >
                  <TouchableOpacity onPress={() => handleSign()} style={styles.buttonLight}>
                     <Text style={styles.blackButtonText} >??</Text>
                  </TouchableOpacity>
               </Box>
               <Box style={styles.buttonContainer} >
                  <TouchableOpacity onPress={() => handlePercent()} style={styles.buttonLight}>
                     <Text style={styles.blackButtonText} >%</Text>
                  </TouchableOpacity>
               </Box>
               <Box style={styles.buttonContainer} >
                  <Box style={styles.operatorWrapperBg} >
                     <TouchableOpacity onPress={() => handleOperator('/')} style={styles.buttonOperator}>
                        <Text style={styles.whiteText} >??</Text>
                     </TouchableOpacity>
                  </Box>
               </Box>
            </Box>
            <Box style={styles.buttonRow}>
               <Box style={styles.buttonContainer} >
                  <Box style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={() => handleNumber(7)} style={styles.button}>
                        <Text style={styles.whiteText} >7</Text>
                     </TouchableOpacity>
                  </Box>
               </Box>
               <Box style={styles.buttonContainer} >
                  <Box style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={() => handleNumber(8)} style={styles.button}>
                        <Text style={styles.whiteText} >8</Text>
                     </TouchableOpacity>
                  </Box>
               </Box>
               <Box style={styles.buttonContainer} >
                  <Box style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={() => handleNumber(9)} style={styles.button}>
                        <Text style={styles.whiteText} >9</Text>
                     </TouchableOpacity>
                  </Box>
               </Box>
               <Box style={styles.buttonContainer} >
                  <Box style={styles.operatorWrapperBg} >
                     <TouchableOpacity onPress={() => handleOperator('*')} style={styles.buttonOperator}>
                        <Text style={styles.whiteText} >??</Text>
                     </TouchableOpacity>
                  </Box>
               </Box>
            </Box>
            <Box style={styles.buttonRow}>
               <Box style={styles.buttonContainer} >
                  <Box style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={() => handleNumber(4)} style={styles.button}>
                        <Text style={styles.whiteText} >4</Text>
                     </TouchableOpacity>
                  </Box>
               </Box>
               <Box style={styles.buttonContainer} >
                  <Box style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={() => handleNumber(5)} style={styles.button}>
                        <Text style={styles.whiteText} >5</Text>
                     </TouchableOpacity>
                  </Box>
               </Box>
               <Box style={styles.buttonContainer} >
                  <Box style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={() => handleNumber(6)} style={styles.button}>
                        <Text style={styles.whiteText} >6</Text>
                     </TouchableOpacity>
                  </Box>
               </Box>
               <Box style={styles.buttonContainer} >
                  <Box style={styles.operatorWrapperBg} >
                     <TouchableOpacity onPress={() => handleOperator('-')} style={styles.buttonOperator}>
                        <Text style={styles.whiteText} >-</Text>
                     </TouchableOpacity>
                  </Box>
               </Box>
            </Box>
            <Box style={styles.buttonRow}>
               <Box style={styles.buttonContainer} >
                  <Box style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={() => handleNumber(1)} style={styles.button}>
                        <Text style={styles.whiteText} >1</Text>
                     </TouchableOpacity>
                  </Box>
               </Box>
               <Box style={styles.buttonContainer} >
                  <Box style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={() => handleNumber(2)} style={styles.button}>
                        <Text style={styles.whiteText} >2</Text>
                     </TouchableOpacity>
                  </Box>
               </Box>
               <Box style={styles.buttonContainer} >
                  <Box style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={() => handleNumber(3)} style={styles.button}>
                        <Text style={styles.whiteText} >3</Text>
                     </TouchableOpacity>
                  </Box>
               </Box>
               <Box style={styles.buttonContainer} >
                  <Box style={styles.operatorWrapperBg} >
                     <TouchableOpacity onPress={() => handleOperator('+')} style={styles.buttonOperator}>
                        <Text style={styles.whiteText} >+</Text>
                     </TouchableOpacity>
                  </Box>
               </Box>
            </Box>
            <Box style={styles.buttonRow}>
               <Box style={{ width: '50%', aspectRatio: 2, alignItems: 'center', justifyContent: 'center' }} >
                  <Box style={styles.zeroWrapperBg} >
                     <TouchableOpacity onPress={() => handleNumber(0)} style={styles.zeroButton}>
                        <Text style={styles.whiteText} >0</Text>
                     </TouchableOpacity>
                  </Box>
               </Box>
               <Box style={styles.buttonContainer}>
                  <Box style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={() => setDisplay((value) => value+'.')} style={styles.button}>
                        <Text style={styles.whiteText} >,</Text>
                     </TouchableOpacity>
                  </Box>
               </Box>
               <Box style={styles.buttonContainer}>
                  <Box style={styles.operatorWrapperBg} >
                     <TouchableOpacity onPress={() => handleExecute()} style={styles.buttonOperator}>
                        <Text style={styles.whiteText} >=</Text>
                     </TouchableOpacity>
                  </Box>
               </Box>
            </Box>
         </Box>
         <StatusBar style={'light'} />
      </SafeAreaView>
   )
}

