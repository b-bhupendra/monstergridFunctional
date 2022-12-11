import Card from "./../card/card.jsx"
import './cardList.styles.css';

const CardList = ({monsters}) =>{
    

        return (<div className='card-list'>
                {
                    monsters.map((monster)=>{
                       return (<Card monster = {monster}/>);
                     })
                }

        </div>)

}

export default CardList;

// import CardList as only one import
// check how to do multi export 
// enable the deconstructor import