import "./Home.css"//
import Navbar from "../Components/Navbar";
import BalanceCard from "../Components/BalanceCard";
import TransactionHistoryList from "../Components/TransactionHistoryList";
import HeaderLine from "../Components/HeaderLine"

const Home = () => {
    return ( <main className="home">
        <HeaderLine title="Home" />
       <BalanceCard />
       <TransactionHistoryList/>

       <Navbar/>
    </main> );
}
 
export default Home;