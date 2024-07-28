import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import PerfectScrollbar from "react-perfect-scrollbar";
import axios from "axios";
import videoApp from "./assets/videos/backgroundvideo.mp4";
import "./App.scss";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7HhfAK-JfPcYoTvgFszo6Qag_CUIc9k4",
  authDomain: "todo-list-fcdb9.firebaseapp.com",
  projectId: "todo-list-fcdb9",
  storageBucket: "todo-list-fcdb9.appspot.com",
  messagingSenderId: "972952153966",
  appId: "1:972952153966:web:46481c21f085e3bf3b9b7f",
  measurementId: "G-TJRVV3FETV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  console.log(theme.useToken().token.colorBgContainer);
  const { Content, Footer } = Layout;
  const getUsers = async () => {
    const Us = await axios.get("https://todo-list-51ie.onrender.com/users");
    console.log("Us:", Us);
  };
  getUsers();

  return (
    <>
      <Layout id="layout" className="layout">
        <Header id="header" />
        <Content id="content" style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <video autoPlay muted loop>
              <source src={videoApp} type="video/mp4" />
            </video>
            <PerfectScrollbar>
              <Outlet />
            </PerfectScrollbar>
          </div>
        </Content>

        <Footer id="footer" style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};

export default App;
