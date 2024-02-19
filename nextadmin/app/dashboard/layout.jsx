import Navbar from "../ui/dashboard/navbar/page"
import Sidebar from "../ui/dashboard/sidebar/page"
import Footer from "../ui/dashboard/footer/footer"
import styles from '../ui/dashboard/dashboard.module.css'

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <Sidebar />
        </div>
        <div className= {styles.content}>
            <Navbar />
            {children}
            <Footer />
        </div>
    </div>
  )
}

export default Layout