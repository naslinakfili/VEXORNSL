import Header from "./header";
function CartDrawer() {
  return (
    <div className="flex w-full justify-end">
      <aside className="max-w-[440px] w-full bg-surface">
        <Header />
      </aside>
    </div>
  );
}

export default CartDrawer;
