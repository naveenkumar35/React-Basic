import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
    const [personsState , setPersonsState]= useState({
        persons:[
          {name: 'mom' ,age:21},
          {name: 'mam' ,age:23},
          {name: 'mum' ,age:27}
      
        ],
        otherstate : 'some value added'
    })
    console.log(personsState);

    const changenew =(event) => {
      setPersonsState({
        persons :[
          {name: 'new' ,age:21},
          {name: event.target.value ,age:25},
          {name: 'mummy' ,age:29}
    
        ]

      });
    };
    
    const switchNamehandler = (newname) => {
        //console.log('Clicked');
          setPersonsState({
          persons :[
            {name: newname ,age:21},
            {name: 'madam' ,age:25},
            {name: 'mummy' ,age:29}
      
          ]
        });
      } ;
      const style ={
        backgroundColor: 'Red',
        font: 'white'
      }
     
    return (
      <div className="App">
       <h1>Hloo Broo.....</h1>
       <p>I am new</p>
       <button 
       style ={style}
        onClick={switchNamehandler.bind(this,'new')}>Switch Name</button>
       <Person 
       name={personsState.persons[0].name} 
       age={personsState.persons[0].age}/>
       <Person 
       name={personsState.persons[1].name} 
       age={personsState.persons[1].age}
       click ={switchNamehandler.bind(this ,'newone')}
       changeName={changenew}>
         my hobbies is nothing</Person>
       <Person 
       name={personsState.persons[2].name} 
       age={personsState.persons[2].age}/>
      </div>
    );
  }

export default app;


