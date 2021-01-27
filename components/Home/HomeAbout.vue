<template>
  <section class="g-container g-section section">
    <h2 class="g-title-secondary title">About us</h2>
    <div class="block">
      <div class="block__text">
        <p>
          A back end developer is a person who specializes in back end web
          development as it’s sometimes called. If you are interested in making
          things work, couldn’t care less about how they look and thrive with a
          puzzle to solve, you should consider becoming a back end web
          developer.
        </p>
        <button class="btn-play">
          <svg
            class="g-img-cover"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.557 19.6402L18.6968 13.2043C18.3716 12.9688 17.94 12.9334 17.5836 13.1164C17.2243 13.298 17 13.6669 17 14.0656V26.933C17 27.336 17.2243 27.7035 17.5836 27.8851C17.7355 27.9617 17.9016 28 18.0692 28C18.2879 28 18.5094 27.9305 18.6968 27.7928L27.557 21.3627C27.8367 21.1569 28 20.8391 28 20.5014C28.0014 20.1581 27.8339 19.8417 27.557 19.6402Z"
              fill="white"
            />
            <path
              d="M20.5007 0C9.1766 0 0 9.17782 0 20.5034C0 31.8249 9.1766 41 20.5007 41C31.822 41 41 31.8235 41 20.5034C41.0014 9.17782 31.822 0 20.5007 0ZM20.5007 37.5791C11.0703 37.5791 3.42451 29.9364 3.42451 20.5034C3.42451 11.0745 11.0703 3.42224 20.5007 3.42224C29.9297 3.42224 37.5741 11.0732 37.5741 20.5034C37.5755 29.9364 29.9297 37.5791 20.5007 37.5791Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div>
        <video
          class="video"
          :poster="require('~/assets/images/home/about-video.jpg')"
        ></video>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  padding-bottom: 23rem;
  color: var(--color-font-primary);
  background: url("~assets/images/home/bg-about.jpg");
  background-size: cover;
}
.block {
  margin-top: 3rem;
  display: grid;

  background-color: #141414;
  border-left: 1.6rem solid var(--color-font-accent);
  @media (min-width: 768px) {
    margin-top: 6rem;
    grid-template-columns: 3fr 2fr;
  }
}
.block__text {
  position: relative;
  padding: 3rem 2rem;

  color: var(--color-font-disabled);
  font-size: 1.6rem;
  line-height: 1.375em;
  @media (min-width: 768px) {
    padding: 7.2rem 10rem;
  }
}
.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.btn-play {
  $width: 6.5rem;

  width: $width;
  height: $width;
  padding: 1.2rem;

  position: absolute;

  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);

  display: flex;
  align-items: center;

  border: none;
  border-radius: 100%;
  background-color: #141414;

  @media (min-width: 992px) {
    left: unset;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
}
</style>