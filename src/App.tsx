import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/posts/posts";
import MainLayout from "./layouts/main-layout/main-layout";
import Explore from "./pages/explore/explore";
import Login from "./pages/authentication/login/login";
import Signup from "./pages/authentication/signup/signup";
import { Toaster } from "@/components/ui/sonner";
import { config } from "./config";
import { useEffect } from "react";
import { Profile } from "./pages/profile/profile";

function App() {
  useEffect(() => {
    console.log("App running in " + config.ENV + " environment");
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Posts />} />
            <Route path="explore" element={<Explore />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
        <Toaster
          position="top-center"
          visibleToasts={2}
          richColors
          theme="light"
        />
      </BrowserRouter>
    </>
  );
}

export default App;
