import React, { Fragment, useState, useEffect } from 'react';
import axios from "axios";

const Mails = () => {

    const [messages, setMessages] = useState([]);

    useEffect(()=>{
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
        <Fragment>
            <ul>
                {messages.map(item =>(
                    <li key={item._id}>
                        <p>{item.text}</p>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default Mails 