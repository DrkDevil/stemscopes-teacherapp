/* eslint-disable jsx-a11y/anchor-is-valid */
import Content from './components/mock data/Content'
import Navbar  from './components/core/navbar/Navbar'
import Subnav  from './components/core/subnav/Subnav'
import PageNavigation  from './components/core/page navigation/PageNavigation'
import './assets/scss/app.scss';

function App() {
  return (
    <>
    <Navbar />
    <Subnav />
    <div className='pageArea'>
      <div className='contentArea flex-grid'> 
        <div className='left col'> 
          <div className='flex-grid'>
            <div className='page-navigation col'>
              <PageNavigation />
            </div>
            <div className='col content'>
              <Content />
            </div>
          </div>
        </div>
        <div className='right col'> 
          <div className='card'>
            Quick Links
            <ul>
              <li>Class Scope</li>
              <li>Recent Bookmarks</li>
              <li>Upcoming Scopes</li>
              <li>My Bookmarks</li>
              </ul>
          </div>
        </div>
      </div>
    </div>       
    </>
  );
}

export default App;