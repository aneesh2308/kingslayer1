import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'
import {isAdminAuth} from '../config';

// routes config
import routes from '../customerRoutes'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheExpertContent = () => {
  return (
    <main className="">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                  )} />
              )
            })}
            <Redirect from="/" to= {isAdminAuth? '/dashboard':'/login'} />
             </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheExpertContent)
