import styled from "styled-components";

export const EventBanner = () => {
  return (
    <Wrap>
      <article
        className="banner"
        style={{
          backgroundImage: "url(/images/event.png",
          backgroundSize: "100%",
        }}
      >
        <div className="right">
          <img src="images/icon-swiper-2.svg" alt="right" />
        </div>
        <div className="left">
          <img src="images/icon-swiper-1.svg" alt="left" />
        </div>
      </article>
    </Wrap>
  );
};

const Wrap = styled.div`
  .banner {
    position: relative;
    width: 100%;
    height: 500px;
    background: #f2f2f2;
    margin-bottom: 80px;
  }

  .right {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 5%;
    background: transparent;
  }

  .right img {
    background: transparent;
  }

  .left {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    background: transparent;
  }

  .left img {
    background: transparent;
  }
`;
