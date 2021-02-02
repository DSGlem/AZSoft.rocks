<template>
  <section id="contact" class="g-container g-section section">
    <div class="info">
      <h2 class="g-title-secondary">Contact us</h2>
      <div class="address">
        <p class="item">
          <span
            ><img
              class="g-img-contain"
              src="~assets/images/icons/map-point.svg"
              alt="map point icon"
          /></span>
          Ukraine, Kiev, Vasilkovskaya st., 45
        </p>
        <p class="item">
          <span
            ><img
              class="g-img-contain"
              src="~assets/images/icons/phone.svg"
              alt="map point icon" /></span
          >+38 044 320 20 77
        </p>
        <p class="item">
          <span
            ><img
              class="g-img-contain"
              src="~assets/images/icons/letter.svg"
              alt="map point icon" /></span
          >manager@azsoft.rock
        </p>
      </div>
    </div>
    <form class="form">
      <p class="form__title">Do you want to discuss your project?</p>
      <p class="form__subttitle">
        Leave your contact information and we will contact you within a few
        minutes
      </p>
      <label class="c-input" aria-label="your phone number">
        <input type="text" placeholder="Your phone number" />
      </label>
      <button class="btn c-btn" type="submit">Сall me back</button>
    </form>
  </section>
</template>
<style lang="scss" scoped>
.section {
  color: var(--color-font-primary);
  font-size: 14px;
  line-height: 1em;
  background-image: url("~assets/images/bg-contact.jpg");
  background-size: cover;
  background-position: center;

  display: grid;
  gap: 6rem;
  @media (min-width: 768px) {
    font-size: 1.4rem;
    grid-template-columns: auto minmax(1rem, 26.8rem);
    justify-content: space-between;
  }
}
.address {
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
  @media (min-width: 768px) {
    margin-top: 7rem;
  }
}
.item {
  display: grid;
  align-items: center;
  grid-template-columns: 2rem auto;
  gap: 2rem 3rem;
}
.form {
  font-size: 14px;
  line-height: 1em;
  @media (min-width: 992px) {
    font-size: 1.4rem;
  }
}
.form__title {
  font-size: 2.4rem;
  line-height: 1em;
  font-weight: 700;
}
.form__subttitle {
  margin-top: 2rem;
}
.c-btn {
  margin-top: 4rem;
  width: 100%;
  display: block;
  text-align: center;
  color: black;
  font-size: 1.8rem;
  font-weight: 600;
  border-radius: 3rem;
  cursor: pointer;
  background-color: white;
  &:focus {
    outline: none;
  }
}
.c-input {
  display: block;
  margin-top: 2rem;
  background: rgba(0, 0, 0, 0.3);
  border: 0.1rem solid #666666;
  box-sizing: border-box;
  border-radius: 3rem;
  input {
    width: 100%;
    color: white;
    padding: 1.8rem 3rem;
    border: none;
    background: none;
    &:focus {
      outline: none;
    }
    @media (min-width: 992px) {
      font-size: 1.4rem;
    }
  }
}
</style> 
