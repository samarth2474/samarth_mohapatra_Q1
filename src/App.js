import React from 'react';
import  Cards  from './cards/Cards'
import './App.css';
const e = React.createElement;

const AppNav = () => (
   <nav class="navbar navbar-dark bg-dark">
       <a class="navbar-brand" href="#">My Blog</a>
       <a role="button" class="btn btn-outline-info navbar-btn" href="/login">Login</a>
   </nav>
);
class App extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
          <div>
              <AppNav />
              <div class="card mt-4" Style="width: 100%;">
                  <div class="card-body">
                      Please login to see your posts.
        </div>
              </div>
              <Cards />
          </div>
      );
  }
}
export default App;
