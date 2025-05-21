import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Ruler, Palette, Droplet, Activity, Smile, Users, Briefcase } from "lucide-react";

export const metadata = {
  title: "خدمات آرایشگاه مردانه مهران",
  description: "لیست کامل خدمات آرایشگاه مردانه مهران",
};

const services = [
  {
    icon: <Scissors className="h-6 w-6" />,
    title: "اصلاح مو",
    description: "کوتاهی مو با جدیدترین مدل‌های روز و متناسب با چهره شما",
    prices: [
      { name: "اصلاح ساده", price: "۱۵۰,۰۰۰ تومان" },
      { name: "اصلاح مدل‌دار", price: "۲۰۰,۰۰۰ تومان" },
      { name: "اصلاح VIP", price: "۲۵۰,۰۰۰ تومان" },
    ],
    image: "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    icon: <Ruler className="h-6 w-6" />,
    title: "اصلاح ریش",
    description: "فرم‌دهی و اصلاح ریش با دقت بالا و سبک‌های متنوع",
    prices: [
      { name: "اصلاح ساده ریش", price: "۸۰,۰۰۰ تومان" },
      { name: "اصلاح فرم‌دار ریش", price: "۱۲۰,۰۰۰ تومان" },
      { name: "اصلاح و طراحی ریش", price: "۱۵۰,۰۰۰ تومان" },
    ],
    image: "https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "رنگ مو",
    description: "رنگ مو با بهترین متریال‌ها و طیف رنگی متنوع",
    prices: [
      { name: "رنگ مو ساده", price: "۳۰۰,۰۰۰ تومان" },
      { name: "رنگ مو و هایلایت", price: "۵۰۰,۰۰۰ تومان" },
      { name: "رنگ مو حرفه‌ای", price: "۶۵۰,۰۰۰ تومان" },
    ],
    image: "https://images.pexels.com/photos/3998417/pexels-photo-3998417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    icon: <Droplet className="h-6 w-6" />,
    title: "داماد",
    description: "بسته ویژه برای دامادها شامل اصلاح مو، ریش و صورت",
    prices: [
      { name: "بسته داماد استاندارد", price: "۵۰۰,۰۰۰ تومان" },
      { name: "بسته داماد VIP", price: "۸۰۰,۰۰۰ تومان" },
      { name: "بسته داماد لاکچری", price: "۱,۰۰۰,۰۰۰ تومان" },
    ],
    image: "https://images.pexels.com/photos/2254066/pexels-photo-2254066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "ماساژ سر و صورت",
    description: "ماساژ آرامش‌بخش سر و صورت با روغن‌های طبیعی",
    prices: [
      { name: "ماساژ سر کوتاه", price: "۸۰,۰۰۰ تومان" },
      { name: "ماساژ سر و صورت", price: "۱۵۰,۰۰۰ تومان" },
      { name: "ماساژ حرفه‌ای", price: "۲۰۰,۰۰۰ تومان" },
    ],
    image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    icon: <Smile className="h-6 w-6" />,
    title: "پاکسازی پوست",
    description: "پاکسازی عمیق پوست صورت و مراقبت پوستی",
    prices: [
      { name: "پاکسازی ساده", price: "۲۰۰,۰۰۰ تومان" },
      { name: "پاکسازی عمیق", price: "۳۰۰,۰۰۰ تومان" },
      { name: "پاکسازی و ماسک", price: "۴۰۰,۰۰۰ تومان" },
    ],
    image: "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "خدمات برای پدر و پسر",
    description: "بسته‌های ویژه برای پدر و پسر با تخفیف ویژه",
    prices: [
      { name: "بسته اصلاح ساده", price: "۲۵۰,۰۰۰ تومان" },
      { name: "بسته اصلاح کامل", price: "۳۵۰,۰۰۰ تومان" },
      { name: "بسته VIP", price: "۵۰۰,۰۰۰ تومان" },
    ],
    image: "https://images.pexels.com/photos/2026764/pexels-photo-2026764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "بسته‌های ماهانه",
    description: "بسته‌های ماهانه با تخفیف برای مشتریان دائمی",
    prices: [
      { name: "بسته پایه (۴ جلسه)", price: "۵۰۰,۰۰۰ تومان" },
      { name: "بسته استاندارد (۸ جلسه)", price: "۹۰۰,۰۰۰ تومان" },
      { name: "بسته VIP (۱۲ جلسه)", price: "۱,۲۰۰,۰۰۰ تومان" },
    ],
    image: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-4xl font-bold mb-4">خدمات ما</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ما طیف گسترده‌ای از خدمات آرایشی و پیرایشی مردانه را با بالاترین کیفیت ارائه می‌دهیم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-md animate-fade-up opacity-0" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-2/5 h-52 md:h-auto">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <CardContent className="w-full md:w-3/5 p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">{service.icon}</div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">قیمت‌ها:</h4>
                    <ul className="space-y-2">
                      {service.prices.map((price, priceIndex) => (
                        <li key={priceIndex} className="flex justify-between">
                          <span>{price.name}</span>
                          <span className="font-medium">{price.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
