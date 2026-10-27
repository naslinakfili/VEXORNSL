import Header from "./header";
import Footer from "./footer";

export default function CartDrawer() {
  return (
    <div className="flex w-full justify-end">
      <aside className="max-w-110 w-full md:dark:bg-surface py-8 px-6">
        {/* Header dan Footer sekarang otomatis membaca data bersama via useCart */}
        <Header />
        <Footer />
      </aside>
    </div>
  );
}
