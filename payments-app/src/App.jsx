import './App.css'
import StockForm from './components/FormsLearn/StockForm';
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
      <StockForm />
    </>
  )
}

export default App
