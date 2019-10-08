import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';




function TodoContainer() {
   
    const [Item, setItem] = useState(''); //This state for  store Item and set it value.
    const [ItemList, setItemList] = useState([]); //This state for store listof items and set it values.



    function addTodoItem() {
        ItemList.push(Item);  //push Item in ItemList Array
        setItemList(ItemList);//set the value of of ItemList.
        setItem('');
    }

    function CompleteTodoItem(index) {
       const TodoItemList = [...ItemList];//Store itemlist in one variable todoitemlist.
       TodoItemList.splice(index ,1);//delete item of particular index and number of item one from itemlist.
       setItemList(TodoItemList);//set the itemlist.
    }

    return (
        <div>
            <Container >
                <h1>Please Add your Todo Items</h1>

                <Grid alignContent="center">

                    <Grid item>
                        <TextField
                            id="textfield"
                            label="Enter Todo"
                            placeholder="Todo"
                            margin="normal"
                            value={Item}
                            onChange={(event) => setItem(event.target.value)} />
                    </Grid>

                    <Grid item>
                        <br></br>
                        <Button variant="contained" color="primary" onClick={addTodoItem}>
                            Add
                       </Button>
                    </Grid>

                </Grid>

                {
                    ItemList.map((item, index) => {
                        return <Card key={index} style={{ width: '45%', textAlign: 'left', margin: 'auto', marginBottom: '20px' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item}
                                </Typography>

                                <CardActions>
                                    <Button color="primary" onClick={() => CompleteTodoItem(index)}>Completed</Button>
                                </CardActions>

                            </CardContent>

                        </Card>
                    })
                }
            </Container>
        </div>
    )
}

export default TodoContainer;