import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Card, Button } from 'react-bootstrap';
import './PostList.css';

const PostList = (props) => {
        // console.log(props.posts)

    const deleteHandel = (id) => {
        console.log(id);
        props.deletePost(id);
    }

    return (
        <Container>
                <ul className='list'>
                    {props.posts ? props.posts.map((element, index) =>
                        <li key={index}>
                            <Card style={{ margin: '1rem' }}>
                                <Card.Body>
                                    <Card.Title>{element.title}</Card.Title>
                                    <Card.Text>{element.content} </Card.Text>
                                    <Link to={`/post/${element._id}`}>
                                        <Button className='btn' variant="primary" >Read More</Button>
                                    </Link>
                                    <Link to={`/edit/${element._id}`}><Button className='btn-edit'>Edit Post</Button></Link>
                                    <Button className='btn-edit' onClick={() => deleteHandel(element._id)}>Delete Post</Button>
                                </Card.Body>
                            </Card>
                        </li>)
                        : <h1>There are no posts</h1>
                    }
                </ul>
        </Container>
    )
}

export default PostList
