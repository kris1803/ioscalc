import React, { useCallback, useState } from 'react';
import { Text, TouchableOpacity, StatusBar, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles/main';

export default function MainScreen() {
   const [display, setDisplay] = useState<string>('0');
   const [operator, setOperator] = useState<string>('');
   const [firstNumber, setFirstNumber] = useState<string>('');
   const [secondNumber, setSecondNumber] = useState<string>('');

   console.log(useColorScheme())

   function handleNumber (number) {
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

   function handleOperator (text) {
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
      setDisplay(( Number(display) / 100).toString());
   }

   const handleSign = useCallback(() => {
      let displayCopy = (`${display}`).split('');
      if (displayCopy[0] === '-') {
         displayCopy.shift();
         setDisplay(displayCopy.join(''));
         return;
      } else {
         displayCopy.unshift('-');
         setDisplay(displayCopy.join(''));
      }
   }, [display])

   function handleExecute () {
      setSecondNumber(display);
      let tempSecond = parseFloat(display);
      console.log(tempSecond);
      if (operator === '+') {
         setDisplay(( parseFloat(firstNumber) + tempSecond ).toString());
      } else if (operator === '-') {
         setDisplay(( parseFloat(firstNumber) - tempSecond ).toString());
      } else if (operator === '*') {
         setDisplay( (parseFloat(firstNumber) * tempSecond ).toString());
      } else if (operator === '/') {
         setDisplay( (parseFloat(firstNumber) / tempSecond ).toString());
      }
      setOperator('');
      setFirstNumber('');
      setSecondNumber('');
   }

   return (
      <SafeAreaView style={styles.container} >
         <View style={styles.displayContainer} >
            <Text style={styles.mainText} >{display}</Text>
         </View>
         <View style={{ width: '100%', paddingHorizontal: '1%', paddingBottom: '1.5%' }}>
            <View style={styles.buttonRow}>
               <View style={styles.buttonContainer} >
                  <TouchableOpacity onPress={clearAll} style={styles.buttonLight}>
                     <Text style={styles.blackButtonText} >{display === '0' ? 'AC' : 'C'}</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.buttonContainer} >
                  <TouchableOpacity onPress={handleSign} style={styles.buttonLight}>
                     <Text style={styles.blackButtonText} >±</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.buttonContainer} >
                  <TouchableOpacity onPress={handlePercent} style={styles.buttonLight}>
                     <Text style={styles.blackButtonText} >%</Text>
                  </TouchableOpacity>
               </View>
               <View style={styles.buttonContainer} >
                  <View style={styles.operatorWrapperBg} >
                     <TouchableOpacity onPress={useCallback(() => handleOperator('/'), [])} style={styles.buttonOperator}>
                        <Text style={styles.whiteText} >÷</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
            <View style={styles.buttonRow}>
               <View style={styles.buttonContainer} >
                  <View style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={useCallback(() => handleNumber(7), [])} style={styles.button}>
                        <Text style={styles.whiteText} >7</Text>
                     </TouchableOpacity>
                  </View>
               </View>
               <View style={styles.buttonContainer} >
                  <View style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={useCallback(() => handleNumber(8), [])} style={styles.button}>
                        <Text style={styles.whiteText} >8</Text>
                     </TouchableOpacity>
                  </View>
               </View>
               <View style={styles.buttonContainer} >
                  <View style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={useCallback(() => handleNumber(9), [])} style={styles.button}>
                        <Text style={styles.whiteText} >9</Text>
                     </TouchableOpacity>
                  </View>
               </View>
               <View style={styles.buttonContainer} >
                  <View style={styles.operatorWrapperBg} >
                     <TouchableOpacity onPress={useCallback(() => handleOperator('*'), [])} style={styles.buttonOperator}>
                        <Text style={styles.whiteText} >×</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
            <View style={styles.buttonRow}>
               <View style={styles.buttonContainer} >
                  <View style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={useCallback(() => handleNumber(4), [])} style={styles.button}>
                        <Text style={styles.whiteText} >4</Text>
                     </TouchableOpacity>
                  </View>
               </View>
               <View style={styles.buttonContainer} >
                  <View style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={useCallback(() => handleNumber(5), [])} style={styles.button}>
                        <Text style={styles.whiteText} >5</Text>
                     </TouchableOpacity>
                  </View>
               </View>
               <View style={styles.buttonContainer} >
                  <View style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={useCallback(() => handleNumber(6), [])} style={styles.button}>
                        <Text style={styles.whiteText} >6</Text>
                     </TouchableOpacity>
                  </View>
               </View>
               <View style={styles.buttonContainer} >
                  <View style={styles.operatorWrapperBg} >
                     <TouchableOpacity onPress={useCallback(() => handleOperator('-'), [])} style={styles.buttonOperator}>
                        <Text style={styles.whiteText} >-</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
            <View style={styles.buttonRow}>
               <View style={styles.buttonContainer} >
                  <View style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={useCallback(() => handleNumber(1), [])} style={styles.button}>
                        <Text style={styles.whiteText} >1</Text>
                     </TouchableOpacity>
                  </View>
               </View>
               <View style={styles.buttonContainer} >
                  <View style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={useCallback(() => handleNumber(2), [])} style={styles.button}>
                        <Text style={styles.whiteText} >2</Text>
                     </TouchableOpacity>
                  </View>
               </View>
               <View style={styles.buttonContainer} >
                  <View style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={useCallback(() => handleNumber(3), [])} style={styles.button}>
                        <Text style={styles.whiteText} >3</Text>
                     </TouchableOpacity>
                  </View>
               </View>
               <View style={styles.buttonContainer} >
                  <View style={styles.operatorWrapperBg} >
                     <TouchableOpacity onPress={useCallback(() => handleOperator('+'), [])} style={styles.buttonOperator}>
                        <Text style={styles.whiteText} >+</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
            <View style={styles.buttonRow}>
               <View style={{ width: '50%', aspectRatio: 2, alignItems: 'center', justifyContent: 'center' }} >
                  <View style={styles.zeroWrapperBg} >
                     <TouchableOpacity onPress={useCallback(() => handleNumber(0), [])} style={styles.zeroButton}>
                        <Text style={styles.whiteText} >0</Text>
                     </TouchableOpacity>
                  </View>
               </View>
               <View style={styles.buttonContainer}>
                  <View style={styles.buttonWrapperBg} >
                     <TouchableOpacity onPress={useCallback(() => setDisplay((value) => value+'.'), [])} style={styles.button}>
                        <Text style={styles.whiteText} >,</Text>
                     </TouchableOpacity>
                  </View>
               </View>
               <View style={styles.buttonContainer}>
                  <View style={styles.operatorWrapperBg} >
                     <TouchableOpacity onPress={handleExecute} style={styles.buttonOperator}>
                        <Text style={styles.whiteText} >=</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
         </View>
         <StatusBar backgroundColor={"#1c1c1c"} barStyle={'light-content'} />
      </SafeAreaView>
   )
}

