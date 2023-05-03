import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import Categories from "./components/categories";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: '2d422672-8303-4f9d-b949-b138ad96dbe3.c2943f014766a0a9081ea600e13bb437.jpeg',
          desc: 'Lorem lorem lorem lorem lorem',
          category: 'chairs',
          price: '49.99',
        },
        {
          id: 2,
          title: 'Лампа настольная',
          img: 'Ha7ed114a91484805835eb75b8d7e93a5Y.jpeg',
          desc: 'Lorem',
          category: 'light',
          price: '100',
        }, {
          id: 3,
          title: 'Навесные полки',
          img: '20.webp',
          desc: 'Lorem',
          category: 'tables',
          price: '55.99',
        }, {
          id: 4,
          title: 'Диван серый',
          img: 'default.webp',
          desc: 'Lorem',
          category: 'sofa',
          price: '99.99',
        }, {
          id: 5,
          title: 'Прикроватные тумбочки',
          img: '22.webp',
          desc: 'Lorem',
          category: 'tables',
          price: '64.99',
        }, {
          id: 6,
          title: 'Двери',
          img: '15.jpeg',
          desc: 'Lorem',
          category: 'chairs',
          price: '39.99',
        },
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
    return (
      <div className="wrapper" >
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
