import React from "react";
import { Button, Container } from "react-bootstrap";

export const Event2 = () => {
  const handleClick = (name) => {
    alert(`Hello ${name}`);
  };

     // Eger event handler a parametre gonderilecekse mutlaka event listener icinde araci bir fonksiyon (callback) kullanilmalidir onClick={() => handleClick("Suzanne")}
    // callback kullanilmazsa => onClick={handleClick("John Doe")}
    // handleClick fonksiyonu hemen cagrilir

  return (
    <Container className="mt-5">
      <h1>Events</h1>
      <Button id="btn" variant="info" onClick={() => handleClick("John Doe")}>
        Click
      </Button>
    </Container>
  );
};
