import React from 'react';
import ContactForm from '../components/contact';
import Corps from '../components/corps';
import Header from '../components/header';

const Home = () => {
    return (
        <div>
            <Header />
            <Corps />
            <ContactForm />
        </div>
    )
}

export default Home;