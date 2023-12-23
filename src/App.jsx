import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

// routes
import AuthRoute from './components/Auth/AuthRoute';
import GuestRoute from './components/Auth/GuestRoute';
import RoleRoute from './components/Auth/RoleRoute';

// components
import MainLayout from '@/components/Layouts/MainLayout/MainLayout';
import LancerLayout from './components/Layouts/LancerLayout/LancerLayout';

// pages
import { Dashboard } from '@/pages/Dashboard';
import { Kanban } from '@/pages/Kanban';
import { ListUser, AddUser, DetailUser } from '@/pages/User';
import { ListProduct, AddProduct, DetailProduct } from '@/pages/Product';
import { Login } from '@/pages/Login';
import Error403 from '@/pages//Error/Error403';

// config
import { ROLE_USER } from './configs';

export default function App() {

  const routes = [
    {
      path: '/',
      element: Dashboard,
      auth: AuthRoute,
      layout: MainLayout,
      requireRole: [ROLE_USER.ADMIN, ROLE_USER.OPERATOR]
    },
    {
      path: '/kanban',
      element: Kanban,
      auth: AuthRoute,
      layout: MainLayout,
      requireRole: [ROLE_USER.ADMIN, ROLE_USER.OPERATOR]
    },
    {
      path: '/user',
      element: ListUser,
      auth: AuthRoute,
      layout: MainLayout,
      requireRole: [ROLE_USER.ADMIN, ROLE_USER.OPERATOR]
    },
    {
      path: '/login',
      element: Login,
      auth: GuestRoute,
    },
    {
      path: '/403',
      element: Error403
    },
    {
      path: '*',
      element: () => <h1>Not Found</h1>,
    }
  ]

  return (
    <Routes>
      {routes.map((route, index) => {
        const AuthComponent = route?.auth || React.Fragment;
        const LayoutComponent = route?.layout || React.Fragment;
        const Component = route?.element || React.Fragment;

        let renderContent = React.Fragment;
        if(route.requireRole) {
          renderContent = <RoleRoute requireRole={route.requireRole}>
            <Component />
          </RoleRoute>
        } else {
          renderContent = <Component />
        }

        return (
          <Route 
            key={index}
            path={route.path}
            element={
              <AuthComponent>
                <LayoutComponent>
                  {renderContent}
                </LayoutComponent>
              </AuthComponent>
            } 
          />
        )
      })}
      
      {/* <Route 
        path="/" 
        element={<AuthRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </AuthRoute>
        } 
      />
      <Route 
        path="/user" 
        element={<AuthRoute>
          <MainLayout>
              <ListUser />
            </MainLayout>
          </AuthRoute>
        } 
      />
      <Route 
        path="/user/add" 
        element={<AuthRoute>
          <LancerLayout>
            <AddUser />
          </LancerLayout>
          </AuthRoute>
        } 
      />
      <Route
        path="/user/:id" 
        element={<AuthRoute>
          <MainLayout>
            <DetailUser />
          </MainLayout>
          </AuthRoute>
        } 
      />
      <Route 
        path="/product" 
        element={<AuthRoute>
          <MainLayout>
            <ListProduct />
          </MainLayout>
          </AuthRoute>
        } 
      />
      <Route path="/product/add" element={<AuthRoute>
          <MainLayout>
            <AddProduct />
          </MainLayout>
          </AuthRoute>
        }  />
      <Route path="/product/:id" element={<AuthRoute>
          <MainLayout>
            <DetailProduct />
          </MainLayout>
          </AuthRoute>
        }  />
      <Route path="/kanban" element={<AuthRoute>
          <MainLayout>
            <Kanban />
          </MainLayout>
        </AuthRoute>
        }  />
      <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} /> */}
      {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
    </Routes>
  );
}