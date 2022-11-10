import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className='navbar'>
            <h1>Preference</h1>
            <nav className='nav'>
                {JSON.parse(localStorage.getItem('qwert')).name!=='admin' && (
                    <>
                        <strong><Link className="nav-link " to='/Home'>Home</Link></strong>
                        <strong><li className="nav-link">Hi,{localStorage.getItem('qwert') && JSON.parse(localStorage.getItem('qwert')).name}</li></strong>
                    </>
                )}
                {JSON.parse(localStorage.getItem('qwert')).name==='admin' && (
                    <strong><Link className="nav-link " to='/admin'>Home</Link></strong>
                )}
                <button className='btn btn-danger' onClick={(e) => {
                    localStorage.clear()
                    window.location.href = '/'
                }}>Login/Logout</button>
            </nav>
        </div>
    );
}