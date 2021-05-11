import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import UrlLogo from './LogoEuphoria.png';
import 'antd/dist/antd.css';
import { InstagramOutlined, GoogleOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import { Image } from 'antd';

import UrlCarta1 from './Hoja1.png';
import UrlCarta2 from './Hoja2.png';
import UrlCarta3 from './Hoja3.png';

const { Header, Footer, Content } = Layout;
const position = [51.505, -0.09]
const contentStyle = {
    height: '20%',
    color: '#fff',
    lineHeight: '20%',
    textAlign: 'center'
};
const fuck = {
    display: 'block',
    margin: '60% 0px 40% 3%'
};


function App() {
    return (
            <body>
                <div id="Main" className="App">
                    <Layout>
                        <Layout>
                            <Header style={{ backgroundColor: '#52006F' }}>
                                <Menu theme="dark" class="Menu" mode="horizontal" style={{ backgroundColor: '#52006F' }}>
                                    <img width={80} src={UrlLogo} style={{}} />
                                    <Menu.Item key="1">
                                        <a href="/Home">Home</a>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <a href="/Carta">Carta</a>
                                    </Menu.Item>
                                </Menu>
                            </Header>
                            <Content Class="Cuerpo">
                                <div>
                                    <Carousel dotPosition='bottom'>
                                        <div>
                                            <h3 style={contentStyle}><Image width='20%' style={fuck} src={UrlCarta1}/></h3>
                                        </div>
                                        <div>
                                            <h3 style={contentStyle}><Image width='20%' style={fuck} src={UrlCarta2} /></h3>
                                        </div>
                                        <div>
                                            <h3 style={contentStyle}><Image width='20%' style={fuck} src={UrlCarta3} /></h3>
                                        </div>
                                    </Carousel>
                                </div>
                            </Content>
                            <footer>

                                <div class="footer-limiter">

                                    <div class="footer-right">

                                        <a href="https://www.instagram.com/euphoria__nightclub/"><InstagramOutlined class="fa fa-facebook"/></a>
                                        <a href="https://www.google.com/search?client=avast-a-2&q=euphoria+gandia&oq=euphoria+gandia&aqs=avast..69i57j0.2828j0j7&ie=UTF-8"><GoogleOutlined class="fa fa-facebook"/></a>
                                    
                                    </div>

                                    <div class="footer-left">

                                        <p class="footer-links">Cami vell de valencia 108 | 46730</p>

                                        <p>telefono de reserva: 635 88 89 77</p>
                                    </div>

                                </div>

                            </footer>
                        </Layout>
                    </Layout>
                </div>
                <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
            </body>
    );
}

export default App;
