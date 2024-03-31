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
import SignUpPage from "./Pages/SignUpPage";
import ProfilePage from "./Pages/ProfilePage";
import DatabaseCheck from "./Pages/DatabaseCheck";
import AlbumProfilePage from "./Pages/AlbumProfilePage";
import ArtistProfilePage from "./Pages/ArtistProfilePage";
import Browse from "./Pages/Browse";
ProfilePage;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/login" index element={<SignUpPage />} />
      <Route path="*" index element={<NotFoundPage />} />
      <Route path="/profile" index element={<ProfilePage />} />
      <Route path="/check" index element={<DatabaseCheck />} />
      {/* <Route path="/album" index element={<AlbumProfilePage />} /> */}
      <Route path="/browse" index element={<Browse />} />
      <Route path="/artist/:id" index element={<ArtistProfilePage />} />
      <Route path="/album/:id" index element={<AlbumProfilePage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
