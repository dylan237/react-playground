import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import PageHeader from "@Components/PageHeader";
import PageFooter from "@Components/PageFooter";
import Layout from "@Components/Layout";
import Menu from "@Components/Menu";
import RouterView from "@Router";
import theme from "@style/theme";

function App() {
  const { Sider, Content } = Layout;
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <PageHeader />
            <Layout>
              <Sider>
                <Menu />
              </Sider>
              <Layout>
                <Content>
                  <RouterView />
                </Content>
                <PageFooter />
              </Layout>
            </Layout>
          </ThemeProvider>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
