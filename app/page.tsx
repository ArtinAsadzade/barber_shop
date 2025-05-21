import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Clock, Award, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div className=" absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="آرایشگاه مردانه"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-2xl animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              آرایشگاه مردانه <span className="text-primary">مهران</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-8">
              با بیش از ۱۰ سال تجربه در ارائه بهترین خدمات آرایشی و پیرایشی مردانه با جدیدترین متدهای روز دنیا
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="bg-background/10 backdrop-blur-sm hover:bg-background/20" asChild>
                <Link href="/services">مشاهده خدمات</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-3xl font-bold mb-4">چرا آرایشگاه مهران را انتخاب کنید؟</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">ما به ارائه خدمات با کیفیت و منحصر به فرد افتخار می‌کنیم</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Scissors className="h-10 w-10 text-primary" />,
                title: "آرایشگران حرفه‌ای",
                description: "تیم ما از آرایشگران با تجربه و ماهر تشکیل شده که با جدیدترین روش‌های آرایشی آشنا هستند.",
              },
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "ساعات کاری مناسب",
                description: "ساعات کاری ما طوری تنظیم شده که بتوانید در زمان‌های مختلف به ما مراجعه کنید.",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "کیفیت بالا",
                description: "ما از بهترین محصولات و ابزارها برای ارائه خدمات با کیفیت استفاده می‌کنیم.",
              },
              {
                icon: <MapPin className="h-10 w-10 text-primary" />,
                title: "موقعیت مناسب",
                description: "آرایشگاه ما در مرکز شهر و با دسترسی آسان به وسایل نقلیه عمومی قرار دارد.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-md animate-fade-up opacity-0" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="mx-auto mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-3xl font-bold mb-4">خدمات ما</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">مجموعه‌ای از خدمات حرفه‌ای برای آقایان با بهترین کیفیت</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "اصلاح مو",
                image: "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "کوتاهی مو با جدیدترین مدل‌های روز و متناسب با چهره شما",
              },
              {
                title: "اصلاح ریش",
                image: "https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "فرم‌دهی و اصلاح ریش با دقت بالا و سبک‌های متنوع",
              },
              {
                title: "رنگ مو",
                image: "https://images.pexels.com/photos/3998417/pexels-photo-3998417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "رنگ مو با بهترین متریال‌ها و طیف رنگی متنوع",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-md animate-fade-up opacity-0"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="relative h-64">
                  <Image src={service.image} alt={service.title} fill className="object-cover transition-transform hover:scale-105 duration-500" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/services">اطلاعات بیشتر</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services">مشاهده همه خدمات</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-secondary">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-3xl font-bold mb-4">نظرات مشتریان ما</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">آنچه مشتریان ما درباره خدمات ما می‌گویند</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "علی محمدی",
                quote: "من بیش از ۳ سال است که مشتری این آرایشگاه هستم و از کیفیت خدمات آن‌ها بسیار راضی هستم. آرایشگران حرفه‌ای و با اخلاق هستند.",
                role: "مشتری دائمی",
              },
              {
                name: "محمد علیزاده",
                quote: "بهترین آرایشگاه مردانه ای که تا به حال رفته‌ام. همیشه با مدل‌های جدید و مطابق سلیقه‌ام از آرایشگاه بیرون می‌آیم.",
                role: "مشتری جدید",
              },
              {
                name: "سعید رضایی",
                quote: "محیط تمیز و مرتب، برخورد خوب و حرفه‌ای، و مهمتر از همه کیفیت عالی خدمات. قطعاً به دوستانم پیشنهاد می‌کنم.",
                role: "مشتری ۲ ساله",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md animate-fade-up opacity-0" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="ml-4 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="bg-accent rounded-2xl p-8 sm:p-16 text-center animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-3xl font-bold mb-4">آماده تجربه یک اصلاح متفاوت هستید؟</h2>
            <p className="text-accent-foreground max-w-2xl mx-auto mb-8">همین امروز نوبت خود را رزرو کنید و از خدمات حرفه‌ای ما بهره‌مند شوید.</p>
            <Button size="lg" className="px-8" asChild>
              <Link href="/contact">رزرو نوبت</Link>
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
