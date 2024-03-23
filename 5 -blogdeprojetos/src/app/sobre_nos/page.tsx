import { createClient } from '@/prismicio'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'


async function page() {
    const client = createClient()
    const page = await client.getSingle("sobre_nos")
    console.log(page.data)
    return page.data
}

export default async function Home() {
    const pg = await page()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="items-center font-mono text-sm lg:flex">
                <h1 className="font-bold mb-10 text-xl fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    {pg.sobre_nos} 
                     <code className="font-mono"></code>
                </h1>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            </div>
            </div>
                <div className="items-center font-mono text-lg flex flex-col lg:flex">
                    <div className='mb-10 text-lg m-1 max-w-[60ch] text-center text-justify font-bold'>
                    <PrismicRichText field={pg.descricao} />
                    </div>
                </div>
                <div className="items-center font-mono text-lg flex flex-col lg:flex">
                    <div className='mb-10 text-lg m-1 max-w-[60ch] text-center text-justify font-bold'>
                    <PrismicRichText field={pg.descricao2} />
                    </div>
                </div>
                <div className="items-center font-mono text-lg flex flex-col lg:flex">
                    <div className='mb-10 text-lg m-1 max-w-[60ch] text-center text-justify font-bold'>
                    <PrismicRichText field={pg.descricao3} />
                    </div>
                </div>
            <div className="w-80 items-center font-mono text-lg flex flex-col lg:flex">
                <div className='border border-20 rounded-lg mb-5'>
                    <PrismicNextImage field={pg.imagem_turistio} />
                </div>
            </div>
            <div className="items-center font-mono text-lg flex flex-col lg:flex">
                    <div className='mb-10 text-lg m-1 max-w-[60ch] text-center text-justify font-bold'>
                    <PrismicRichText field={pg.descricao4} />
                    </div>
                </div>
                <div className="items-center font-mono text-lg flex flex-col lg:flex">
                    <div className='mb-10 text-lg m-1 max-w-[60ch] text-center text-justify font-bold'>
                    <PrismicRichText field={pg.descricao5} />
                    </div>
                </div>
                <div className="items-center font-mono text-lg flex flex-col lg:flex">
                    <div className='mb-10 text-lg m-1 max-w-[60ch] text-center text-justify font-bold'>
                    <PrismicRichText field={pg.descricao6} />
                    </div>
                </div>
                <div className="mb-20 grid text-center lg:max-w-4xl lg:">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Link href={"/home"}>
          <h2 className={`mb-1 text-3xl font-bold`}>
            <span className="inline-block transition-transform group-hover:translate-y-[-10px] motion-reduce:transform">
            <>{pg.inicio}</>{' '}
            </span>
          </h2>
          </Link>
        </a>
      </div>
        </main>
    )
}