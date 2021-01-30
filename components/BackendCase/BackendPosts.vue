<template>
  <section class="g-container g-section section">
    <div class="post">
      <h3 class="g-title-secondary">Key Challenges</h3>
      <div class="image">
        <img
          class="g-img-cover"
          src="~/assets/images/backend-case/post-1.jpg"
          alt="Automation image"
        />
      </div>
      <ol class="post__text g_list--decimal list">
        <li>
          Automation helps enterprises view and manage check-in/out processes
          seamlessly. Our client, however, was struggling to keep tabs on
          trailer check-ins as a consequence of their paper-based, sluggish
          processes. Since employees had to do manual entries, delays became
          inevitable, and frustration among trailer drivers/owners, who queued
          up for hours, ensued.
        </li>
        <li>
          Our client’s dependency on human data entry increased the risk of
          expensive errors. Moreover, resources were strained as many employees
          were handling the tedious task of monitoring trailer movements instead
          of focusing on high-value priorities.
        </li>
        <li>
          Manual plant auditing processes were another teething trouble. Our
          client’s team of auditors was using outmoded tools and hence required
          a copious amount of time to analyze and validate asset operations and
          cost expenditures. Data inaccuracies kept getting in the way of
          ensuring performance sanity.
        </li>
      </ol>
    </div>
    <div class="post post--reversed">
      <h3 class="g-title-secondary">Our Solutions</h3>
      <div class="image image--reversed">
        <img
          class="g-img-cover"
          src="~/assets/images/backend-case/post-2.jpg"
          alt="Automation image"
        />
      </div>
      <div class="post__text">
        <p class="post__text-item">
          We leveraged the best automation practices to build interactive,
          self-service kiosks that allowed trailer drivers/owners to check-in
          automatically. The move was a big success as it reduced manual
          intervention of the internal staff—all while accelerating process
          timelines and improving user experience. Since employees were freed
          from the redundant tasks, they participated in strategic,
          result-oriented jobs and helped our client operate better.
        </p>
        <p class="post__text-item">
          We built a fully integrated self-service kiosk application that helped
          our client monitor trailer check-ins and check-outs across their
          multiple facilities. The new system generated QR codes that could be
          read across all our client’s devices and helped facility managers keep
          a record of trailers entering the premises. Our solution approach cut
          the chances of committing errors to almost zero and reinforced
          transparency. Additionally, we developed check-in and check-out apps
          to help trailer drivers/owners check the plant capacity on a daily
          basis and determine the appropriate time and date for delivery and
          dispatch.
        </p>
        <p class="post__text-item">
          We developed asset audit automation apps to simplify audit exercises
          for our client, allow remote access, and strengthen the plant
          assessment quality.The apps provided an effective medium for audit
          managers and executives to collaborate in real-time and deliver
          outcomes that reinforced trust. With a strong digital foundation in
          place, errors were considerably reduced, and the number of yearly
          audits went up from 10 to 100.
        </p>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.section {
  background: linear-gradient(
    180deg,
    #f7f7f7 75.52%,
    rgba(255, 255, 255, 0) 100%
  );
}
.post {
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 50%;
    column-gap: 6rem;
  }
  @media (min-width: 992px) {
    column-gap: 13rem;
  }
}
.post--reversed {
  @media (min-width: 768px) {
    grid-template-columns: 50% 1fr;
  }
}
.post + .post {
  margin-top: 12rem;
}
.image {
  margin-top: 3rem;
  @media (min-width: 768px) {
    margin-top: 0;
    grid-column: 2/3;
    grid-row: 1/3;
  }
}
.image--reversed {
  @media (min-width: 768px) {
    margin-top: 0;
    grid-column: 1/2;
    grid-row: 1/3;
  }
}
.post__text {
  margin-top: 6rem;
  color: var(--color-font-secondary);
}
.post__text-item {
  font-size: 14px;
  line-height: 1.14em;
  @media (min-width: 992px) {
    font-size: 1.4rem;
  }
}
.post__text-item + .post__text-item {
  margin-top: 1em;
}
.list {
  font-size: 14px;
  line-height: 1.14em;

  li + li {
    margin-top: 4rem;
  }

  @media (min-width: 992px) {
    font-size: 1.4rem;
  }
}
</style>