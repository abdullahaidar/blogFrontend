import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import { Container, Form, Button } from 'react-bootstrap'


const EditPost = (props) => {

    const [post, setPost] = useState({ "title": '', "content": '' })
     let history = useHistory()
    // find the id from the url
    console.log(props);

    //console.log(props.posts);
    // console.log(props.posts[0].id)
    // let id = props.posts[props.posts.length - 1];
    // console.log(id)

    // get the id from the url
    const urlPath = window.location.pathname.split('/');
    let id = urlPath[urlPath.length - 1];
    console.log(id)

    useEffect(() => {
        //console.log('this works')
        const findPost = props.posts.find(post => post._id == id);
        setPost(findPost)
    }, [])

    const updateHandel = () => {
        props.updatePost(post);
         history.push('/');
    }

    return (

        <Container className="container">
            <Form>
                <Form.Label className="label">Title</Form.Label>
                <Form.Control type="text" placeholder="Add a title" id="title"
                    defaultValue={post.title}
                    onChange={(event) => setPost({ ...post, title: event.target.value })} />
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="label">Content</Form.Label>
                    <Form.Control as="textarea" rows={10} id="textarea"
                        defaultValue={post.content}
                        onChange={(event) => setPost({ ...post, content: event.target.value })} />
                </Form.Group>
                <Button onClick={() => updateHandel()} className='mt-3'>Update</Button>
            </Form>
        </Container>
    )
}

export default EditPost;
