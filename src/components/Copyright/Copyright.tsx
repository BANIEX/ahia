import React from 'react'
import styles from "./Copyright.module.css"

const Copyright = () => {
  return (
    <section className={styles.copyright_section_container}>
      <div className={styles.copyright_section_sub_conatiner}>
        <div className={styles.copyright_section_left}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clipPath="url(#clip0_394_881)">
                <path
                  d="M1 8C1 9.85652 1.7375 11.637 3.05025 12.9497C4.36301 14.2625 6.14348 15 8 15C9.85652 15 11.637 14.2625 12.9497 12.9497C14.2625 11.637 15 9.85652 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1C6.14348 1 4.36301 1.7375 3.05025 3.05025C1.7375 4.36301 1 6.14348 1 8ZM16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM8.146 4.992C6.934 4.992 6.219 5.912 6.219 7.494V8.554C6.219 10.125 6.922 11.016 8.146 11.016C9.125 11.016 9.787 10.43 9.875 9.598H11.17V9.691C11.07 11.139 9.816 12.158 8.14 12.158C6.049 12.158 4.871 10.822 4.871 8.555V7.482C4.871 5.221 6.072 3.844 8.141 3.844C9.822 3.844 11.076 4.898 11.17 6.416V6.504H9.875C9.787 5.625 9.107 4.992 8.146 4.992Z"
                  fill="#FAFAFA"
                />
              </g>
              <defs>
                <clipPath id="clip0_394_881">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>2024 AHIA</span>
          </div>
        </div>
        <div className={styles.copyright_section_right}>
          <div>Privacy & Cookies</div>|
          <div>Ts&Cs</div>|
          <div>Accessibility</div>
        </div>
      </div>
    </section>
  );
}

export default Copyright