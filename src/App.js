import { SidebarSetup } from "./features/SidebarSetup/SidebarSetup";

import { Wrapper } from "./features/Wrapper/Wrapper";


import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { ContentWrapper } from "./features/ContentWrapper/ContentWrapper";
import { NotFound } from "./pages/NotFound/NotFound";
import { useNavigationData } from "./navigation-data";

import { ErrorMessage } from "./ui-kit/ErrorMessage/ErrorMessage";


const RenderRoute = (item) => {
  return <>
    <Route path={item.path} element={item.component} />
    {item?.subItems?.map(RenderRoute)}
  </>
}


function App() {
  const navigationData = useNavigationData()

  return (
    <Wrapper>
      <Router>
        <SidebarSetup />

        <ContentWrapper>
          <Routes>
            {navigationData.map(RenderRoute)}
            <Route element={<NotFound />} />
          </Routes>
        </ContentWrapper>
        <ErrorMessage />
      </Router>
    </Wrapper>
  );
}

export default App;
