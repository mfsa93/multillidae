import Image from 'next/image'
const StartPageFormCard = ({ children, title }: any) => {
  return (
    <div className="flex h-screen w-screen flex-wrap items-center justify-center">
      <div className="width-md lg:2/6 w-5/6 sm:w-4/6 md:w-3/6 xl:w-2/6 max-w-[388px]">
        <div className="relative m-auto mb-2 h-[73px] w-[51px] text-center">
          <Image
            src="/images/logo.png"
            width="73px"
            height="51px"
            className="-rotate-90"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="mb-4 w-[100%] text-center">
          <h1 className="text-center text-3xl font-bold">{title}</h1>
        </div>
        <div className="self-center justify-self-center overflow-hidden rounded border bg-white py-10 px-5">
          <div className="px-6 pt-4 pb-2">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default StartPageFormCard
