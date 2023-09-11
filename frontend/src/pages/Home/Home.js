import React from 'react';
import{AiFillDollarCircle} from "react-icons/ai";
import { Link } from 'react-router-dom';
import './home.scss';
import heroImg from "../../assets/inv-img.png";
import { ShowOnLogin, ShowOnLogout } from '../../components/protect/HiddenLink';

const Home = () => {
  return (
    <div className="home">
        <nav className="container --flex-between">
            <div className="logo">
                <AiFillDollarCircle size={35} />
            </div>
            <ul className="home-links">
                <ShowOnLogout>
                <li>   
                    <Link to="/register">Register</Link>
                </li>
                </ShowOnLogout>
                <ShowOnLogout>
                <li>
                    <button className="--btn --btn-primary">
                    <Link to="/login">Login</Link>
                    </button>
                </li>
                </ShowOnLogout>
                <ShowOnLogin>
                <li>
                    <button className='--btn --btn-primary'>
                    <Link to="/dashboard">Acceuil</Link>
                    </button>
                </li>
                </ShowOnLogin>
            </ul>
        </nav>
        {/* Hero SECTION*/}
        <section className="container hero">
            <div className='hero-text'>
                <h2>
                Inventaire et
                gestion des
                 stocks
                </h2>
                <p>
                Système d'inventaire pour contrôler et gérer
                les produits dans l'entrepôt en temps réel 
                et intégré pour faciliter le développement de 
                votre entreprise...
                </p>
                <p>
                Cette application est réalisée par des étudiants ingénieurs...
                </p>
                
                <button className='--btn --btn-primary'>
                    <Link to="/dashboard">Essai gratuit d'une semaine</Link>
                </button>
            </div>
            <div className='hero-image'>
                <img src={heroImg} alt='Inventry'/>
            </div>
        </section>
    </div>
  );
};
 const NumberText = ({ num, text }) => {
    return (
      <div className="--mr">
        <h3 className="--color-white">{num}</h3>
        <p className="--color-white">{text}</p>
      </div>
    );
  };

export default Home;