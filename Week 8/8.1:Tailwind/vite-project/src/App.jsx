import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { SideBar } from './components/SideBar'

function App() {

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
      <SideBar/>
      <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13} />
    </div>
  )
}

export default App
