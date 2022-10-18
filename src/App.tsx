// JSX = JavaScrip + XML
import { Header } from './components/Header';
import { Post }  from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'

// author: { avatar_url: "", name : "", role ""}
// publishedAt: Date
// content: Str

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQG0V_M9h40K0A/profile-displayphoto-shrink_800_800/0/1647860850052?e=1671062400&v=beta&t=ZmeCM9T4Z3PZWnvp18Ph7YVqKFN1bYMvRvSdU-vsh-0',
      name: "João Dias",
      role: 'Full Stack Junior'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content : 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-10-10 20:00:00')
  },

  {
    id: 2,
    author:{
      avatarUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQE40-h6EJ9FyA/profile-displayphoto-shrink_400_400/0/1594823992253?e=1671667200&v=beta&t=dQ5SXvbShXfp3ww7uEw9TBSGsptcX_7uRFBGaKnNFu0',
      name: "Giulia Folena",
      role: 'Engenheira Ambiental'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content : 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-10-15 20:00:00')
  }
];
export function App() {
  
  return (
    <div>

    <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
         {posts.map(post => {
          return (
            <Post
            key={post.id}
            author= {post.author}
            content = {post.content}
            publishedAt={post.publishedAt}

            />
          )
         })}
        </main>
      </div>
     
    </div>
  )
}
