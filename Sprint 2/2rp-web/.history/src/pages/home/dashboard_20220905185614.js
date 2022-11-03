import Sidebar from "../../components/sidebar"
import Button from 'react-bootstrap/Button';

function Dashboard() {
    return (
        <Sidebar>
            <div className="d-flex justify-content-between">
                <label>Apontar Hora Extra</label>
                <Button>Add</Button>
            </div>
        </Sidebar>
    )
}

export default Dashboard