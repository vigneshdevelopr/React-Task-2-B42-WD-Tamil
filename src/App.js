import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

const data = [
  {
    name: "Fancy Products",
    price: "$40.00 - $80.00",
  },
  {
    name: "Special Items",
    rating: "⭐⭐⭐⭐⭐",
    price: "$20.00",
  },
  {
    name: "Sale Item",
    price: "$25.00",
  },
  {
    name: "Popular Item",
    rating: "⭐⭐⭐⭐⭐",
    price: "$40.00",
  },
  {
    name: "Sale Item",
    price: "$25.00",
  },
  {
    name: "Fancy Product",
    price: "$120.00 - $280.00",
  },
  {
    name: "Special Item",
    rating: "⭐⭐⭐⭐⭐",
    price: "$18.00",
  },
  {
    name: "Popular Item",
    rating: "⭐⭐⭐⭐⭐",
    price: "$40.00",
  },
];

// const data = [
//   {

//   }
// ]

function App() {
  return (
    <div className="App">
      <NavSec />
      <div className="cards">
        {data.map((item, idx) => (
          <MainDiv Name={item.name} Rating={item.rating} Price={item.price} />
        ))}
      </div>
    </div>
  );
}

function NavSec() {
  return (
    <div className="container">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shopify</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div class="mt-4 p-5 bg-dark text-white rounded">
        <h1>Shop in style</h1>
        <p>With this shop hompeage template</p>
      </div>
    </div>
  );
}

function AddToCartButton() {
  const [addCart, setaddCart] = useState();

  function handleClick() {
    setaddCart(!addCart);
  }

  return (
    <>
      {addCart ? (
        <Button variant="danger" onClick={handleClick}>
          Remove from Cart
        </Button>
      ) : (
        <Button variant="primary" onClick={handleClick}>
          Add to Cart
        </Button>
      )}
    </>
  );
}

function MainDiv(props) {
  return (
    <Card style={{ width: "16rem" }} expand="lg">
      <Card.Img
        variant="top"
        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
      />
      <Card.Body>
        <Card.Title>{props.Name}</Card.Title>
        <Card.Text>{props.Rating}</Card.Text>
        <Card.Text>{props.Price}</Card.Text>
      </Card.Body>
      <div className="row">
        <div className="col-lg">
          <AddToCartButton />
        </div>
      </div>
    </Card>
  );
}

export default App;
