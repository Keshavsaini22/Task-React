
import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import  Input  from './components/Input'
import useCurrencyInfo from './hooks/useCurrencyInfo'

// function App() {
//   const [length, setlength] = useState(8);
//   const [numberallowed, setnumberallowed] = useState(false);
//   const [charallowed, setcharallowed] = useState(false);
//   const [password, setpassword] = useState("")


//   const passwordGenerator = useCallback(() => { //it memoize the code in cache
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if (numberallowed) str += "0123456789"
//     if (charallowed) str += "[]{}@#$%^&*()_+/"
//     for (let i = 1; i <=length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1)
//       pass += str.charAt(char)
//     }
//     setpassword(pass)
//   },
//     [length, numberallowed, charallowed, setpassword])


//   useEffect(()=>{  // jdo page load hoye odo call hona or jdo components in dependencies render hon odo
//     passwordGenerator()
//   },[length,numberallowed,charallowed,passwordGenerator])

//   const passwordRef=useRef(null)

//   const copypassword=useCallback(()=>{
//     passwordRef.current?.select();
//     // passwordRef.current?.setSelectionRange(0,9)
//     window.navigator.clipboard.writeText(password)
//   },[password])

//   return (
//     <>
//       {/* <First /> */}
//       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'><h1 className=' text-center text-white'>Password Generator</h1>

//         <div className='flex shadow rounded-lg overflow-hidden mb-4' ><input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} ></input>
//           <button onClick={copypassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
//         </div>
//         <div className='flex text-sm gap-x-2'>
//           <div className='flex items-center gap-x-1'><input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {
//             setlength(e.target.value)
//           }} />
//             <label>Length: {length}</label></div>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input
//             type="checkbox"
//             defaultChecked={numberallowed}
//             id="numberInput"
//             onChange={() => {
//               setnumberallowed((prev) => !prev);
//             }}
//           />
//           <label htmlFor="numberInput">Numbers</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input
//             type="checkbox"
//             defaultChecked={charallowed}
//             id="characterInput"
//             onChange={() => {
//               setcharallowed((prev) => !prev)
//             }}
//           />
//           <label htmlFor="characterInput">Characters</label>
//         </div>
//       </div>

//     </>
//   );
// }

// export default App; 
// const arr = [1, 1, 1, 1, 11, 1, 1, 8]
// const obj = { asD: 'asd', asdasd: '123' }
/* {Object.keys(obj).map(()=>(
    

    ))} */

import React from 'react'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App