import Footer from "./footer";
import Header from "./header";

export default function Dashbaord() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">
      {/* Replace with your content */}
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="py-4">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
          {/* /End replace */}
        </div>
      </div>
      {/* /End replace */}
    </main>
    <Footer />
</div>
  )
}
