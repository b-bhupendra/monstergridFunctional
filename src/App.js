// import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

import CardList  from './components/cardList/cardList.component';
import SearchBox from './components/searchBox/searchBox.component';


const App = (props) => {
  // rerender when props state  are changes
  
  const [searchField,setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters,setFilteredMonsters] = useState(monsters); 

  



  const onSearchChange = (event) => {
  
    const setSearchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(setSearchFieldString);

    // if same value then it does not re render   
    // we are not taking value from input field to setstate
    // its other way around 
    // we are getting value and storing in a state
  }


  useEffect(()=>{
 
 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then(usr=>setMonsters(usr));

    // if useEffect is not used then it will do infinte reload

  },[]); 
  // because we dont want trigger this hook ever again / just first time

  

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
    
    // to stop rebuilding for every rerender cycles

  },[monsters, searchField]);
  

  return (<div className='App'>
         
            <h1 className='app-title'>
            
              Monsters Rolodex
            
            </h1>
       
       <SearchBox onChangeHandler = {onSearchChange} placeholder = {'search monster'} className = {'search-monster'} />
     
        <CardList monsters = {filteredMonsters} /> 
      

       </div>
  
       )

}



export default App;
