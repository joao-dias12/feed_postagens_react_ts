import styles from './Avatar.module.css'


export function Avatar({hasBorder = true, src }) { // Nesse caso estamos definindo valores default tambem
    return (
        <img 
        className={ hasBorder ? styles.avatarWithBorder : styles.avatar} // se props.hasBorder for true, faça isso(styles.avatarWithBorder) se falso, faça aquilo(styles.avatar) 
        src={src} 
        />
    )
}