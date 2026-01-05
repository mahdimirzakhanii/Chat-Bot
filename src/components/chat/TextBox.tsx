"use client";
import { useEffect, useRef, useState } from "react";
import { IoArrowUp } from "react-icons/io5";
import axios from "axios";

const TextBox = () => {
  const text1 = `ریکت (React یا React.js) یک **کتابخانه جاوااسکریپت (JavaScript library)** متن‌باز و رایگان است که توسط فیس‌بوک توسعه یافته و نگهداری می‌شود. هدف اصلی آن **ساخت رابط‌های کاربری (User Interfaces - UI) تعاملی و پویا برای وب اپلیکیشن‌ها** است.

 به زبان ساده، React ابزاری است که به توسعه‌دهندگان کمک می‌کند تا بخش‌های بصری یک وب‌سایت یا اپلیکیشن (مانند دکمه‌ها، فرم‌ها، منوها و هر چیزی که کاربر می‌بیند و با آن تعامل دارد) را به صورت کارآمد، سازمان‌یافته و با عملکرد بالا بسازند.

 ### ویژگی‌های کلیدی و مفاهیم اصلی React:

 1. **کامپوننت‌محور (Component-Based):**
 * React به شما اجازه می‌دهد تا رابط کاربری را به قطعات کوچک، مستقل و قابل استفاده مجدد به نام **کامپوننت** تقسیم کنید.
 * تصور کنید در حال ساخت یک خانه با لگو هستید؛ هر قطعه لگو یک کامپوننت است (مثل یک دکمه، یک نوار ناوبری، یا یک کارت محصول). شما این قطعات را کنار هم می‌گذارید تا کل خانه (اپلیکیشن) را بسازید.
 * این رویکرد توسعه را ماژولارتر و نگهداری کد را آسان‌تر می‌کند.

 2. **Virtual DOM (دامین مجازی):**
 * React برای بهینه‌سازی عملکرد، از یک نسخه سبک و مجازی از DOM مرورگر (Document Object Model - ساختار درختی HTML) استفاده می‌کند.
 * وقتی داده‌ای تغییر می‌کند، React ابتدا Virtual DOM را به‌روز می‌کند و سپس تفاوت‌های بین Virtual DOM جدید و قبلی را محاسبه می‌کند.
 * در نهایت، فقط تغییرات لازم را به DOM واقعی اعمال می‌کند. این فرآیند باعث می‌شود به‌روزرسانی‌های رابط کاربری بسیار سریع‌تر و کارآمدتر باشند.

 3. **اعلانی (Declarative):**
 * در React، شما به جای اینکه "چگونه" رابط کاربری را تغییر دهید، "چه" می‌خواهید که رابط کاربری در یک وضعیت خاص به نظر برسد را توصیف می‌کنید.
 * برای مثال، به جای اینکه بگویید: "دکمه را سبز کن، سپس متن آن را به 'کلیک شد' تغییر بده"، می‌گویید: "وقتی کاربر روی دکمه کلیک کرد، دکمه باید سبز و متن آن 'کلیک شد' باشد." React خودش بقیه کارها را مدیریت می‌کند. این باعث می‌شود کد قابل پیش‌بینی‌تر و اشکال‌زدایی آن راحت‌تر باشد.

 4. **JSX (JavaScript XML):**
 * React از JSX استفاده می‌کند که یک فرمت نحوی (syntax extension) برای جاوااسکریپت است.
 * JSX به شما اجازه می‌دهد تا کد HTML مانند را مستقیماً درون فایل‌های جاوااسکریپت بنویسید. این کار ترکیب منطق (JavaScript) و ظاهر (UI) را در یک مکان، شهودی‌تر می‌کند.

 ### چرا React محبوب است؟

 * **کارایی بالا:** به لطف Virtual DOM.
 * **توسعه‌پذیری و نگهداری آسان:** به دلیل معماری کامپوننت‌محور.
 * **جامعه بزرگ و پشتیبانی قوی:** منابع آموزشی فراوان، ابزارها و کتابخانه‌های جانبی گسترده.
 * **یادگیری نسبتاً آسان:** (برای کسانی که با جاوااسکریپت آشنایی دارند).
 * **قابلیت استفاده مجدد کد:** کامپوننت‌ها به شما امکان می‌دهند کد را یک بار بنویسید و چندین بار استفاده کنید.

 ### React برای چه چیزهایی استفاده می‌شود؟

 * **وب اپلیکیشن‌های تک‌صفحه‌ای (Single-Page Applications - SPAs):** جایی که کل اپلیکیشن در یک صفحه بارگذاری می‌شود و محتوا بدون رفرش کامل صفحه، به‌روزرسانی می‌شود (مانند Gmail، Facebook).
 * **داشبوردها و پنل‌های مدیریتی:** به دلیل ماهیت تعاملی و نیاز به به‌روزرسانی‌های زنده.
 * **وب‌سایت‌های پویا:** که نیاز به تعاملات پیچیده با کاربر دارند.
 * **توسعه اپلیکیشن‌های موبایل (با React Native):** React Native به شما اجازه می‌دهد با استفاده از دانش React، اپلیکیشن‌های بومی برای iOS و Android بسازید.

   به طور خلاصه، React ابزاری قدرتمند و محبوب برای ساخت رابط‌های کاربری مدرن، تعاملی و کارآمد برای وب و موبایل است که به توسعه‌دهندگان کمک می‌کند برنامه‌های پیچیده را به روشی سازمان‌یافته و با عملکرد بالا بسازند.`;
  const refTextBox = useRef(null);
  const [text, setText] = useState("");
  const [resData, setResData] = useState<string>(text1);

  useEffect(() => {
    if (refTextBox.current) {
      refTextBox.current.style.height = "auto";
      refTextBox.current.style.height = refTextBox.current.scrollHeight + "px";
    }
  }, [text]);

  const handleDataChat = async () => {
    const formData = {
      message: text,
    };
    console.log(formData);
    try {
      const res = await axios.post("/api/chat", formData);
      console.log(res?.data);
      setResData(res?.data?.candidates[0]?.content?.parts[0]?.text);
    } catch (error) {
      console.log(error);
    }
  };

  const parts = resData.split(/(\*\*.*?\*\*)/g);

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-1/2">
      <div className="w-full flex items-end pb-3 justify-center gap-2 border-b border-b-gray-600">
        <textarea
          ref={refTextBox}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 resize-none overflow-hidden max-h-52  outline-none"
          placeholder="Ask me anything"
        />
        <div
          onClick={handleDataChat}
          className="flex items-center cursor-pointer justify-center w-10 h-9 text-xl bg-blue-500 rounded-full"
        >
          <IoArrowUp />
        </div>
      </div>
      <p className="leading-10 text-end">
        {parts.map((part, i) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <span
              key={i}
              className="block mt-4 font-bold text-xl text-gray-100"
            >
              {part.replace(/\*\*/g, "")}
            </span>
          ) : (
            <span key={i} className="text-gray-300 text-lg">
              {part}
            </span>
          )
        )}
      </p>
    </div>
  );
};

export default TextBox;
