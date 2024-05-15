import { useDispatch } from 'react-redux';
import './App.css'
import { setUser, toggleLoading } from './Components/redux/features/user/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './Components/Firebase/firebase.config';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './main';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }));
        dispatch(toggleLoading(false));
      }
      else {
        dispatch(toggleLoading(false));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
