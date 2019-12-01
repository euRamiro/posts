import React from 'react';

import Post from './Post';

export default class App extends React.Component {
    render(){
        return(
            <div>
                <h1>Posts e Comentários</h1>
                <Post/>
            </div>
        );
    }
}