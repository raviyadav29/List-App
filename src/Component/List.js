import React, { Component } from 'react';

class ItemList extends Component {
  state = {
    products: [],
    loading: true,
    error: null
  };

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        this.setState({ products: data, loading: false });
      })
      .catch(error => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { items, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h1>Item List</h1>
        <ul>
          {products.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;
