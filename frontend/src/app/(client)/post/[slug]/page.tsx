"use client";
import React from "react";
import BreadcrumbTabActive from "@/components/ui/common/breadcrumb/BreadcrumbTabActive";

const DetailedPostPage = () => {
  const callToActionText =
    '50+ mẫu CV "cực đẹp", chỉnh sửa dễ dàng trong 5 phút.';
  const postContent = {
    title: "Tổng hợp 60 câu hỏi phỏng vấn kế toán theo nghiệp vụ (có đáp án)",
    category: "BÍ KIẾP TÌM VIỆC",
    content: `
      <h2 id="cau-hoi-thuong-gap" class="text-2xl font-bold mt-8 mb-4 scroll-mt-20">
        10 câu hỏi thường gặp khi phỏng vấn kế toán
      </h2>
      <p>
        Kế toán là công việc quan trọng nên cần tuyển chọn những bạn có
        tính tỉ mỉ cẩn thận nên những câu hỏi của nhà tuyển dụng cũng sẽ
        hướng tới sự chỉnh chu để đánh giá năng lực và tính cách của ứng
        viên. Hãy tham khảo một số câu hỏi phỏng vấn kế toán phổ biến nhất
        dưới đây để chuẩn bị thật tốt cho buổi phỏng vấn của mình nhé!
      </p>

      <h3 id="ky-nang-ke-toan" class="text-xl font-bold mt-6 mb-2 scroll-mt-20">
        Vị trí nhân viên kế toán cần những kỹ năng gì?
      </h3>
      <p>
        Khi đưa ra câu hỏi nhà tuyển dụng muốn đánh giá xem mức độ hiểu
        biết và thành thạo công việc của bạn tới đâu. Qua đó hiểu được bạn
        đã chuẩn bị được những kỹ năng gì để đáp ứng được công việc của
        nhân viên kế toán. Thực tế nghề kế toán cần rất nhiều kỹ năng nên
        bạn không nhất thiết phải trả lời rập khuôn chính xác. Bạn có thể
        trả lời những kỹ năng như sử dụng tin học văn phòng, kỹ năng giao
        tiếp, kỹ năng thuyết trình, làm việc nhóm, kỹ năng điều phối công
        việc, phân tích tổng hợp,..
      </p>
      <p>
        Để tạo ra mẫu CV chuyên nghiệp, độc đáo, thể hiện được hết những
        kỹ năng của bạn trong CV. gây ấn tượng với nhà tuyển dụng hãy tạo
        ngay mẫu CV trên TopCV dưới đây.
      </p>

      <div class="my-6 text-center">
        <button class="bg-yellow-400 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition">
          Tạo cv ngay
        </button>
      </div>

      <h3 id="phan-mem-ke-toan" class="text-xl font-bold mt-6 mb-2 scroll-mt-20">
        Bạn biết và sử dụng phần mềm kế toán nào?
      </h3>
      <p>
        Phần mềm kế toán là một công cụ quan trọng hỗ trợ đắc lực cho quá
        trình làm việc của một nhân viên kế toán. Với câu hỏi này nhà
        tuyển dụng sẽ biết được bạn có biết sử dụng các phần mềm chuyên
        dụng, để đánh giá được năng lực của ứng viên như thế nào. Để được
        công ty đánh giá cao bên cạnh việc kể tên các bạn cần phải nêu
        được ưu, nhược điểm của từng phần mềm đó, cái nào ứng dụng linh
        hoạt nhất. Một số phần mềm có thể kể đến như: Misa, Fast, Bravo,
        3TSoft, Effect Winta, Excel,..  
      </p>

      <h3 id="kinh-nghiem-ke-toan" class="text-xl font-bold mt-6 mb-2 scroll-mt-20">
        Bạn đã có kinh nghiệm làm ở các vị trí kế toán nào chưa?
      </h3>
      <p>
        Đây là câu hỏi giúp nhà tuyển dụng biết được vị trí này có phù hợp
        bạn hay không? Nếu như bạn đã từng làm công việc có liên quan
        trước đây thì không có gì lo lắng bạn hãy liệt kê ra những kinh
        nghiệm đó. Tuy nhiên, nếu bạn chưa có kinh nghiệm thì hãy thể hiện
        bạn là người tiến thủ, biết học hỏi và gắn bó lâu dài với doanh
        nghiệp. Bạn có thể xem các job kế toán tại TopCV để xác định được
        đúng những kỹ năng nhà tuyển dụng thường yêu cầu ứng viên có nhé!
      </p>

      <div class="my-6 text-center">
        <button class="bg-yellow-400 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition">
          Tổng hợp việc làm kế toán
        </button>
      </div>

      <h3 id="cong-viec-ke-toan" class="text-xl font-bold mt-6 mb-2 scroll-mt-20">
        Công việc của một nhân viên kế toán gồm những gì?
      </h3>
      <p>
        Tuỳ vào từng vị trí công việc kế toán tại mỗi doanh nghiệp mà sẽ
        có sự khác nhau về công việc cụ thể. Thường công việc chung của kế
        toán là lập, lưu trữ chứng từ một cách đầy đủ, chính xác; sắp xếp
        chứng từ khoa học. Để trả lời câu hỏi này hoàn hảo nhất bạn cần
        đọc kỹ thông tin tuyển dụng của doanh nghiệp. Phần mô tả công việc
        của vị trí đang tuyển dụng sẽ chỉ cho bạn thấy rằng khi vào doanh
        nghiệp bạn sẽ thực hiện các công việc gì.
      </p>

      <h3 id="tim-viec-ke-toan" class="text-xl font-bold mt-6 mb-2 scroll-mt-20">
        Tìm việc làm kế toán ở đâu?
      </h3>
      <p>
        Đây là một câu hỏi mở để đánh giá khả năng nhạy bén xử lý của bạn
        bởi nghề kế toán cần đến độ chính xác cao cũng như tư duy nhanh
        nhẹn trong các tình huống. Câu hỏi này nhà tuyển dụng cần biết đến
        3 kỹ năng của một kế toán giỏi chứ không hỏi bạn giỏi kỹ năng nào.
        Ở câu hỏi này không có câu trả lời cố định bởi nó phụ thuộc vào vị
        trí mà bạn ứng tuyển. Cách lập luận giải thích sẽ là yếu tố giúp
        bạn gây ấn tượng với nhà tuyển dụng. Bạn cũng nên đưa ra những kỹ
        năng phù hợp với vị trí ứng tuyển. Chẳng hạn bạn ứng tuyển kế toán
        kho thì sẽ cần những kỹ năng kiểm soát, sắp xếp công việc hiệu quả
        để đảm bảo hạch toán đúng lượng hàng tồn kho lớn của doanh nghiệp.
      </p>

      <div class="my-6 text-center">
        <button class="bg-yellow-400 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition">
          Tìm việc kế toán tổng hợp ngay
        </button>
      </div>
    `,
    tableOfContents: [
      {
        id: "cau-hoi-thuong-gap",
        title: "Câu hỏi thường gặp khi phỏng vấn kế toán",
      },
      {
        id: "ky-nang-ke-toan",
        title: "Vị trí nhân viên kế toán cần những kỹ năng gì?",
      },
      {
        id: "phan-mem-ke-toan",
        title: "Bạn biết và sử dụng phần mềm kế toán nào?",
      },
      {
        id: "kinh-nghiem-ke-toan",
        title: "Bạn đã có kinh nghiệm làm ở các vị trí kế toán nào chưa?",
      },
      {
        id: "cong-viec-ke-toan",
        title: "Công việc của một nhân viên kế toán gồm những gì?",
      },
      { id: "tim-viec-ke-toan", title: "Tìm việc làm kế toán ở đâu?" },
    ],
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const parseHtml = (html: string) => {
    return { __html: html };
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BreadcrumbTabActive
          items={[
            { name: "Cẩm nang nghề nghiệp", link: "/post" },
            { name: "Bí kíp tìm việc", link: "/post" },
            { name: "Chi tiết bài viết", link: "/post/[slug]" },
          ]}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4">{postContent.title}</h1>
          <p className="text-orange-500 font-semibold mb-6">
            {postContent.category}
          </p>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={parseHtml(postContent.content)}
          />
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Table of Contents */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Mục Lục</h3>
            <ul className="space-y-3 text-gray-700">
              {postContent.tableOfContents.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-left w-full hover:text-orange-500 transition-colors duration-200"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">
              Tạo CV miễn phí và tìm công việc mơ ước với TopCV
            </h3>
            <p className="text-gray-600 mb-4">{callToActionText}</p>
            <p className="text-gray-600 mb-6">
              Chuyên trang việc làm chất lượng cao
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition">
                Tạo cv
              </button>
              <button className="bg-gray-200 text-black font-bold py-3 px-8 rounded-full hover:bg-gray-300 transition">
                Tìm việc ngay
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default DetailedPostPage;
