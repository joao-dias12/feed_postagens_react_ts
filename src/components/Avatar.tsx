import { ImgHTMLAttributes } from 'react' // Importando essas tag, eu consigo garantir que as propiedades de Image que vem de gerança estão sendo consideradas
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{  // Aqui está sendo atribuida a extensão dos atributos para extensao
    hasBorder?: boolean;
}
export function Avatar({hasBorder = true, ...props}: AvatarProps ) { // Nesse caso estamos definindo valores default tambem
    return (
        <img 
        className={ hasBorder ? styles.avatarWithBorder : styles.avatar} // se props.hasBorder for true, faça isso(styles.avatarWithBorder) se falso, faça aquilo(styles.avatar) 
       {...props} // Garantindo que os atributos herdados de ser uma imagem html, possam ser utilizados

        />
    )
}