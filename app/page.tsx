import Images from '@/components/Images'
import Todos from '@/components/Todos'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <h1>Hi Developers</h1>
      <p>{`Let's test the page load time of Nextjs.`}</p>
      <Todos />
      <Images />
    </div>
    </main>
  )
}
