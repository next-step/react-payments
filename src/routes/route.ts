import { createBrowserRouter } from 'react-router-dom';
import ListRoute from './list.tsx';
import RegisRoute from './regis.tsx';

export const router = createBrowserRouter([ListRoute, RegisRoute]);
