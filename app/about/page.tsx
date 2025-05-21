import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ThumbsUp, Heart, Star } from "lucide-react";

export const metadata = {
  title: "درباره آرایشگاه مردانه مهران",
  description: "درباره آرایشگاه مردانه مهران و تیم ما",
};

const stats = [
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    value: "+۱۰",
    label: "سال تجربه",
  },
  {
    icon: <ThumbsUp className="h-6 w-6 text-primary" />,
    value: "+۵۰۰۰",
    label: "مشتری راضی",
  },
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    value: "+۱۵",
    label: "جوایز کیفیت",
  },
  {
    icon: <Star className="h-6 w-6 text-primary" />,
    value: "+۲۰",
    label: "آرایشگر حرفه‌ای",
  },
];

const team = [
  {
    name: "محمد رضایی",
    role: "مدیر و سرآرایشگر",
    image: "https://images.pexels.com/photos/2076930/pexels-photo-2076930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "محمد با بیش از ۱۵ سال تجربه در صنعت آرایشگری، مهارت فوق‌العاده‌ای در اصلاح مو و ریش دارد. او همیشه به دنبال آخرین ترندهای آرایشی مردانه است.",
  },
  {
    name: "علی کریمی",
    role: "متخصص کات و استایل",
    image: "https://images.pexels.com/photos/2446861/pexels-photo-2446861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "علی در زمینه کات‌های خلاقانه و منحصر به فرد تخصص دارد. او توانایی فوق‌العاده‌ای در متناسب کردن مدل مو با چهره مشتریان دارد.",
  },
  {
    name: "سعید احمدی",
    role: "متخصص رنگ مو",
    image: "https://images.pexels.com/photos/2506272/pexels-photo-2506272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "سعید در زمینه رنگ مو استاد است. او با شناخت دقیق رنگ‌ها و ترکیب آن‌ها می‌تواند بهترین انتخاب را برای هر فرد پیشنهاد دهد.",
  },
  {
    name: "حسین محمدی",
    role: "متخصص اصلاح ریش",
    image: "https://images.pexels.com/photos/2946828/pexels-photo-2946828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "حسین با تخصص در اصلاح ریش و سبیل، می‌تواند هر مدلی را با دقت بالا اجرا کند. او به خاطر صبر و حوصله‌اش در کار محبوب مشتریان است.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-6">درباره آرایشگاه مردانه مهران</h1>
            <p className="text-xl text-muted-foreground mb-4">
              ما با بیش از یک دهه تجربه در ارائه خدمات آرایشی مردانه با کیفیت و حرفه‌ای، همواره تلاش کرده‌ایم تا بهترین تجربه را برای مشتریان خود
              فراهم کنیم.
            </p>
            <p className="text-muted-foreground mb-6">
              آرایشگاه مردانه مهران در سال ۱۳۹۰ تاسیس شد و از آن زمان تاکنون با استفاده از بهترین محصولات و ابزارهای روز دنیا، خدمات متنوعی را به
              آقایان ارائه می‌دهد. تیم ما متشکل از آرایشگران با تجربه و حرفه‌ای است که همواره به دنبال به روز کردن دانش و مهارت‌های خود هستند.
            </p>
            <p className="text-muted-foreground">
              ما به ایجاد فضایی دوستانه و راحت برای مشتریان اهمیت می‌دهیم و معتقدیم که هر فرد باید خدمات شخصی‌سازی شده و متناسب با سلیقه و نیاز خود
              دریافت کند.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="آرایشگاه مردانه مهران"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-none shadow-md text-center animate-fade-up opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">{stat.icon}</div>
                <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Values */}
        <div className="mb-20 animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-3xl font-bold mb-8 text-center">ارزش‌های ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "کیفیت",
                description: "ما همواره به دنبال ارائه بهترین کیفیت در خدمات خود هستیم و از بهترین محصولات و ابزارها استفاده می‌کنیم.",
              },
              {
                title: "احترام",
                description: "ما به تمامی مشتریان خود احترام می‌گذاریم و تلاش می‌کنیم تا فضایی راحت و دوستانه برای آن‌ها فراهم کنیم.",
              },
              {
                title: "نوآوری",
                description: "ما همواره به دنبال یادگیری و استفاده از جدیدترین روش‌ها و ترندهای روز دنیا در آرایشگری مردانه هستیم.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-none shadow-md animate-fade-up opacity-0" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">{value.title}</h3>
                  <p className="text-muted-foreground text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
          <h2 className="text-3xl font-bold mb-8 text-center">تیم ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-none shadow-md overflow-hidden animate-fade-up opacity-0" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
