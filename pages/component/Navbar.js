import Link from 'next/link'
function Contact() {
    return <div>
         <Link href="/"><li>Home</li></Link>
         <Link href="/contact"><li>Contact</li></Link>
         <Link href="about"><li>About</li></Link>
         <Link href="posts"><li>Posts</li></Link>
    </div>
  }
  
  export default Contact