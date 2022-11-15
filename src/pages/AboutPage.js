import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title ="about" />
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="ba" />
      <article>
        <div className="title">
          <h2>our story</h2>
          <div className="underline">

          </div>
          <p>Quốc hội quyết định giá khởi điểm và tiền đặt trước của một biển số ôtô đưa ra đấu giá là 40 triệu đồng, bước giá 5 triệu đồng.

Chiều 15/11, với 473/489 đại biểu tham gia biểu quyết đồng ý (đạt gần 95%), Quốc hội thông qua Nghị quyết thí điểm đấu giá biển số ôtô.

Biển số đưa ra đấu giá là biển số ôtô nền màu trắng, chữ và số màu đen. Tổ chức, cá nhân được tham gia đấu giá biển số ôtô của các tỉnh, thành trên cả nước. Số tiền thu được từ đấu giá sau khi trừ các khoản chi phí tổ chức sẽ nộp vào ngân sách Trung ương; hình thức đấu giá trực tuyến.

Bộ Công an tổ chức đấu giá tài sản có trách nhiệm công khai biển số ôtô chưa đăng ký, dự kiến cấp mới trên cổng thông tin điện tử quốc gia về đấu giá tài sản, cổng thông tin điện tử Bộ Công an, trang thông tin điện tử Cục Cảnh sát giao thông, trang thông tin điện tử trực tuyến của tổ chức đấu giá tài sản.</p>
        </div>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
