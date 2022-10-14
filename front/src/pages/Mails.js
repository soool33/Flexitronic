import React, { Fragment, useState, useEffect } from 'react';
import axios from "axios";
import Header from '../components/header';

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
    <div>
      <Header />
      <Fragment>
        <table>
          <caption>Mesages reçus</caption>
          <thead>
            <tr>
              <th scope="col">Groupe</th>
              <th scope="col">Année de formation</th>
              <th scope="col">Nombre d'albums</th>
              <th scope="col">Morceau le plus célèbre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Buzzcocks</th>
              <td>1976</td>
              <td>9</td>
              <td><i lang="en">Ever fallen in love (with someone you shouldn't've)</i></td>
            </tr>
            <tr>
              <th scope="row">The Clash</th>
              <td>1976</td>
              <td>6</td>
              <td><i lang="en">London Calling</i></td>
            </tr>

            <tr>
              <th scope="row">The Stranglers</th>
              <td>1974</td>
              <td>17</td>
              <td><i lang="en">No More Heroes</i></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colspan="2">Nombre total d'albums</th>
              <td colspan="2">77</td>
            </tr>
          </tfoot>
        </table>
        <div className='row'>
          {messages.map(item => (
            <div key={item._id} className="col-lg-3" style={{backgroundColor: '#c0c0c0',color: 'black',borderRadius: '3%',margin: '2px'}}>
              <div>
                <p>{item.name}</p>
              </div>
              <div>
                <p>{item.from}</p>
              </div>
              <div>
                <p>{item.subject}</p>
              </div>
              <div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    </div>
  )
}

export default Mails