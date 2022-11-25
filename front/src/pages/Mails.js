import React, { Fragment, useState, useEffect } from 'react';
import axios from "axios";
import Header from '../components/header';
import SignUpForm from '../components/Log/SignUpForm'
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Mails = () => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${process.env.REACT_APP_API_URL}api/user/contact/all`
      );
      setMessages(result.data.reverse())
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

      <Tabs
        defaultActiveKey="message"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="message" title="Messages">
          <Fragment>
            <div className='row'>
              {messages.map(item => (
                <Card  key={item._id} className="mt-5">
                  <Card.Header as="h5" style={{backgroundColor: "#00607d",color:"white"}}>{item.from}</Card.Header>
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
        </Tab>

        <Tab eventKey="enregistrement" title="Enregistrement">
          <SignUpForm />
        </Tab>

        <Tab eventKey="portfolio" title="Portfolio">
          ededf
        </Tab>
      </Tabs>
    </div>
  )
}

export default Mails