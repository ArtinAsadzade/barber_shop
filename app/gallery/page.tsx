import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata = {
  title: "گالری آرایشگاه مردانه مهران",
  description: "گالری تصاویر نمونه کارهای آرایشگاه مردانه مهران",
};

// Gallery categories and images
const gallery = {
  haircuts: [
    {
      src: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "مدل موی مردانه کلاسیک",
    },
    {
      src: "https://images.pexels.com/photos/2531159/pexels-photo-2531159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "مدل موی مردانه اسپورت",
    },
    {
      src: "https://images.pexels.com/photos/3998417/pexels-photo-3998417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "مدل موی مردانه کوتاه",
    },
    {
      src: "https://images.pexels.com/photos/3992855/pexels-photo-3992855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "مدل موی فید",
    },
    {
      src: "https://images.pexels.com/photos/3998416/pexels-photo-3998416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "مدل موی بلند مردانه",
    },
    {
      src: "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "مدل موی آندرکات",
    },
  ],
  beards: [
    {
      src: "https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "مدل ریش بلند",
    },
    {
      src: "https://images.pexels.com/photos/1614254/pexels-photo-1614254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "مدل ریش کوتاه",
    },
    {
      src: "https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "مدل ریش سه روزه",
    },
    {
      src: "https://images.pexels.com/photos/1726710/pexels-photo-1726710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "مدل ریش مرتب شده",
    },
    {
      src: "https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "مدل سبیل و ریش",
    },
    {
      src: "https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "مدل ریش پر",
    },
  ],
  colors: [
    {
      src: "https://images.pexels.com/photos/1605148/pexels-photo-1605148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "رنگ موی خاکستری",
    },
    {
      src: "https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "رنگ موی پلاتینی",
    },
    {
      src: "https://images.pexels.com/photos/2531550/pexels-photo-2531550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "رنگ موی قهوه‌ای",
    },
    {
      src: "https://images.pexels.com/photos/1707817/pexels-photo-1707817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "رنگ موی مشکی",
    },
    {
      src: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "هایلایت مردانه",
    },
    {
      src: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "رنگ موی طبیعی",
    },
  ],
  special: [
    {
      src: "https://images.pexels.com/photos/2254066/pexels-photo-2254066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "استایل داماد",
    },
    {
      src: "https://images.pexels.com/photos/2026764/pexels-photo-2026764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "پدر و پسر",
    },
    {
      src: "https://images.pexels.com/photos/4005471/pexels-photo-4005471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "خدمات ویژه",
    },
    {
      src: "https://images.pexels.com/photos/3998339/pexels-photo-3998339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "مدل اسپورت",
    },
    {
      src: "https://images.pexels.com/photos/3998394/pexels-photo-3998394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "خدمات آقایان",
    },
    {
      src: "https://images.pexels.com/photos/3998350/pexels-photo-3998350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "استایل کامل",
    },
  ],
};

export default function GalleryPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-4xl font-bold mb-4">گالری نمونه کارها</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">نمونه کارهای انجام شده توسط آرایشگران حرفه‌ای ما را مشاهده کنید</p>
        </div>

        <Tabs defaultValue="haircuts" className="animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="haircuts">مدل مو</TabsTrigger>
            <TabsTrigger value="beards">ریش</TabsTrigger>
            <TabsTrigger value="colors">رنگ مو</TabsTrigger>
            <TabsTrigger value="special">خدمات ویژه</TabsTrigger>
          </TabsList>

          {Object.entries(gallery).map(([category, images]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="group relative h-72 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl animate-fade-up opacity-0"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 text-lg font-medium">{image.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
