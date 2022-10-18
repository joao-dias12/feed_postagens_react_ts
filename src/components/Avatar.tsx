import styles from './Avatar.module.css'

interface AvatarProps {
    hasBorder?: boolean;
    src: string;
    alt?: string;
}
export function Avatar({hasBorder = true, src, alt }: AvatarProps ) { // Nesse caso estamos definindo valores default tambem
    return (
        <img 
        className={ hasBorder ? styles.avatarWithBorder : styles.avatar} // se props.hasBorder for true, faça isso(styles.avatarWithBorder) se falso, faça aquilo(styles.avatar) 
        src={src} 
        alt={alt}
        />
    )
}