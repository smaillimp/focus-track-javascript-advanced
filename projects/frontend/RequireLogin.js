import { Navigate } from 'react-router';

const RequireLogin = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireLogin;

// USAGE: (in App.js)

<Routes>
  <Route path="/login" element={<Login />} />

  <Route
    path="/tweets"
    element={
      <RequireLogin isLoggedIn={isLoggedIn}>
        <Tweets />
      </RequireLogin>
    }
  />
</Routes>;
