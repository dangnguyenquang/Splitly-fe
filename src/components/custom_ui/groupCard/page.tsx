import Image from "next/image"

function GroupCard() {
  return (
    <div className='bg-muted/50 aspect-video rounded-xl overflow-clip'>
      <Image
        src='https://placehold.net/600x400.png'
        alt='groupImage'
        width={600}
        height={400}
      />
      <div className='p-2 rounded-xl flex items-center gap-2'>
        <Image
          className='rounded-xl'
          src={"https://placehold.net/shape-400x400.png"}
          alt='icon'
          width={32}
          height={32}
        />
        <Image
          className='rounded-xl'
          src={"https://placehold.net/shape-400x400.png"}
          alt='icon'
          width={32}
          height={32}
        />
        <Image
          className='rounded-xl'
          src={"https://placehold.net/shape-400x400.png"}
          alt='icon'
          width={32}
          height={32}
        />
        <Image
          className='rounded-xl'
          src={"https://placehold.net/shape-400x400.png"}
          alt='icon'
          width={32}
          height={32}
        />
      </div>
    </div>
  )
}

export default GroupCard
