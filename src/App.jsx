import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layout/MainLayout";
import NotFoundPage from "./Pages/NotFoundPage";
import LoginForm from "./components/LoginForm";
import ProfilePage from "./Pages/ProfilePage";
ProfilePage;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/login" index element={<LoginForm />} />
      <Route path="*" index element={<NotFoundPage />} />
      <Route path="/profile" index element={<ProfilePage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
