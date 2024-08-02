import Navbar from '../components/Navbar';
import TodoList from '../components/TodoList';
import Welcome from '../components/Welcome';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        {
          <TodoList />
          // <Welcome />
        }
      </div>
    </>
  )
}

export default Home
