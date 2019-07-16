import React from 'react';
import '../App.sass'
import { Route, Switch } from 'react-router-dom'
import Books from '../pages/Books'
import Blog from '../pages/Blog'
import Newsletter from './Newsletter'
function Navbar() {
    return (
    <>
        <section class="hero is-info is-large">
        <div class="hero-head">
            <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                <a class="navbar-item is-active">
                    Jo Brimblecombe
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                </div>
                <div id="navbarMenuHeroB" class="navbar-menu">
                <div class="navbar-end">
                    <a class="navbar-item">
                    Books
                    </a>
                    <a class="navbar-item">
                    Blogs
                    </a>
                    <a class="navbar-item">
                    Newsletter
                    </a>
                    <span class="navbar-item">
                    </span>
                </div>
                </div>
            </div>
            </nav>
        </div>

        <div class="hero-body">
            <div class="container has-text-centered">
            <p class="title">
                About Me
            </p>
            <p className='container has-text-left'>
            "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
            </p>
            </div>
        </div>

        <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
                <ul>
                <li class="is-active">
                    <a>Overview</a>
                </li>
                <li>
                    <a>Modifiers</a>
                </li>
                <li>
                    <a>Grid</a>
                </li>
                <li>
                    <a>Elements</a>
                </li>
                <li>
                    <a>Components</a>
                </li>
                <li>
                    <a>Layout</a>
                </li>
                </ul>
            </div>
            </nav>
        </div>
        </section>
    </>
  );
}

export default Navbar;
