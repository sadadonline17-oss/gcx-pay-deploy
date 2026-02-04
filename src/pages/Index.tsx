import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Shield, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <>
      <SEOHead 
        title="نظام الدفع الآمن - روابط دفع ذكية للشاليهات والشحن"
        description="أنشئ روابط دفع آمنة ومحمية للشاليهات وخدمات الشحن في دول الخليج. دعم جميع شركات الشحن الكبرى مثل أرامكس، دي إتش إل، فيديكس، سمسا والمزيد"
        image="/og-aramex.jpg"
        type="website"
      />
      <div className="min-h-screen" dir="rtl">
      {/* Hero Section - Minimized */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Q0EzQUYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4czguMDYgMTggMTggMThoMThjLTkuOTQgMC0xOC04LjA2LTE4LTE4eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-lg animate-fade-in">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">منصة موحدة لدول الخليج</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in" style={{animation: 'fade-in 0.8s ease-out'}}>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                منصة الدفع الذكية
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-semibold animate-fade-in" style={{animation: 'fade-in 0.8s ease-out 0.2s backwards'}}>
              حلول دفع متطورة وموثوقة لجميع الخدمات
            </p>
            
            <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{animation: 'fade-in 0.8s ease-out 0.4s backwards'}}>
              نقدم خدمات دفع آمنة وسريعة للشاليهات، الشحن، الخدمات الحكومية، الصحية، اللوجستية والعقود في دول الخليج
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animation: 'fade-in 0.8s ease-out 0.6s backwards'}}>
              <Link to="/services">
                <Button size="lg" className="px-8 py-6 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <span className="ml-2">ابدأ الآن</span>
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            لماذا تختار منصتنا؟
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">سريع وآمن</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                معاملات فورية مع أعلى معايير الأمان والتشفير
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">موثوق ومعتمد</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                جميع الخدمات معتمدة ومطابقة للمعايير المحلية والدولية
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">سهل الاستخدام</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                واجهة بسيطة وسهلة تدعم جميع دول الخليج بتصميم عصري
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMThTMCA4LjA2IDAgMThzOC4wNiAxOCAxOCAxOGgxOGMtOS45NCAwLTE4LTguMDYtMTgtMTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              جاهز للبدء؟
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              انضم إلى آلاف المستخدمين الذين يثقون بمنصتنا لإدارة جميع عمليات الدفع في دول الخليج
            </p>
            <Link to="/services">
              <Button size="lg" className="px-10 py-6 text-lg font-bold bg-white text-purple-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                <span className="ml-2">استكشف الخدمات</span>
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <div className="h-20" />
    </div>
    <BottomNav />
    </>
  );
};

export default Index;
