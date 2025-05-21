import Link from "next/link";
import { Scissors } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted py-12 mt-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Scissors className="h-5 w-5" />
              <span className="font-bold text-lg">آرایشگاه مهران</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              آرایشگاه مهران با بیش از ۱۰ سال سابقه درخشان در ارائه خدمات آرایشی و پیرایشی مردانه با کیفیت و حرفه‌ای.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  خانه
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  خدمات
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  نمونه کارها
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">ساعات کاری</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex justify-between">
                <span>شنبه تا چهارشنبه:</span>
                <span>۹ صبح - ۸ شب</span>
              </li>
              <li className="flex justify-between">
                <span>پنج‌شنبه:</span>
                <span>۹ صبح - ۱۰ شب</span>
              </li>
              <li className="flex justify-between">
                <span>جمعه:</span>
                <span>۱۰ صبح - ۶ عصر</span>
              </li>
            </ul>

            <h3 className="font-bold text-lg mt-6 mb-4">تماس با ما</h3>
            <p className="text-muted-foreground">شهرقدس, شهرک فرزان,</p>
            <p className="text-muted-foreground">تلفن: 989100212166</p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© ۱۴۰۴ آرایشگاه مهران. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
