import { Routes, Route } from "react-router-dom";
import { FloatingActions } from "@/components/chatbot/FloatingActions";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetailPage from "./pages/ProductDetail";
import NotFoundPage from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <FloatingActions />
    </>
  );
}