<template>
  <section class="g-container g-section section">
    <h3 class="g-title-secondary title-secondary">Success Stories</h3>
    <h1 class="g-title-primary title">
      Automation Fast-Tracks Outcomes for a Food and Beverage Major
    </h1>
    <div class="content">
      <div>
        <img
          class="g-img-cover"
          src="~/assets/images/backend-case/hero.jpg"
          alt="picture of production"
        />
      </div>
      <div>
        <p class="g-description-primary description">
          Automated check-in processes is a vital step towards ensuring seamless
          material management, especially when you have 35 manufacturing plants
          with innumerable external touchpoints. So, when your client wanted to
          leap forward from traditional check-in processes to a fully connected
          ecosystem powered by self-service kiosks, we knew that the challenge
          would require us tap into our best expertise.
        </p>
        <ul class="g_list--line list">
          <li>35 Bottling Plants</li>
          <li>1.1BN+ Annual Revenue</li>
          <li>Goal: Digital Process</li>
          <li>Automation</li>
        </ul>
        <div class="stack">
          <img
            class="g-img-contain"
            src="~/assets/images/icons/js.svg"
            alt="JavaScript is programming language"
          />
          <img
            class="g-img-contain"
            src="~/assets/images/icons/angular.svg"
            alt="Angular is JavaScript's framework"
          />
        </div>
      </div>
    </div>
  </section>
</template> 
<style lang="scss" scoped>
$height: 12.5rem;
.section {
  position: relative;
  z-index: 0;
  color: var(--color-font-primary);
  background-image: url("~assets/images/backend-case/bg-hero.jpg");
  background-size: cover;
  padding-top: 21.2rem;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 0;
    width: 100%;
    height: $height;

    display: block;

    background-color: var(--color-font-accent);
  }
  @media (min-width: 992px) {
    padding-bottom: 0;
  }
}

.title-secondary {
  padding-bottom: 5rem;
  border-bottom: 0.1rem solid hsla(0, 0%, 100%, 0.2);
}
.title {
  margin-top: 7rem;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
}
.content {
  margin-top: 6rem;
  @media (min-width: 992px) {
    margin-top: 12rem;
    padding-bottom: 0;

    display: grid;
    column-gap: 7.5rem;
    grid-template-columns: 12fr 11fr;
  }
}
.description {
  margin-top: 2rem;
  color: var(--color-font-secondary);
  @media (min-width: 992px) {
    margin: 0;
  }
}
.list {
  margin-top: 4rem;
  margin-bottom: 10rem;
  font-size: 14px;
  font-weight: 600;
  line-height: 1em;
  li + li {
    margin-top: 1.5rem;
  }
  @media (min-width: 992px) {
    margin-bottom: 14rem;
    font-size: 1.4rem;
  }
}
.stack {
  position: absolute;
  bottom: calc(#{$height}/ 2);
  transform: translateY(50%);

  display: grid;
  grid-template-columns: 4rem 4rem;
  grid-template-rows: 4rem;
  justify-content: start;
  column-gap: 4rem;
}
</style>