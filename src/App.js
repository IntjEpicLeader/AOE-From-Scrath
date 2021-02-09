import Header from "./components/header/Index";
import Layout from "./pages/layout/layout.redux";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Layout />
    </div>
  );
}
