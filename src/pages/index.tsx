import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useSession, signOut, signIn } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <p>Welcome, {session.user ? session.user.email : 'unknown user'}</p>
        <button onClick={() => signOut()}>signOut</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in.</p>
        <button onClick={() => signIn()}>signIn</button>
      </div>
    );
  }
}
