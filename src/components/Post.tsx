import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

import styles from "./Post.module.css"
// estado = variaveis que eu quero que o componente monitore. useState é o que monitora

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
    
}

interface PostProps {
    author: Author;
    content: string;
    publishedAt: Date;
}

export function Post({author, publishedAt, content}:PostProps) {
   const [comments, setComments] = useState([ 
    'Post muito bacana hein'
    ]) // comments é a variavel, e setcoments é a função que vai alterar a variavel e avisar ao react
   
    const [newCommentText, setnewCommentText] = useState('')
   
    const publishedDateFormatted = format( publishedAt,"d 'de' LLLL 'as' HH:mm'h' ", {locale: ptBR}) // Essa data foi formatada utilizando a documentação da biblioteca date-fns

   const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, 
    {locale: ptBR,
    addSuffix: true
})

    function handleCreateNewComment (){
        event.preventDefault() //Função que retira a necessidade de ser redirecionado para outra pagina

        console.log()

        setComments([...comments, newCommentText]) // "...coments" copia os valores da variavel "comments" naquele momento
        setnewCommentText('');
        }

    function handleNewCommentChange(){
        event.target.setCustomValidity('') // Avisando que não tem mais erro
        setnewCommentText(event.target.value); //pegando os dados digitados e colocando no comentario

    }

    function handleNewCommentInvalid(){
       event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function deleteComment(commentToDelete){
        // Imutabilidade- No react a gente nunca altera diretamente um estado, a gente cria um novo e compara com o antigo
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete
        }) // Filtrando para manter na lista apenas os comentarios que sejam diferentes do commentToDelete, que significa a mesma coisa que deleta-lo
        // Criando uma nova lista para entrar dentro do setComments
        setComments(commentsWithoutDeletedOne);
        

    }

    const isNewCommentEmpty = newCommentText.length == 0 // Boas praticas de código deixando o clean code

    return (
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}  /> {/* Colocando os atributos do objeto "props" na interface */}
                    

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
                </time>
            </header>

        <div className={styles.content}>
           {content.map(line =>{
            if (line.type == 'paragraph') {
                return <p key={line.content}>{line.content}</p>; // Só se coloca a key no primeiro elemento do retorno de um map()
            } else if (line.type == 'link'){
                return <p key={line.content}><a href='#'>{line.content}</a></p>;
            }
           })}
        </div>
        
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe o seu feedback</strong>

            <textarea
            name="comment" 
            placeholder="Deixe o seu comentario"
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required /> {/*monitorando novos conteudos inseridos na text area*/}
            

            <footer>
                <button disabled={isNewCommentEmpty} type="submit">
                    Publicar
                </button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {comments.map(comment =>{
                return <Comment onDeleteComment={deleteComment} key={comment} content={comment}/> // key é o conceito de chave primária que já estamos alinhadios
            })}

        </div>
        </article>
        
    )
}