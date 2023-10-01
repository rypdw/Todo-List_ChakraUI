import './App.css';
import { useState } from 'react'
import { Container, Flex, Box } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react'
import { ListItem, UnorderedList } from '@chakra-ui/react'
import { Checkbox, Button, Input} from '@chakra-ui/react'
import { FormLabel} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'




function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const addTodo = (e) => {
      e.preventDefault()
      setList([...list, {text:input, complete: false}])
      setInput("");
  };

  const deleteTodo = (text) => {
    const newList = [...list]
    newList.splice(text, 1)
    setList(newList);
  };

const handleCheckbox = (index) => {
  const newTasks = [...list];
  newTasks[index].completed = !newTasks[index].completed;
  setList(newTasks);
};
const completedTasks = list.filter((task) => task.completed);
  return (
    <Container backgroundColor='#1A212C' maxW='100vw' minH='100vh'display='flex' alignItems='center' flexDirection='column' paddingTop='50px'>
    <Heading color='#ffffff' size='2xl'>Chores ToDo List</Heading>

    {/* list */}
    <Flex className='list' margin='80px 0 80px 0'>
      {list?.length > 0 ? (
          <UnorderedList margin='0'>
            {list.map((entry, index) => (
              <Flex justifyContent='space-between' marginBottom='10px' sx={{w: {xs:'70vw', sm:'70vw', md:'60vw', lg:'60vw', xl:'60vw', '2xl':'50vw'}}}>
                <Checkbox borderColor='green.400' isChecked={entry.completed} onChange={() => handleCheckbox(index)}/>
                <ListItem key={index} color='#ffffff' listStyleType='none' fontSize='lg'  className={entry.completed ? 'completed' : ''}>{entry.text}</ListItem>
                <Button size='sm' variant='outline' borderColor='red' onClick={() => {deleteTodo(entry);}}><DeleteIcon color='red'/></Button>
              </Flex>
            ))}
          </UnorderedList>
        ) : (
        <Box>
          <Text color='#ffffff'>No task found</Text>
        </Box>
      )}
    </Flex>

    <Text borderTop= '1px Solid #ffffff' w='100vw'/>

    {/* from */}
    <Flex  className='input' flexDirection='column' alignItems='center' margin='30px 0 30px 0' gap='20px'  sx={{w: {xs:'70vw', sm:'70vw', md:'60vw', lg:'60vw', xl:'60vw', '2xl':'50vw'}}}>
      <Text color='#ffffff' size='4xl' as='b'>Done : {completedTasks.length}</Text>
      <form>
          <FormLabel color='#ffffff'>Add Todo</FormLabel>
          <Input type="text" color='#ffffff' value={input} placeholder="Create a new todo" onChange={handleChange} sx={{w: {xs:'70vw', sm:'70vw', md:'60vw', lg:'60vw', xl:'60vw', '2xl':'50vw'}}} margin='5px 0 18px 0'/>
          <Button type='submit' colorScheme='blue' onClick={addTodo}>Add Task</Button>
      </form>
    </Flex>
  </Container>
    

  );
}

export default App;
