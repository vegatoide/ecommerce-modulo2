import { Outlet, Link } from "react-router-dom";
import { Menu } from "antd";
import { useState } from "react";
import { HomeTwoTone, EditTwoTone, CheckCircleTwoTone, UserOutlined } from '@ant-design/icons';
import { AuthProvider, useAuth } from "../resources/context/AuthContext";

const Layout = () => {
  const { currentUser } = useAuth();
  const [current, setCurrent] = useState('h');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
     <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item></Menu.Item>
      <Menu.Item key="h" icon= {<HomeTwoTone />}>
       <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="r" icon= {<EditTwoTone />}>
        <Link to="/register">Register</Link>
      </Menu.Item>
      <Menu.Item key="l" icon= {<CheckCircleTwoTone />}>
        <Link to="/login">Login</Link>
      </Menu.Item>
      <div className="UserIcon">
      <Menu.Item icon= {<UserOutlined />} selectable='false'>{currentUser ? (
        <Link to="/OnlyForYourEyes" key="p">Welcome, {currentUser.email}</Link>
      ) : (
        <Link to="/login" key="o">You are not logged in.</Link>
      )}</Menu.Item>
      </div>
     </Menu>
     <Outlet/>
    </>
  )
};

export default Layout;