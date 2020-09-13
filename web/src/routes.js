import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DownloadPage from './pages/DownloadPage'

export default function Routes(){
    return(
       <BrowserRouter>
        <Switch>
            <Route path='/' component={DownloadPage} />
        </Switch>
       </BrowserRouter>
    )
}

