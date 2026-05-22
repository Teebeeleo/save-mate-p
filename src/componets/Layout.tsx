import Header from "./Header";
import BottomNav from "./BottomNav";
type LayoutProps = {
  children: React.ReactNode;
};
function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <div>
        <Header />
        <main className="mx-4 md:mx-10 md:mt-6">{children}</main>
        <BottomNav />
      </div>
    </>
  );
}

export default MainLayout;
