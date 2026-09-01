import Link from "next/link";

export default function Home() {
  return (
 <div>
  <Link href="./homepage">HOMEPAGE</Link><br />
  <Link href="./shop">SHOP</Link><br />
  <Link href="./productdescriptive/1">PRODUCT</Link><br />
  <Link href="./cartdrawer">CARTDRAWER</Link><br />
  <Link href="./checkoutshipping">CHECKOUTSHIPPING</Link>

  <div className="flex items-center flex-col">
    <p>currently under development;</p>
    <p>you can try it out on the left.</p>
  </div>
 </div>
  );
}
