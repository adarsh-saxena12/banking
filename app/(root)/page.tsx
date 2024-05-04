import HeaderBox from '@/components/HeaderBox';
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {

    const loggedIn = { firstName: 'Adarsh', lastName: 'Saxena', email: 'contact@jsmastery.pro' };
    
    return (
        <div className='home'>
            <div className='home-content'>
               <header className='home-header'>
                 <HeaderBox 
                 type="greeting"
                 title="Welcome"
                 user={loggedIn?.firstName || 'Guest'}
                 subtext="Access and manage your account and transactions efficiently."
                 />

                 <TotalBalanceBox 
                 accounts={[]}
                 totalBanks={1}
                 totalCurrentBalance={1250.35}
                 />
               </header>
               resent transactions
            </div>

            <RightSideBar 
            user={loggedIn}
            transaction={[]}
            banks={[{ currentBalance: 123.50 }, { currentBalance: 500.50}]}
            />
        </div>
    );
};

export default Home;