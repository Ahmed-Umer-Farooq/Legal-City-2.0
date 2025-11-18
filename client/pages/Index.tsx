import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LawyerProfile from "@/components/LawyerProfile";
import MessageForm from "@/components/MessageForm";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 w-full px-4 md:px-36 py-6">
        <h1 className="text-[26px] font-medium text-[#333] mb-6">
          Message: <span>Darlene Robertson</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-6">
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <LawyerProfile />
          </div>

          <div className="flex-1 lg:max-w-[756px]">
            <MessageForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
