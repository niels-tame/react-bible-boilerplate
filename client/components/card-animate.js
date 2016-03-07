/**
 * Created by nielshansen on 07/03/16.
 */
import React, { Component, PropTypes } from 'react';

import { Card, CardHeader, CardMedia, CardTitle, CardActions, CardText, FlatButton } from 'material-ui';
import { Motion, spring } from 'react-motion';


export default class CardAnimate extends Component {

    constructor(){
        super();

        this.state = {
            x: 0
        }

        //this.handleMouseOver = this.handleMouseOver.bind(this);
        //this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleMouseOver = (e) =>{
        this.setState({x: -25})
    }

    handleMouseLeave = (e) => {
        this.setState({x: 0})
    }

    render() {



        return (
            <Card style={{width:300}}>
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar="http://www.korpg.com/blog/wp-content/uploads/2012/05/that_was_awesome-300x300.jpg"
                />

                <Motion defaultStyle={{x:this.state.x}} style={{x: spring(this.state.x)}}>
                    {value =>
                    <CardMedia onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} style={{marginTop: value.x + '%'}}
                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                    >
                        <img src="http://explodingdog.com/drawing/awesome.jpg"/>
                    </CardMedia>}
                </Motion>
                <CardTitle title="Card title" subtitle="Card subtitle"/>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Action1"/>
                    <FlatButton label="Action2"/>
                </CardActions>
            </Card>
        )
    }
}