import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ReactDOM from "react-dom";

function Button(props) {
   const handlerClick = () => {
     
    props.onClickAct(props.bkColor,props.MyColor,props.text);
  
  
   };
  



   return (
   <button
  
    onClick={handlerClick}

   style={{ backgroundColor: props.bkColor,color:props.MyColor }}>
   {props.text}
   </button>
   );
  }
  function DisplayBlock(props) {
    return (
    <div className='MyBloc'
    style={{ backgroundColor:props.bkColor ,color:props.MyColor }}>
    Some text
    </div>
    );
   }


let obj={name:"Аватар",producer:"Джеймс Кэмерон",dataHremer:2009,post:"Ava.jpg"}

function MyFilms(props)
{
  let { name, producer,dataHremer ,post} = props.dan;


    return (<div><h2> Название: {name}</h2>
      <h2> Автор: {producer}</h2>
      <h2> год выхода: {dataHremer}</h2>
      <img className='MyImg' src={post} ></img>
      
      </div> );
    
    };
   


function App() {

  const [displayBkColor,setDisplayBkColor] = useState("white");

  const [MyBkColor,setMyBkColor] = useState("orange");
  const [myText,setMyText] = useState("Some Text");
   let stateFunc = (newBkColor,newMyColor, myText) => {
     setDisplayBkColor(newBkColor);
       setMyText(myText);
      setMyBkColor(newMyColor);
   }
  return (
    <div >
  <Button bkColor="red" MyColor="blue" text="Red" onClickAct={stateFunc}
 />
 <Button bkColor="green" MyColor="red" text="Green"
 onClickAct={stateFunc} />
 <Button bkColor="yellow" MyColor="green" text="Yellow"
 onClickAct={stateFunc}/>
 <DisplayBlock  bkColor={displayBkColor} MyColor={MyBkColor}  text={myText}/>

      <MyFilms dan={obj}></MyFilms>
    </div>
  );
}

export default App;
