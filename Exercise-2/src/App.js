import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
  }
  

  addItems = (itemDesc) => {
    var RandomNumber = Math.floor(Math.random() * 8) + 1 ;
    const searchResult = this.state.items.findIndex((element, index, array) => {
      if(element.value === itemDesc) {
        return true;
      } else {
        return false;
      }
    });

    if(searchResult !== -1) {
      console.log("Success");
      let newItems = [...this.state.items];
      newItems[searchResult].qty += RandomNumber;
      this.setState( { items: newItems})

      
    } else {
      this.setState({
        items: 
           [...this.state.items,
               {
                  id: this.state.items.length + 1,
                  value: itemDesc, qty: RandomNumber , unit: 'x'
                }
            ]
      });    
    }

    
  }

  onDeleteItem = (idToBeDeleted) => {
    console.log("Delete item with id: " + idToBeDeleted);
    // filter() - method
    let newItems = this.state.items.filter(item => item.id !== idToBeDeleted);
    this.setState({ items : newItems});

    // splice() - method 
    /*
    let indexToDelete = this.state.items.findIndex(item => item.id === idToBeDeleted);
    if(indexToDelete !== -1)
    {
    let newItems = [...this.state.items];
    newItems.splice(indexToDelete, 1)
    this.setState({ items: newItems })
    }
    */
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } onDeleteItem={ this.onDeleteItem }/>
      <button className={ styles.margin } onClick={ () => this.addItems('Carrots') }>Carrots</button>
      <button className={ styles.margin } onClick={ () => this.addItems('Strawberries') }>Strawberries</button>
      <button className={ styles.margin } onClick={ () => this.addItems('Yogurt') }>Yogurt</button>
      <button onClick={ () => this.addItems('Beer') }>Beer</button>
    </div>
  }
}

export default App;