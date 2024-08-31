import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Cute Multi Color Polak Dot Sweater',
          img: 'CC55580asi2_1024x1024@2x.png',
          category: 'Sweater',
          price: '44'
        },

        {
          id: 2,
          title: 'A V-neckline Drawstring Ruched Top',
          img: 'CC55199e_1024x1024@2x 1.png',
          category: 'Top',
          price: '31'
        },

        {
          id: 3,
          title: 'Double Side Knit Solid Mini Dress',
          img: 'CC54308_1024x1024@2x.png',
          category: 'Dress',
          price: '22'
        },

        {
          id: 4,
          title: 'Drop Shoulder With Saist Tie Belted Dress',
          img: 'CC54300_1024x1024@2x.png',
          category: 'Dress',
          price: '44'
        },

        {
          id: 5,
          title: 'Belted Hi Low Placket Lace Shirt Dress',
          img: 'CC54299a_1024x1024@2x.png',
          category: 'Dress',
          price: '53'
        },

        {
          id: 6,
          title: 'Puff Sleeve Bodycon Print Dress',
          img: 'CC54296_1024x1024@2x.png',
          category: 'Dress',
          price: '44'
        },

        {
          id: 7,
          title: 'Cascade Ruffle Sleeve Frill Tiered Bottom Print Midi Dress',
          img: 'CC53090_1024x1024@2x.png',
          category: 'Dress',
          price: '65'
        },

        {
          id: 8,
          title: 'Buffalo Plaid Tartan Swing Dress',
          img: 'CC53089a_1024x1024@2x.png',
          category: 'Dress',
          price: '31'
        },

        {
          id: 9,
          title: 'Showstopper, Sexy Crossover Strap Dress',
          img: 'CC53087b_1024x1024@2x.png',
          category: 'Dress',
          price: '39'
        },

      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
      if(category === 'All') {
        this.setState({currentItems: this.state.items})
        return
      }
      this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
      })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
     this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
