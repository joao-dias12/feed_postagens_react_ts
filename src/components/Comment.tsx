import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment(props){
    
    const [LikeCount, setLikeCount] = useState(0);{
 // like count inicial é igual a zero
    }
    
    function handleLikeComment(){
        setLikeCount((state)=>{
            return state +1
        })  
            // essa função vai adicionar 1 toda vez que ela for acionada ao likecounte nesse novo modelo , é o mais adequado para mudar valores que dependendem do valor dele
    }
    
    function handleDeleteComment(){
        
        props.onDeleteComment(props.content)
    }



    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://media-exp1.licdn.com/dms/image/C4D03AQG0V_M9h40K0A/profile-displayphoto-shrink_800_800/0/1647860850052?e=1671062400&v=beta&t=ZmeCM9T4Z3PZWnvp18Ph7YVqKFN1bYMvRvSdU-vsh-0" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> João Dias</strong>
                            <time title="14 de outubro de 2022" dateTime="14/10/2022 as 13h"> Cerca de 2h Atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{props.content}</p>

                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{LikeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
    
}