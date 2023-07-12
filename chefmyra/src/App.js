import styled, { ThemeProvider } from "styled-components";
import PersonalContent from "./components/PersonalContent";
import PersonalChef from "./components/PersonalChef";
import EventCoordinator from "./components/EventCoordinator";
import Contact from "./components/Contact";
import ContactPage from "./components/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import theme from "./theme";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Container = styled.div`
  width: 100%
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.textColor};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 10px;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<PersonalContent />} />
            <Route path="/personal-chef" element={<PersonalChef />} />
            <Route path="/event-coordinator" element={<EventCoordinator />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Contact />
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
