import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ThankYouPage: React.FC = () => {
  const location = useLocation();
  const orderId = location.state?.orderId || "ORD-0000";

  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center text-center py-16 px-4">
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold mb-4">تم تأكيد طلبك!</h1>
        <p className="text-lg text-gray-600 mb-6">
          رقم الطلب: <span className="font-bold">{orderId}</span>
        </p>

        <Link
          to="/"
          className="inline-block bg-gold hover:bg-gold-dark text-black font-medium px-6 py-3 rounded-md transition-colors"
        >
          العودة للرئيسية
        </Link>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYouPage;
