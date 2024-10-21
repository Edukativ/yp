import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./components/layout/layout"
import MainPage, { mainPageLoader } from "./pages/main-page/main-page"
import './global.module.css'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import NotFoundPage from "./pages/not-found-page/not-fount-page";
import CategoriesPage, { categoriesLoader } from "./pages/categories-page/categories-page";
import ProductsPage, { productsLoader } from "./pages/products-page/products-page";
import SalesPage from "./pages/sales-page/sales-page";
import ShoppingCartPage from "./pages/shopping-cart-page/shopping-cart-page";
import SelectedCategoryPage, { categoryLoader } from "./pages/selected-category-page/selected-category-page";
import SelectedItemPage, { itemLoader } from "./pages/selected-item-page/selected-item-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path="/"
      element={<Layout />}
    >
      <Route index element={<MainPage />} loader={mainPageLoader}/>
      <Route path="/categories-page" element={<CategoriesPage />} loader={categoriesLoader}/>
      <Route path="/category/:id" element={<SelectedCategoryPage />} loader={categoryLoader}/>
      <Route path="/products-page" element={<ProductsPage />} loader={productsLoader}/>
      <Route path="/product/:id" element={<SelectedItemPage />} loader={itemLoader}/>
      <Route path="/sales-page" element={<SalesPage />} loader={productsLoader}/>
      <Route path="/shopping-cart-page" element={<ShoppingCartPage />}/>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
