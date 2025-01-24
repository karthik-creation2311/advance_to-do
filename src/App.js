import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Login from './components/Auth/Login';
import TaskInput from './components/Tasks/TaskInput';
import TaskList from './components/Tasks/TaskList';
import { checkAuth } from './redux/actions/authActions';
import { Navigate } from 'react-router-dom';

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <Router>
      <div className="container my-4">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Protected route for tasks */}
          <Route
            path="/tasks"
            element={
              isAuthenticated ? (
                <div className="row">
                  <div className="col-12 col-md-6 mb-4">
                    <TaskInput />
                  </div>
                  <div className="col-12 col-md-6 mb-4">
                    <TaskList />
                  </div>
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* Redirect root path to either tasks or login based on authentication */}
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/tasks" /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
