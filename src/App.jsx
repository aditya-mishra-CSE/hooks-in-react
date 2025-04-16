import { useEffect, useState, useRef, useMemo, useCallback, useReducer, useLayoutEffect } from 'react'

import './App.css'
import useLocalStorage from './hooks/useLocalStorage'
// import Header from './components/Header';
// import Profile from './components/Profile';
// import Footer from './components/Footer';


function App() {
  

  //Here the problem is that on clicking the button the value gets updated and printed in the console but not updating in the UI.
  // let color = "Red";
  // const changeColor = () => {
  //   color = "Blue"
  //   console.log(color)
  // }

  // return (
  //   <>
  //     <h1>My color is {color}!</h1>
  //     <button onClick={changeColor}>Blue</button>
  //   </>
  // )


  //useState Hook
  //To solve the above problem we have useState Hook

  //useState is a react hook which creates an state variable which helps us to track state in components & updates the user interface when state changes.
  // const [color, setColor] = useState("Red")

  // const changeColor = () => {
  //   setColor("Blue");
  // }
  //  return (
  //   <>
  //     <h1>My color is {color}!</h1>
  //     <button onClick={changeColor}>Blue</button>
  //   </>
  // )


  //Multiple state variables

  // const [brand, setBrand] = useState('Ferrari');
  // const [model, setModel] = useState('Rome');
  // const [year, setYear] = useState('2023');
  // const [color, setCoolor] = useState('red');

  // const [car, setCar] = useState({
  //   brand: "Ferrari",
  //   model:"Roma",
  //   year:"2023",
  //   color:"red"
  // });

  // const changeColor = () => {
  //   // setCar({color: "red"}) //It will replace the complete object with th new object
  //   //To update the object we will user the previous value
  //   setCar((prev)=>{
  //     return {...prev, color:"Blue"}
  //   })
  // }
  // return (
  //   <>
  //     <h1>My {car.brand}</h1>
  //     <h2>It is a {car.color} {car.model} from {car.year}</h2>
  //     <button onClick={changeColor}>Blue</button>
  //   </>
  // )


  //updating state based on previous state

  // const [count, setCount] = useState(0);
  // // const increaseCount = () => {
  // //   setCount(count+1);
  // // }

  // //I want to increase count by 4 
  // const increaseCount = () => {
    
  //   // setCount(count+1); //1
  //   // setCount(count+1); //1
  //   // setCount(count+1); //1 
  //   // setCount(count+1); //1
    
  //   setCount(prev => prev +1); //1
  //   setCount(prev => prev +1); //2
  //   setCount(prev => prev +1); //3
  //   setCount(prev => prev +1); //4
  // }
  // return(
  //   <>
  //     <h1>Count : {count}</h1>
  //     <button onClick={increaseCount}>Increase</button>
  //   </>
  // )





  //useEffect Hook 
  // The useEffect Hook allows you to perform side effects in your components.
  //Some examples of side effects are :
  //Fetching data from API
  //Directly updating teh DOM
  //Timers like setTimeOut and setInterval

  // const [count, setCount] = useState(0)
  // const [name, setName] = useState("Aditya");

  // // when we dont use any dependencies then it will execute this setTimeout callback function whenwver there is a change in any state in this component.
  // // useEffect(()=>{
  // //   setTimeout(()=> {
  // //     setCount(count => count +1)
  // //   },2000)
  // // })

  // // whenever we are using an empty array it will execute this callback function only once when the component gets loaded.
  // useEffect(()=>{
  //   setTimeout(()=> {
  //     setCount(count => count +1)
  //   },2000)
  // }, [])

  // //When we use dependecy then it means the callback function is executed whenever the count changes and it will also executed when the component gets loaded for the first time
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setCount(count => count+1);
  //   },2000)
  // },[count])


  // return (
  //   <>
  //     <h1>I've rendered {count} times!</h1>
  //   </>
  // )




  //UseRef Hook
  //useRef is a react Hook that allows us to create mutable variables( it means that you can directly change their values without triggering a re-render of the React component.)
  //, which will not re-render the component.
  //useRef is also used for accessing DOM elements.

  // const [value, setValue] = useState(0)
  // const [count, setCount] = useState(0)

  // useEffect(()=>{
  //   setCount(prev => prev+1)
  // }) 
  // return(
  //   <>
  //     <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
  //     <h1>{value}</h1>
  //     <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
  //     <h1>Render Count: {current}</h1>
  //   </>
  // )
  //The problem we are facing that the counter is increasing continuously so it will run this counter in an infinite loop. THis is because useEffect itself cause re-render
  // so whenever the count value get updated it will chanmges the state and re render the component till infinite.

  //To solve this probelm we use the useRef Hook because it will not re-render the component when it change

  // const count = useRef(0);

  // useEffect(()=>{
  //   count.current = count.current + 1;
  // });

  // return(
  //   <>
  //     <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
  //     <h1>{value}</h1>
  //     <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
  //     <h1>Render Count: {count.current}</h1>
  //   </>
  // )


  //useRef for accessing the DOM elements.
  // const inputElem = useRef();

  // const btnClicked = () => {
  //   console.log(inputElem.current);
  //   inputElem.current.focus();
  // }
  // return(
  //   <>
  //     <input type='text' ref={inputElem}/>
  //     <button onClick={btnClicked}>Click Here</button>
  //   </>
  // )


  //useMemo
    // useMemo hook returns a memoized value (its like caching a value so that it doesn't need to be recalculated.)
    //It only runs when on of its dependencies gets updated. This can improve the performance of the application.
    //There is one mmore hook in react to improve performance that is useCallback hook.
    // useMemo and useCallback Hooks are similare. The main difference is:
    //-useMemo returns a memozied value.
    //-useCallback returns a memoized function.

    // const [number, setNumber] = useState(0)
    // const [counter, setCounter] = useState(0)

    // function cubeNum(num){
    //   console.log('Calculation done!');
    //   return Math.pow(num,3)
    // }

    // // const result = cubeNum(number);

    // const result = useMemo(()=>cubeNum(number), [number])

    // return (
    //   <>
    //     <input type='number' onChange={(e)=>{setNumber(e.target.value)}}/>
    //     <h1>Cube of the number: {result}</h1>
    //     <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
    //     <h1>Counter: {counter}</h1>
    //   </>
    // )


    //useCallback Hook
    // useCallback hook lets you cache a function definition between re-renders.
    //It means, when we use the useCallback Hook, it doesn't create multiple instance of same function when re-renders happens.
    //Insted of creating new instance of the function, it provides the cached function on re-render of the component.

    // const [count, setCount] = useState(0);
    // //const newFn = () => {}
    // //Whenever this component re-renders it will again create a new instance of this function
    
    // //To solve this we use useCallback hook

    // const newFn = useCallback(()=>{},[])

    // // const newFn = useCallback(()=>{}, [count])
    // // So whenever the count changes it will craeet a new function
    
    // return (
    //   <>
    //     <Header/> 
    //     {/* we use the React.memo(Header) inside the Header component so beacuse of that Header rendered only for one time  */}
    //     <h1>{count}</h1>
    //     <button onClick={()=> setCount(prev=>prev+1)}>Click Here</button>
    //   </>
    // )




    //useContext Hook
    //useContext Hook allows you to access data from any component without explicitly passing it down through props at any level.
    //We can use this hook in three differnt steps:
    //1.Creating a Context
    //2.Providing the Context
    //3.Consuming th Context



    // return (
    //   <>
    //     <Profile/>
    //     <Footer/>
    //   </>
    // )



    //useReducer Hook
    //The useReducer Hook is a built-in React Hook that provides a way to manage more complex state logic within your functional components
    // useReducer is similar to useState, But instead of providing state and setter function. It provides state and dispatch function.
    // The useReducer Hook accepts two arguments 
    //-Reducer Function
    //-Initial state
    // and returns: Current state and Dispatch method
    //The reducer function specifies how the state gets updated.


    // 1. Define the reducer function
  // const counterReducer = (state, action) => {
  //   switch (action.type) {
  //     case 'INCREMENT':
  //       return { count: state.count + 1 };
  //     case 'DECREMENT':
  //       return { count: state.count - 1 };
  //     case 'INPUT':
  //       return { count: action.payload}
  //     case 'RESET':
  //       return { count: 0 };
  //     default:
  //       return state;
  //   }
  // };

  // // 2. Define the initial state
  // const initialState = { count: 0 };

  // // 3. Use the useReducer hook
  // const [state, dispatch] = useReducer(counterReducer, initialState);

  // return (
  //   <div>
  //     <h2>Counter: {state.count}</h2>
  //     <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
  //     <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
  //     <input value={state.count}
  //       onChange={(e)=>dispatch({type: 'INPUT', payload:Number(e.target.value)})}
  //       type='number'
  //     />
  //     <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
  //   </div>
  // );

  //When we use the useState hook we directly updates the variable using the setter function but when we use useReducer Hook 
  // we can efficiently update the state variable for differnt actions.






  //useLayoutEffect Hook
  // useLayoutEffect works similary to useEffect, but it is called before the User Interface gets mounted.
  //useEffect gets called after rendering the DOM elements.
  //useLayoutEffect gets called before rendering the DOM elements.

  //for example if we create a layout using DOM elements and want to change the layout color using the useEffect hook then 
  // first it will display the DOM element and after that it will change its color that will cause blink and flickering issue
  //But when we are using the useLayoutEffect then first it will change the color and after it display the DOM element

  // useEffect(()=> {
  //   console.log("Message from useEffect");
  // }, [])

  // useLayoutEffect(()=>{
  //   console.log('Message from useLayoutEffect');
  // }, [])  

  // //The process works like that first it will print 
  // //Message from useLayoutEffect(called before mounting the UI element)
  // //Test Message and list
  // //Message from useEffect(after mounting the UI element)

  // return(
  //   <>
  //     <h2>Test Message</h2>
  //     {Array(4000).fill('').map((item, index)=>(
  //       <li key={index}>{Math.pow(Math.random(), 10)}</li>
  //     ))}
  //   </>
  // )




  //custom Hooks
  //React allows us to create our own hook which is known as custom hook
  //Why we need it?
  // suppose we have a component logic that need to be used by multiple components
  // so we can extract that logic to create a custom hook


  // const [name, setName] = useState(
  //   localStorage.getItem('username') ? 
  //   localStorage.getItem('username') : ''
  // );

  // useEffect(()=>{
  //   localStorage.setItem('username', name)
  // },[name])

  //Suppose we have to use this localStorage functionality in multiple components then in the multiple components we have to write this
  //code so to solve this problem we use the custom hooks where we will add trehse logic and we can simply use that in different component

  const [name , setName] = useLocalStorage('username', '')
  const [id , setId] = useLocalStorage('userid', '')

  return(
    <>
      <input type='text' placeholder='Enter your name'
        value={name} onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello, {name}!</h2>
      <input type='text' placeholder='Enter your Id'
        value={id} onChange={(e) => setId(e.target.value)}
      />
      <h2>Your Id: {id}!</h2>
    </>
  )

}

export default App


