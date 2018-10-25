import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

const book = (props) => {
	return(
		<p> 
		<p>
		<ListGroup style={{"width": "500px"}}>
			<ListGroupItem>Author: {props.author}</ListGroupItem>
			<ListGroupItem>Title: {props.title}</ListGroupItem>
			<ListGroupItem>Publication Year: {props.year}</ListGroupItem>
			<ListGroupItem>Publication Country: {props.country}</ListGroupItem>
			<ListGroupItem>Publication City: {props.city}</ListGroupItem>
			<ListGroupItem>Pages: {props.children}</ListGroupItem>
		</ListGroup>
		</p></p>
	)


};

export default book;