import { Route, Routes, Navigate } from 'react-router-dom';

import MainHeader from './component/layout/MainHeader';
import Welcome from './page/Welcome';
import Ledger from './page/Ledger';
import Transactions from './page/Transactions';
import LedgerTransactions from './page/LedgerTransactions';
import Sample from './page/Sample';
import Sandbox from './page/Sandbox';
import Container from '@mui/material/Container';
// import './App.css';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Container>
        <main>
          <Routes>
            <Route path='/' element={<Navigate to='/welcome' />}>
            </Route>
            {/* You can use replace to replace as opposed to push
        <Route path='/' element={<Navigate replace  to='/welcome' />}>  
        </Route> */}
            <Route path='/sample' element={<Sample />}>
            </Route>        
            <Route path='/welcome' element={<Welcome />}>
            </Route>
            <Route path='/ledger/:ledgerId' element={<Ledger />}>
            </Route>            
            <Route path='/ledger' element={<Ledger />}>
            </Route>
            <Route path='/transactions' element={<Transactions />}>
            </Route>
            <Route path='/ledger-transactions/:ledgerId' element={<LedgerTransactions />}>
            </Route>          
            <Route path='/sandbox/:ledgerId' element={<Sandbox />}>
            </Route>     
          </Routes>
        </main>
      </Container>
    </div>
  );
}

export default App;
