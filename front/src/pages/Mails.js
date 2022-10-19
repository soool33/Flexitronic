import React, { Fragment, useState, useEffect } from 'react';
import axios from "axios";
import Header from '../components/header';
import Card from 'react-bootstrap/Card';

const Mails = () => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${process.env.REACT_APP_API_URL}api/user/contact/all`
      );
      setMessages(result.data)
      console.log("updated");
    }
    fetchData();
    console.log("mounted");
  }, [])

  // axios.get(`${process.env.REACT_APP_API_URL}api/user/contact/all`)
  // .then(response => {
  //     console.log(response);
  //     const messag = response.data;
  //     setMessages(messag);
  // })
  // .catch((err) => console.log(err));
  return (
    <div className='container'>
      <div style={{marginBottom: "100px"}} >
        <Header />
      </div>
      
      <Fragment>
        <div className='row'>
          {messages.map(item => (


            <Card  key={item._id} className="mt-5">
              <Card.Header as="h5" style={{backgroundColor: "#FFB52B"}}>{item.from}</Card.Header>
              <Card.Body>
                <Card.Title>Nom : {item.name}</Card.Title>
                <Card.Title>Sujet : {item.subject}</Card.Title>
                <Card.Text>
                  Message : {item.text}
                </Card.Text>
                
              </Card.Body>
            </Card>
          ))}
        </div>
      </Fragment>
    </div>
  )
}

export default Mails