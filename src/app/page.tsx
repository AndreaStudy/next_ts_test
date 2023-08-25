import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, WEB!
      <br/>
      <Image src="/next.svg" width={100} height={100} alt="흠" />
    </>
  )
}
