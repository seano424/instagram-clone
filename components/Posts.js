import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../firebase'
import Post from './Post'
// const posts = [
//   {
//     id: '123',
//     username: 'sea.oreilly',
//     userImg:
//       'https://scontent.fmid3-1.fna.fbcdn.net/v/t1.6435-9/241495548_10201717680202413_1665311185021220494_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pcKpvkRj8NEAX-Hz8fz&_nc_ht=scontent.fmid3-1.fna&oh=500640eb74de81ef996df5674e59ce9c&oe=619E8E71',
//     img: 'https://scontent.fmid3-1.fna.fbcdn.net/v/t1.6435-9/241495548_10201717680202413_1665311185021220494_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pcKpvkRj8NEAX-Hz8fz&_nc_ht=scontent.fmid3-1.fna&oh=500640eb74de81ef996df5674e59ce9c&oe=619E8E71',
//     caption: 'SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm!',
//   },
//   {
//     id: '321',
//     username: 'sea.oreilly',
//     userImg:
//       'https://scontent.fmid3-1.fna.fbcdn.net/v/t1.6435-9/241495548_10201717680202413_1665311185021220494_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pcKpvkRj8NEAX-Hz8fz&_nc_ht=scontent.fmid3-1.fna&oh=500640eb74de81ef996df5674e59ce9c&oe=619E8E71',
//     img: 'https://scontent.fmid3-1.fna.fbcdn.net/v/t1.6435-9/241495548_10201717680202413_1665311185021220494_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pcKpvkRj8NEAX-Hz8fz&_nc_ht=scontent.fmid3-1.fna&oh=500640eb74de81ef996df5674e59ce9c&oe=619E8E71',
//     caption: 'SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm!',
//   },
// ]

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs)
        }
      ),
    [db]
  )

  console.log(posts)

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
