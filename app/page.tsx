import Link from "next/link";

export default function Home() {
  return (
 <div>
  <Link href="./homepage">HOMEPAGE</Link><br />
  <Link href="./shop">SHOP</Link><br />
  <Link href="./productdescriptive">PRODUCT</Link><br />
  <Link href="./cartdrawer">CARTDRAWER</Link>
 </div>
  );
}
