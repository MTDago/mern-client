import React, { Component } from 'react'
import Title from '../components/Title'
import '../App.css'

export default class AboutMe extends Component {
    
    render() {
        return (
            <section className="blogs">
                <Title title="About Me" />
                <div className='blogs-center'>                   
                </div> 
                <p> 
                    Umami consequat aute nulla ut quinoa hella humblebrag cold-pressed cloud bread. Taiyaki synth sustainable, prism mixtape mustache raclette +1 distillery taxidermy lumbersexual. Semiotics hashtag mixtape minim chambray hella blue bottle man bun listicle messenger bag mollit culpa taxidermy scenester ethical. Selfies keffiyeh knausgaard tilde pabst listicle artisan proident salvia deep v. 
                    
                    Oh. You need a little dummy text for your mockup? How quaint. I bet you’re still using Bootstrap too…
                </p>  
                <p> 
                    Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.
                </p>
                <p>
                    Single-origin coffee synth chia lumbersexual gastropub, shaman meditation hot chicken street art tofu   hoodie. Woke fingerstache tumblr kombucha cold-pressed, church-key hammock crucifix mustache tousled  shoreditch jianbing VHS swag. Vinyl gastropub organic twee, palo santo chicharrones fanny pack hella     church-key taxidermy schlitz williamsburg bicycle rights vape. Four dollar toast distillery pabst wayfarers street art, synth ugh fanny pack 3 wolf moon brunch bushwick. Typewriter williamsburg farm-to-table irony keffiyeh swag chia wolf. Gochujang tofu bitters, cloud bread pabst typewriter four loko lumbersexual hammock normcore lyft activated charcoal af man braid pug.
                </p>
            </section>            
        )
    }
}