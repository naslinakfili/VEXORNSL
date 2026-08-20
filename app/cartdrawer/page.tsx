import Header from "./header";
import Footer from "./footer"
function CartDrawer() {
  return (
    <div className="flex w-full justify-end">
      <aside className="max-w-[440px] w-full md:bg-surface bg-black py-8 px-6">
        <Header />
        <Footer />
      </aside>
    </div>
  );
}

export default CartDrawer;
