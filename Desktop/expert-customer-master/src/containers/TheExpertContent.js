import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'
import {isAdminAuth} from '../config';
import Chat from '../components/chat'

// routes config
import routes from '../expRoutes'
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
                  <div>
                         <CFade>
                      <route.component {...props} />
                    </CFade>
                  </div>
                 
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
