import { Route, Routes } from 'react-router';
import Auth from '../pages/Auth/Auth'
import Home from '../pages/User/Home'
import Dashboard from '../pages/Admin'
import Admin from '../middlewares/Admin'
import User from '../middlewares/User'
import Guest from '../middlewares/Guest'
import ViewScedule from '../pages/Admin/Scedule/ViewScedule'
import AddClass from '../pages/Admin/Class/AddClass'
import EditClass from '../pages/Admin/Class/EditClass'
import ViewClass from '../pages/Admin/Class/ViewClass'
import ViewArmada from '../pages/Admin/Armada/ViewArmada'
import AddArmada from '../pages/Admin/Armada/AddArmada'
import EditArmada from '../pages/Admin/Armada/EditArmada'
import ViewBus from '../pages/Admin/Bus/ViewBus'
import AddBus from '../pages/Admin/Bus/AddBus'

export default function root() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Guest>
            <Auth />
          </Guest>
        }
      />

      <Route
        path="/home"
        element={
          <User>
            <Home />
          </User>
        }
      />

      <Route
        path="/admin"
        element={
          <Admin>
            <Dashboard />
          </Admin>
        }>
        <Route index element={<ViewScedule />} />
        <Route
          path="/admin/class"
          element={<ViewClass />}
        />
        <Route
          path="/admin/class/add"
          element={<AddClass />}
        />
        <Route
          path="/admin/class/:id"
          element={<EditClass />}
        />
        <Route
          path="/admin/armada"
          element={<ViewArmada />}
        />
        <Route
          path="/admin/armada/add"
          element={<AddArmada />}
        />
        <Route
          path="/admin/armada/:id"
          element={<EditArmada />}
        />
        <Route path="/admin/bus" element={<ViewBus />} />
        <Route path="/admin/bus/add" element={<AddBus />} />
      </Route>
    </Routes>
  )
}
