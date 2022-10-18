import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=40" alt="" 
            />
            
            <div  className={styles.profile}>
                <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQG0V_M9h40K0A/profile-displayphoto-shrink_800_800/0/1647860850052?e=1671062400&v=beta&t=ZmeCM9T4Z3PZWnvp18Ph7YVqKFN1bYMvRvSdU-vsh-0"/>
                <strong> Diego Fernandes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}