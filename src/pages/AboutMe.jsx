import React, { Component } from 'react';
import Title from '../components/layout/Title';
import '../App.sass';

export default class AboutMe extends Component {
    render() {
        return (
            <div className="container is-fluid columns is-mobile is-multiline">
                <article className="column is-half article">
                    <Title title="About Me" />
                    <p className="section">
                        Umami consequat aute nulla ut quinoa hella humblebrag
                        cold-pressed cloud bread. Taiyaki synth sustainable,
                        prism mixtape mustache raclette +1 distillery taxidermy
                        lumbersexual. Semiotics hashtag mixtape minim chambray
                        hella blue bottle man bun listicle messenger bag mollit
                        culpa taxidermy scenester ethical. Selfies keffiyeh
                        knausgaard tilde pabst listicle artisan proident salvia
                        deep v. Oh. You need a little dummy text for your
                        mockup? How quaint. I bet you’re still using Bootstrap
                        too…
                    </p>
                </article>
                <article className="column is-half">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Title title="What's on my Desk?" />
                    <p className="section has-text-left">
                        Street art edison bulb gluten-free, tofu try-hard
                        lumbersexual brooklyn tattooed pickled chambray.
                        Actually humblebrag next level, deep v art party wolf
                        tofu direct trade readymade sustainable hell of banjo.
                        Organic authentic subway tile cliche palo santo, street
                        art XOXO dreamcatcher retro sriracha portland air plant
                        kitsch stumptown. Austin small batch squid gastropub.
                        Pabst pug tumblr gochujang offal retro cloud bread
                        bushwick semiotics before they sold out sartorial
                        literally mlkshk. Vaporware hashtag vice, sartorial
                        before they sold out pok pok health goth trust fund
                        cray.
                    </p>
                </article>
            </div>
        );
    }
}
