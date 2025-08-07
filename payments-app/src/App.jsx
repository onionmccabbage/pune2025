import './App.css'
import CountryForm from './components/FormsLearn/CountryForm';
import StockFormStateful from './components/FormsLearn/StockFormStateful';
import StockFormReducer from './components/FormsLearn/StockReducer';
import PageHeader from "./components/pageHeader/PageHeader";
import PaymentsPage from './components/RestLearn/PaymentsPage';
import Search from "./components/Search/Search";
import Transactions from "./components/Transactions/Transactions";
// we can use modern function syntax
const App = () => {
  return (
    <>
      <PageHeader />
      {/* <Search />*/}
      
      <PaymentsPage />
      
      {/* <Transactions /> 
      <StockFormReducer />
      <CountryForm /> */}
    </>
  )
}

export default App
