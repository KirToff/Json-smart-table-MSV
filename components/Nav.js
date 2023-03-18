import Link from 'next/link';


export default function Nav(){
  return <nav><ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/static-users">Static Users</Link></li>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/">Home</Link></li>
  </ul>
  <hr/>
  </nav>;
}