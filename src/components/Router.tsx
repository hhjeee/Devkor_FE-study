import { Route, Routes, Navigate } from "react-router-dom";
import IndexPage from "pages/index";
import HomePage from "pages/home";
import AboutPage from "pages/about";
import ContactPage from "pages/contact";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

/*    <Route path="/posts" element={<h1>Post List Page</h1>} />
      <Route path="/posts/:id" element={<h1>Post Detail Page</h1>} />
      <Route path="/posts/edit/:id" element={<h1>Post Edit Page</h1>} />
      <Route path="/profile" element={<h1>Profile Page</h1>} />
      <Route path="/profile/edit" element={<h1>Profile Edit Page</h1>} />
      <Route path="/notifications" element={<h1>Notifications Page</h1>} />
      <Route path="/login" element={<h1>Login Page</h1>} />
      <Route path="/users/login" element={<h1>Login Page</h1>} />
      <Route path="/users/signup" element={<h1>Signup Page</h1>} />'
      <Route path="*" element={<Navigate replace to="/" />} />*/
