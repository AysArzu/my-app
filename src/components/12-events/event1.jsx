import React from "react";
import { Button, Container } from "react-bootstrap";

export const Event1 = () => {
  const handleClick = () => {
    alert("Button Clicked");
  };
  
  //! Event listener lara handler atarken : onClick={handleClick} seklinde yazilabilir
  // Ancak handler isminin yanina () konulursa,  --> onClick={handleClick()}
  // handler olayi beklemeden dogrudan calisir o

  return (
    <Container className="mt-5">
      <h1>Events</h1>
      <Button variant="info" id="btn" onClick={handleClick}>
        Click
      </Button>
    </Container>
  );
};
