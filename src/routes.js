import React from 'react';
import {Switch, Route} from 'react-router-dom';

import About from './Components/About';
import Resume from './Components/Resume';
import Artworks from './Components/Artworks/Artworks';
import Contact from './Components/Contact';
import Newsletter from './Components/Newsletter';
import SingleArt from './Components/Artworks/SingleArt'
import Cart from './Components/Cart/Cart';
import Confirmation from './Components/Cart/Confirmation';

export default (
    <Switch>
        <Route exact path="/" component={About}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/artworks" component={Artworks}/>
        <Route path="/contact" component={Contact} />
        <Route path="/newsletter" component={Newsletter}/>
        <Route path="/single-art/:id" component={SingleArt}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/confirmation" component={Confirmation}/>
    </Switch>
)