export const getStaticProps = async () => {
  const res = await fetch('http://simple-books-api.glitch.me/books')
  const repo = await res.json()
  return { props: { repo } }
}
 
export default function Page({ repo }) {
  console.log(repo)
  return <div> 1233 123123 </div>
}