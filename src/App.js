import logo from './logo.svg';
import './App.css';
import Hook1 from './components/Hook1';
import Hook2 from './components/Hook2';
import Hook3 from './components/Hook3';
import DataFetching from './components/DataFetching';
import PostFetching from './components/PostFetch';
import PostFetchingWithButton from './components/PostFetchWithButton';


function App() {
  return (
    <div className="App">
      <PostFetchingWithButton />
    </div>
  );
}

export default App;
