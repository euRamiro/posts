import React from 'react';

import Comentario from './Comment';

export default class Post extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            comentarios: [],
            novoComentario: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSubmit(e){
        this.setState({
            comentarios: [
                ...this.state.comentarios,
                { text: this.state.novoComentario }
            ]
        });

        this.setState({ novoComentario:'' });

        e.preventDefault();
    }

    handleTextChange(e){
        this.setState({ novoComentario: e.target.value });
    }
    
    render(){
        return(
            <div>
                <h2>{ this.props.title }</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.novoComentario}
                        onChange={this.handleTextChange} 
                    />
                    <button type='submit'>Comentar</button>
                </form>
                { this.state.comentarios.map((comment, index) => {
                    return <Comentario key={index} text={comment.text}/>
                }) }
            </div>
        );
    }
}