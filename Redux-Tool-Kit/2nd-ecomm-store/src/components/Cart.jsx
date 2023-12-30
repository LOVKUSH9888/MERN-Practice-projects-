import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <Link to="/">Go Home</Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Cart;

// import React from 'react';
// import { useSelector } from 'react-redux';

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.items);

//   const total = cartItems.reduce((acc, item) => acc + item.price, 0);

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>{item.title} - ${item.price}</li>
//         ))}
//       </ul>
//       <p>Total: ${total}</p>
//     </div>
//   );
// };

// export default Cart;
