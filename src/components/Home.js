import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => (
  <>
    <Navbar />
    <div id="detail">
      <Outlet />
    </div>
  </>
);
export default Home;
