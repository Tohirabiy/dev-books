import ReactDOM from 'react-dom/client'
import Layout from './pages/Layout'
import './index.css'
import { RouterProvider} from "react-router-dom";
import router from './Router/index.jsx';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
        <RouterProvider router={router}>
            <Layout />
        </RouterProvider>
    // </React.StrictMode>
);
