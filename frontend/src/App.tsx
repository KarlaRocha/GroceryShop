// import * as React from 'react';
// import logo from './logo.svg';
// import './App.css';

// import { Header } from './components';

// function App() {
//   return (
//     <div className="App">
//       <header className="p-2">
//         <Header />
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';

import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './relay/RelayEnviroment';
import AllCategoriesQuery from './queries/AllCategoriesQuery'

import { Card } from './components';

const { Suspense } = React;

// Define a query


// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
// const preloadedQuery = loadQuery(RelayEnvironment, AllCategoriesQuery, {
//   /* query variables */
// });

const preloadedQuery = loadQuery(RelayEnvironment, AllCategoriesQuery);

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function App(props: any) {
  const data = usePreloadedQuery(AllCategoriesQuery, props.preloadedQuery);
  console.info({ data })
  return (
    <div className="App">
      <div className="d-flex flex-row">
        {data?.allCategories.edges.map((category: any) => (
          <div className="m-1">
            <Card title={category.node.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot(props: any) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;