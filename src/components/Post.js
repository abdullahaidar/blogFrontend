import { Card, Container, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';


const Post = (props) => {

    const { id } = useParams()

    const post = props.posts.find(post => post._id == id)

    return (
        <Container>
            { post ?
                <Card>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.content} </Card.Text>
                    </Card.Body>
                </Card>
                : <h1>no posts</h1>
            }
            <Link to={`/edit/${post._id}`}><Button className='btn-edit'>Edit Post</Button></Link>

        </Container>
    )
}

export default Post;

