import './App.css'
import CountryForm from './components/FormsLearn/CountryForm';
import StockFormStateful from './components/FormsLearn/StockFormStateful';
import PageHeader from "./components/pageHeader/PageHeader";
import Search from "./components/Search/Search";
import Transactions from "./components/Transactions/Transactions";
// we can use modern function syntax
const App = () => {
  return (
    <>
      <PageHeader />
      {/* <Search />
      <Transactions /> */}
      <StockFormStateful />
      <CountryForm />
    </>
  )
}

export default App
