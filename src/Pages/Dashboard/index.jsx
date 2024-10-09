import LayoutFlex from '../../Components/Layouts/LayoutFlex'
import Paginador from './Components/Paginador'
import TableContact from './Components/TableContact'
import VerticalNav from './Components/VerticalNav'
import { DashBoardProvider } from './Context/DashBoardContext'
import './dashboard.scss'

function DashBoard() {
    return (
        <>
            <DashBoardProvider>
                <LayoutFlex>
                    <DashBoardContent />
                </LayoutFlex>
            </DashBoardProvider>
        </>
    )
}

function DashBoardContent() {
    return(
        <>
           <div className='dashboard-content-div'>
                <VerticalNav />
                <div className='dashboard--content'>
                    <TableContact />
                    <Paginador />
                </div>
                
           </div>
        </>
    )
}

export default DashBoard
