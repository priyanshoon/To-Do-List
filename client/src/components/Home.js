import Navbar from '../components/Navbar';
import TodoList from '../components/TodoList';

const Home = () => {
  return (
    <>
      <Navbar />
      <div class="container">
        <TodoList />
      </div>
    </>
  )
}

export default Home
