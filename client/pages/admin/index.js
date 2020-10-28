import Layout from '../../components/Layout';
import withAdmin from '../withAdmin';
import Link from 'next/Link'
const Admin = ({ user }) => <Layout>
    {/* {JSON.stringify(user)} */}
    <h1>Admin Dashboard</h1>
    <br/>
    <div className='row'>
        <div className='col-md-4'>
            <ul className='nav flex-column'>
                <li className='nav-item'>
                        <Link href="/admin/category/create">
                            <a className='nav-link ' style={{color:'white',background:'orange',borderRadius:'10px',textAlign:'center'}}>Create Category</a>
                        </Link>
                </li>
            </ul>

        </div>
        <div className='col-md-8'></div>
    </div>
    
    
    
    </Layout>;

export default withAdmin(Admin);
