import { createClient } from '@/prismicio'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'


async function page() {
  const client = createClient()
  const page = await client.getSingle("homess")
  console.log(page.data)
  return page.data
}


export default async function Home() {
  const pg = await page()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="items-center font-mono text-sm lg:flex">
        <h1 className="font-bold text-xl fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {pg.titulo} 
          <code className="font-mono font-bold"></code>
        </h1>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        </div>
      </div>
      <div className='mb-10 font-bold'>
        <PrismicRichText field={pg.turis} />
      </div>
      <>{pg.viagens}</>
      <div className="items-center font-mono text-lg flex flex-col lg:flex">
        <div className='border border-20 rounded-lg mb-5'>
        <PrismicNextImage field={pg.viagem_1} />
        </div>
        <div className='mb-10 text-center text-justify text-lg m-1 max-w-[100ch] font-bold'>
        <PrismicRichText field={pg.descricao_viagem_1} />
        </div>
        <>{pg.viagem_22}</>
        <div className='border border-20 rounded-lg mb-5'>
        <PrismicNextImage field={pg.viagem_2} />
        </div>
        <div className='mb-10 text-center text-justify text-lg m-1 max-w-[100ch] font-bold'>
        <PrismicRichText field={pg.descricao_viagem_2} />
        </div>
        <>{pg.viagem_33}</>
        <div className='border border-20 rounded-lg mb-5'>
        <PrismicNextImage field={pg.viagem_3} />
        </div>
        <div className='mb-20 text-center text-justify text-lg m-1 max-w-[100ch] font-bold'>
        <PrismicRichText field={pg.descricao_viagem_3} />
        </div>
        </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      </div>
      <div className="mb-10 grid text-center lg:max-w-4xl lg:">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Link href={"/sobre_nos"}>
          <h2 className={`mb-1 text-3xl font-bold`}>
            <span className="inline-block transition-transform group-hover:translate-y-[-10px] motion-reduce:transform">
            <PrismicRichText field={pg.sobre_nos}/>{' '}
             <p className={`text-lg m-1 max-w-[60ch] text-sm opacity-50`}>
             Quer saber mais sobre a nossa empresa?
            </p>
            </span>
          </h2>
          </Link>
        </a>
      </div>
    </main>
  )
}
