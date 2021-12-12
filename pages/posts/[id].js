export async function getStaticPaths() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }))
  
    return { paths, fallback: false }
  }
  export async function getStaticProps({ params }) {
    // const id = context.params.id
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      const post = await res.json()
    
     
      return { props: { post } }
    }
function Post({ post }) {
    return (
        <ul>
          
            <li>{post.title}</li>
        
        </ul>
      )
    
  }
 

  export default Post