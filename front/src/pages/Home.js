import React from 'react';
import ContactForm from '../components/contact';
import Corps from '../components/corps';
import Footer from '../components/footer';
import Header from '../components/header';

const Home = () => {
    return (
        <div>
            <Header />
            <Corps />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Home; 