import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Todo = () => {
    return(
        <>     
        <Container>
        
        <h2 style={{ color: 'green'}}>Next Steps for this App</h2>
        <div style={{ display: 'inline', float: 'left' }}>
                <h5 style={{ color: 'red' }}>Things to Do</h5>
                <ol style={{ listStyle: 'square' }}>
                    <li> First create a few cards for different flowers </li>
                    <li> Later read in info separately to populate title, info, image, etc.</li>
                    <li> Eventually set up a database with all the info</li>
                </ol>               

            </div>
    

       
        
{/*          <ul style = "list-styple-type:disc;">
            <li> First create a few cards for different flowers </li>
            <li> Later read in info separately to populate title, info, image, etc.</li>
            <li> Eventually set up a database with all the info</li>

         </ul> */}

        </Container>    
        </>
    );
    
}

export default Todo;