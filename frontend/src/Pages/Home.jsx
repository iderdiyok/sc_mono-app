import "./Home.css"//
import Navbar from "../Components/Navbar";
import BalanceCard from "../Components/BalanceCard";
import TransactionHistoryList from "../Components/TransactionHistoryList";
import HeaderLine from "../Components/HeaderLine"
import {useProfileInfo} from "../hooks/useProfileInfo"
const Home = (props) => {
    const profileInfo = useProfileInfo(props.token)
    return ( 
        <main className="home">
            <HeaderLine title="Home" />
            <BalanceCard profileInfo={profileInfo}/>
            <TransactionHistoryList/>
            <Navbar/>
        </main> 
    );
}

export default Home;