import "./Home.css"//
import Navbar from "../Components/Navbar";
import BalanceCard from "../Components/BalanceCard";
import TransactionHistoryList from "../Components/TransactionHistoryList";

const Home = () => {
    return ( <main className="home">
       <BalanceCard />
       <TransactionHistoryList/>

       <Navbar/>
    </main> );
}
 
export default Home;