import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './layout-blueprints';
import Skeleton from 'react-loading-skeleton';
import { Col, Row } from 'reactstrap';

const LandingPage = lazy(() => import('./LandingPage'));

const Routes = () => {
    return (
        <AnimatePresence>
            <Suspense
                fallback={
                    <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
                        <Row className="w-50">
                            <div className="w-50 mx-auto col-lg-12">Cargando...</div>
                            <div className="w-50 mx-auto col-lg-12">
                                <Skeleton className="mx-auto" count={1} />
                            </div>
                        </Row>
                    </div>
                }>
                {/* algo */}
                <Layout>
                    <Switch>
                        <Redirect from="/agromix" to="/" />
                        <Route exact path="/" component={LandingPage}></Route>
                    </Switch>
                </Layout>
            </Suspense>
        </AnimatePresence>
    );
};

export default Routes;
