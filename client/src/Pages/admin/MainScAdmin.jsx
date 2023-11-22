import "./MainScAdmin.css";
import AdminNavbar from "../../components/admin/AdminNavbar";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';


export default function MainSc(props) {

    const [formposts, setFormposts] = useState([]);
    const fetchData = async () => {
        await axios.get(`${process.env.REACT_APP_API}/admin`)
            .then((response) => {
                setFormposts(response.data)
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    const updateComfirmed = (slug) => {
        axios.patch(`${process.env.REACT_APP_API}/admin/${slug}`)
            .then((response) => {
                Swal.fire('แจ้งเตือน', response.data.message, "success")
                fetchData();
            }).catch(err => alert(err));
    }

    const changeIsConfirmed = (slug) => {
        Swal.fire({
            title: 'ต้องการยืนยันโพสต์?',
            icon: 'warning',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                updateComfirmed(slug)
            }
        })
    }

    const deleteRequire = (slug) => {
        axios.delete(`${process.env.REACT_APP_API}/admin/${slug}`)
            .then((response) => {
                Swal.fire('แจ้งเตือน', response.data.message, "success")
                fetchData();
            }).catch(err => alert(err));
    }

    const confirmDelete = (slug) => {
        Swal.fire({
            title: 'ยืนยันเพื่อลบบัญชีผู้ใช้งาน',
            icon: 'warning',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                deleteRequire(slug)
            }
        })
    }
    
    return (
        <div className="main-container-admin">
            <AdminNavbar />
            <div className="sub-main-container-admin">
            
            <Table striped="columns">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>District</th>
                        <th>Area</th>
                        <th>Information</th>
                        <th>Status</th>
                        <th>Button</th>
                    </tr>
                </thead>
                {formposts.length > 0 ? (
                    formposts.map((formpost, index) => (
                        <tbody>
                            <tr className="table-row-body" key={index}>
                                <td>{index+1}</td>
                                <td>{formpost.district}</td>
                                <td>{formpost.area}</td>
                                <td>{formpost.information}</td>
                                <td>{formpost.status}</td>
                                <button onClick={() => changeIsConfirmed(formpost.slug)} className="button-accept">accept</button>
                                <button onClick={() => confirmDelete(formpost.slug)} className="button-delete">delete</button>
                            </tr>
                            
                        </tbody>
                    ))
                    
                ) : (
                    <p>No data available</p>
                )}
                
            </Table>
            </div>
            
        </div >
        
    );
}