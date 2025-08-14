"use client"

import ScrollToTopButton from "@/components/custom_ui/scrollToTop/ScrollToTopButton"
import Aos from "aos"
import "aos/dist/aos.css"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <main className='relative text-gray-800 font-sans select-none'>
      <section className='relative flex flex-col justify-center items-center min-h-screen px-4 text-center overflow-hidden py-32 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white'>
        <div className='absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2' />
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-pulse translate-x-1/2 translate-y-1/2' />

        <div className='z-10' data-aos='fade-up'>
          <h1 className='text-5xl font-bold mb-6'>
            Quản lý tài chính nhóm dễ dàng với Splitly
          </h1>
          <p className='text-lg mb-6'>
            Ứng dụng hỗ trợ nhóm bạn chia sẻ, phân bổ và theo dõi chi tiêu minh bạch.
          </p>
          <Link
            href='login'
            className='inline-block px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100'
          >
            Bắt đầu ngay
          </Link>
        </div>
      </section>

      <section
        id='about'
        className='px-6 py-24 min-h-[650px] flex items-center justify-center bg-white'
      >
        <div className='max-w-3xl text-center' data-aos='fade-up'>
          <h2 className='text-3xl font-bold mb-4'>Về chúng tôi</h2>
          <p className='text-gray-600'>
            Splitly mang đến giải pháp toàn diện cho việc quản lý tài chính trong nhóm. Từ
            việc theo dõi chi tiêu, lập báo cáo, đến nhắc nhở thanh toán, mọi thứ đều trở
            nên dễ dàng và minh bạch.
          </p>
        </div>
      </section>

      <section
        id='features'
        className='px-6 py-24  flex justify-center items-center min-h-[650px] bg-emerald-50'
      >
        <div className='max-w-5xl mx-auto text-center' data-aos='fade-up'>
          <h2 className='text-3xl font-bold mb-10'>Tính năng nổi bật</h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                title: "Chia sẻ chi phí",
                img: "https://placehold.net/400x400.png",
              },
              {
                title: "Báo cáo tài chính",
                img: "https://placehold.net/400x400.png",
              },
              {
                title: "Phân quyền thành viên",
                img: "https://placehold.net/400x400.png",
              },
              {
                title: "Tích hợp ngân hàng",
                img: "https://placehold.net/400x400.png",
              },
              {
                title: "Thông báo nhắc nhở",
                img: "https://placehold.net/400x400.png",
              },
              {
                title: "Bảo mật cao",
                img: "https://placehold.net/400x400.png",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className='group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300'
                data-aos='zoom-in'
              >
                <div className='text-emerald-500 text-4xl mb-4 flex items-center justify-center '>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={300}
                    height={300}
                    className='rounded-lg'
                  />
                </div>
                <h3 className='text-xl font-semibold mb-2 group-hover:text-emerald-600 transition'>
                  {item.title}
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  Giải thích ngắn về {item.title.toLowerCase()} giúp người dùng hiểu lợi
                  ích cụ thể.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id='team'
        className='px-6 py-24 flex justify-center items-center min-h-[650px] bg-white'
      >
        <div className='max-w-3xl mx-auto text-center' data-aos='fade-up'>
          <h2 className='text-3xl font-bold mb-6'>Nhóm phát triển</h2>
          <p className='text-gray-700 mb-12'>
            Chúng tôi là những lập trình viên trẻ đầy nhiệt huyết, mong muốn tạo ra sản
            phẩm hữu ích cho cộng đồng.
          </p>
          <div className='flex justify-center flex-wrap gap-24'>
            {["An", "Bình", "Châu"].map((name, idx) => (
              <div
                key={idx}
                className='text-center'
                data-aos='fade-up'
                data-aos-delay={idx * 100}
              >
                <img
                  src={"https://placehold.net/avatar.svg"}
                  alt={`Ảnh của ${name}`}
                  className='w-24 h-24 object-cover rounded-full mx-auto mb-3 shadow-lg'
                />
                <p className='font-semibold'>{name}</p>
                <p className='text-sm text-gray-500'>OT Developer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='px-6 py-24 flex justify-center items-center min-h-[650px] bg-emerald-50'
      >
        <div className='max-w-xl mx-auto text-center' data-aos='fade-up'>
          <h2 className='text-3xl font-bold mb-4'>Liên hệ với chúng tôi</h2>
          <p className='text-gray-600 mb-6'>
            Nếu bạn có bất kỳ câu hỏi nào, vui lòng gửi email tới{" "}
            <span className='text-emerald-600 font-medium'>support@splitly.vn</span>
          </p>
          <a
            href='mailto:support@splitly.vn'
            className='px-6 py-3 bg-emerald-600 text-white rounded hover:bg-emerald-700'
          >
            Gửi Email
          </a>
        </div>
      </section>
      <ScrollToTopButton />
    </main>
  )
}
