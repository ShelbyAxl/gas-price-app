import Link from "next/link"

function notFound() {
  return (
    <div className='h-[calc(100vh-9rem)] flex items-center flex-col justify-center gap-y-3'>
      <h1 className='font-bold text-8xl'>404</h1>
      <p className='text-2xl'>The page you are looking for doesn´t exist</p>
      <Link href="/" className="bg-slate-200 text-black py-2 px-3 mt-4 rounded-md hover:bg-slate-100 transition-all"> Back to Home </Link>
    </div>
  )
}

export default notFound