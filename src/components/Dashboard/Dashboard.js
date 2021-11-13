import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import useAuth from '../../hooks/useAuth';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useHistory } from 'react-router';

import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import Pay from './Pay/Pay';
import MyOrders from './MyOrders/MyOrders';
import AddReview from './AddReview/AddReview';
import DashboardHome from './DashboardHome/DashboardHome';
import ManageOrders from './ManageOrders/ManageOrders';
import AddProduct from './AddProduct/AddProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageProducts from './ManageProducts/ManageProducts';

const Dashboard = () => {
    const { admin, logOut } = useAuth();
    const history = useHistory();
    let { path, url } = useRouteMatch();

    if (admin) {
        return (
            <div>
                <div>
                    <SideNav style={{ marginTop: "80px", backgroundColor: "#212529", position: "fixed" }} onSelect={(selected) => { }}>
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="dashboard-home">
                            <NavItem eventKey="dashboard-home" onClick={() => { history.push(`${url}/dashboard-home`) }}>
                                <NavIcon>
                                    <i className="fas fa-tachometer-alt" style={{ fontSize: '1.55em' }} />
                                </NavIcon>
                                <NavText>
                                    Dashboard
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="manage-all-orders" onClick={() => { history.push(`${url}/manage-all-orders`) }}>
                                <NavIcon>
                                    <i className="fas fa-edit" style={{ fontSize: '1.55em' }} />
                                </NavIcon>
                                <NavText>
                                    Manage All Orders
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="add-product" onClick={() => { history.push(`${url}/add-product`) }}>
                                <NavIcon>
                                    <i className="fas fa-plus-square" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Add Product
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="make-admin" onClick={() => { history.push(`${url}/make-admin`) }}>
                                <NavIcon>
                                    <i className="fas fa-users-cog" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Make an Admin
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="manage-all-products" onClick={() => { history.push(`${url}/manage-all-products`) }}>
                                <NavIcon>
                                    <i className="fas fa-tasks" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Manage All Products
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="logout" onClick={logOut}>
                                <NavIcon>
                                    <i className="fas fa-sign-out-alt" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Logout
                                </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                </div>
                <div>
                    <Switch>
                        <Route path={`${path}/dashboard-home`}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/manage-all-orders`}>
                            <ManageOrders></ManageOrders>
                        </Route>
                        <Route path={`${path}/add-product`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route path={`${path}/make-admin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/manage-all-products`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <div>
                    <SideNav style={{ marginTop: "80px", backgroundColor: "#212529", position: "fixed" }} onSelect={(selected) => { }}>
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="dashboard-home">
                            <NavItem eventKey="dashboard-home" onClick={() => { history.push(`${url}/dashboard-home`) }}>
                                <NavIcon>
                                    <i className="fas fa-tachometer-alt" style={{ fontSize: '1.55em' }} />
                                </NavIcon>
                                <NavText>
                                    Dashboard
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="pay" onClick={() => { history.push(`${url}/pay`) }}>
                                <NavIcon>
                                    <i className="fas fa-money-bill-wave" style={{ fontSize: '1.55em' }} />
                                </NavIcon>
                                <NavText>
                                    Pay
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="my-orders" onClick={() => { history.push(`${url}/my-orders`) }}>
                                <NavIcon>
                                    <i className="fas fa-shopping-cart" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    My Orders
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="add-review" onClick={() => { history.push(`${url}/add-review`) }}>
                                <NavIcon>
                                    <i className="fa fa-star" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Review
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="logout" onClick={logOut}>
                                <NavIcon>
                                    <i className="fas fa-sign-out-alt" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Logout
                                </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                </div>
                <div>
                    <Switch>
                        <Route path={`${path}/dashboard-home`}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/my-orders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/add-review`}>
                            <AddReview></AddReview>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }

};

export default Dashboard;