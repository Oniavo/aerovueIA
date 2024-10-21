import React, { useState,useRef,useEffect } from 'react'
import './HeroSection.css'
import Box from './Box';
import { useTheme } from "@/lib/ThemeContext";

import F4DLight from "../assets/logos/f4d-white.gif";
import F4DBlack from "../assets/logos/f4d-black.gif";


const HeroSection = () => {
  const imgRef = useRef(null);
  const { isDarkTheme } = useTheme();
  const [src, setSrc] = useState(isDarkTheme ? F4DBlack.src : F4DLight.src);
  const [caseHero, setCaseHero] = useState(isDarkTheme ? "case_hero_dark" : "case_hero_light");

  const handleMouseOver = () => {
    console.log("Mouse hover")
    const newSrc = (isDarkTheme ? F4DBlack.src : F4DLight.src) + '?reload=' + new Date().getTime();
    setSrc(newSrc);
  };

  useEffect(()=>{
    const newSrc = (isDarkTheme ? F4DBlack.src : F4DLight.src) + '?reload=' + new Date().getTime();
    setSrc(newSrc);
    setCaseHero(isDarkTheme ? "case_hero_dark" : "case_hero_light")
  },[isDarkTheme])

  

  return (
    <div>
      <div id='box'>
        <Box />
      </div>

      <div id='content'  >

        <div>
          <img id='f4d_image' src={src} onMouseOver={handleMouseOver} alt="" />
          {/* <svg id='f4d' viewBox="0 0 182 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={`${animationClass} animation-hover`} d="M68.82 1.5H1.5V21.5H57.27" stroke="url(#paint3_linear_197_111)" stroke-width="3" stroke-miterlimit="10" />
            <path className={`${animationClass} animation-hover`} d="M45.73 41.5H1.5V81.5H21.5V61.5H34.18" stroke="url(#paint1_linear_197_111)" stroke-width="3" stroke-miterlimit="10" />
            <path className={`${animationClass} animation-hover`} d="M120.15 51.5H100.36V1.5H80.36L39.96 71.5H80.37V81.5H100.37V71.5H110.37M80.37 51.5H74.6L80.37 41.5V51.5Z" stroke="url(#paint2_linear_197_111)" stroke-width="3" stroke-miterlimit="10" />
            <path className={`${animationClass} animation-hover`} d="M110.37 81.5H140.16C162.25 81.5 180.16 63.59 180.16 41.5C180.16 19.41 162.25 1.5 140.16 1.5H110.37V21.5H140.16C151.19 21.5 160.16 30.47 160.16 41.5C160.16 52.53 151.19 61.5 140.16 61.5H120.16" stroke="url(#paint0_linear_197_111)" stroke-width="3" stroke-miterlimit="10" />
            <defs>
              <linearGradient id="paint0_linear_197_111" x1="145.265" y1="1.5" x2="145.265" y2="81.5" gradientUnits="userSpaceOnUse">
                <stop stop-color={isDarkTheme ? "#FFFFFF" : "#050A11"} />
                <stop offset="1" stop-color="#2C3A99" />
              </linearGradient>
              <linearGradient id="paint1_linear_197_111" x1="23.615" y1="41.5" x2="23.615" y2="81.5" gradientUnits="userSpaceOnUse">
                <stop stop-color={isDarkTheme ? "#FFFFFF" : "#050A11"} />
                <stop offset="1" stop-color="#2C3A99" />
              </linearGradient>
              <linearGradient id="paint2_linear_197_111" x1="80.055" y1="1.5" x2="80.055" y2="81.5" gradientUnits="userSpaceOnUse">
                <stop stop-color={isDarkTheme ? "#FFFFFF" : "#050A11"} />
                <stop offset="1" stop-color="#2C3A99" />
              </linearGradient>
              <linearGradient id="paint3_linear_197_111" x1="35.16" y1="1.5" x2="35.16" y2="21.5" gradientUnits="userSpaceOnUse">
                <stop stop-color={isDarkTheme ? "#FFFFFF" : "#050A11"} />
                <stop offset="1" stop-color="#2C3A99" />
              </linearGradient>
            </defs>
          </svg> */}
        </div>


        <div>
          <p id='text_hero'>
            <span>Solutions </span>de développement <br /><span>rapides</span> et <span>flexibles</span> avec
          </p>
        </div>

        <div id="case_hero" className={caseHero}>
          <svg width="408" height="48" viewBox="0 0 408 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M383.517 5.01163V9.79558H373.014V34.9651H367.762V9.79558H357.042V5.01163H383.517ZM384.699 32.111C385.07 32.111 385.393 32.2418 385.667 32.5034C385.946 32.765 386.082 33.076 386.088 33.4393C386.085 33.6863 386.02 33.913 385.892 34.1164C385.762 34.3228 385.592 34.4827 385.384 34.6018C385.177 34.721 384.951 34.7849 384.702 34.7849C384.316 34.7849 383.989 34.6541 383.716 34.3926C383.443 34.131 383.306 33.8171 383.309 33.4422C383.306 33.0789 383.44 32.765 383.716 32.5063C383.992 32.2476 384.316 32.1139 384.702 32.1139L384.699 32.111ZM280.616 34.9651L261.252 11.4028V34.9535H256V5H262.564L287.029 34.7413V9.79558V5.01163H313.504V9.79558H292.28V17.4918H309.347V22.2757H292.28V30.1812H313.501V34.9651H280.616ZM330.33 22.2321L333.771 26.4203L326.72 35H319.827L330.33 22.2292V22.2321ZM326.72 5.02616L335.605 15.8293L344.464 5.05813L351.337 5.0465L339.046 20.0116L351.354 34.9767H344.461L319.848 5.02616H326.72ZM393.661 22.1653H395.989V30.9426C395.986 31.7506 395.808 32.4394 395.457 33.0207C395.104 33.602 394.617 34.0438 393.991 34.3548C393.367 34.6629 392.64 34.8227 391.809 34.8227C391.052 34.8227 390.372 34.689 389.766 34.4274C389.161 34.1659 388.68 33.7764 388.329 33.2591C387.973 32.7446 387.798 32.1023 387.798 31.3321H390.128C390.131 31.6693 390.212 31.9599 390.36 32.204C390.508 32.4482 390.716 32.6342 390.98 32.765C391.248 32.8958 391.553 32.9597 391.898 32.9597C392.272 32.9597 392.592 32.8841 392.851 32.7301C393.109 32.579 393.311 32.3523 393.447 32.05C393.581 31.7506 393.655 31.3815 393.658 30.9426V22.1653H393.661ZM405.563 25.5978C405.506 25.0659 405.257 24.6503 404.823 24.3538C404.387 24.0544 403.82 23.9062 403.125 23.9062C402.639 23.9062 402.217 23.9789 401.87 24.1184C401.522 24.2637 401.249 24.4555 401.065 24.6997C400.881 24.9438 400.789 25.2228 400.78 25.5338C400.78 25.7954 400.845 26.0221 400.97 26.211C401.095 26.4028 401.261 26.5656 401.478 26.6964C401.692 26.8301 401.929 26.9405 402.19 27.0306C402.454 27.1207 402.716 27.1963 402.98 27.2573L404.194 27.548C404.681 27.6584 405.156 27.8066 405.607 27.9955C406.058 28.1816 406.468 28.417 406.827 28.7018C407.187 28.9866 407.472 29.3296 407.682 29.7307C407.893 30.1318 408 30.6026 408 31.1461C408 31.8785 407.807 32.5179 407.421 33.076C407.032 33.6282 406.474 34.0612 405.741 34.3722C405.011 34.6803 404.129 34.8401 403.09 34.8401C402.051 34.8401 401.211 34.689 400.474 34.3867C399.735 34.0874 399.156 33.6485 398.741 33.073C398.325 32.4976 398.099 31.7913 398.067 30.9659H400.373C400.406 31.399 400.549 31.7593 400.789 32.05C401.035 32.3377 401.356 32.5499 401.745 32.6952C402.14 32.8347 402.582 32.9074 403.069 32.9074C403.556 32.9074 404.025 32.8318 404.414 32.6836C404.797 32.5354 405.1 32.329 405.316 32.0616C405.536 31.7971 405.646 31.4861 405.652 31.1287C405.649 30.8031 405.548 30.5299 405.355 30.3178C405.159 30.1056 404.889 29.9254 404.544 29.783C404.197 29.6377 403.79 29.5098 403.327 29.3964L401.855 29.0331C400.792 28.7686 399.949 28.3676 399.331 27.827C398.714 27.2893 398.405 26.5743 398.405 25.6791C398.405 24.9438 398.613 24.2986 399.029 23.7464C399.441 23.1941 400.008 22.764 400.721 22.4588C401.439 22.1507 402.25 21.9996 403.155 21.9996C404.061 21.9996 404.877 22.1507 405.572 22.4588C406.266 22.764 406.81 23.1912 407.204 23.7318C407.599 24.2753 407.807 24.8944 407.816 25.5978H405.56H405.563Z" fill={isDarkTheme ? "#FFFFFF" : "#050A11"} />
            <path d="M173.678 6.57256C174.434 7.33233 175.33 7.71221 176.361 7.71221C177.392 7.71221 178.336 7.33233 179.092 6.57256C179.849 5.8128 180.229 4.91435 180.229 3.88022C180.229 2.8461 179.849 1.9386 179.092 1.16377C178.336 0.385912 177.425 0 176.361 0C175.297 0 174.434 0.388927 173.678 1.16377C172.921 1.94162 172.541 2.8461 172.541 3.88022C172.541 4.91435 172.921 5.8128 173.678 6.57256ZM92.0934 16.4977C92.0934 16.5761 92.0301 16.6425 91.9487 16.6425H86.6273V26.7365C86.6273 27.5776 86.8384 28.1927 87.2575 28.5816C87.6765 28.9705 88.2886 29.1876 89.0966 29.2358C89.796 29.2781 90.6402 29.2781 91.6291 29.2358L91.8703 29.2238H91.9427C92.0241 29.2147 92.0934 29.2811 92.0934 29.3625V34.7592C92.0934 34.8316 92.0392 34.8949 91.9668 34.9009L91.8703 34.913C87.7007 35.3592 84.7551 34.9461 83.0275 33.6738C81.2698 32.3804 80.3925 30.068 80.3925 26.7334V16.6425H76.3283C76.2499 16.6425 76.1836 16.5791 76.1836 16.4977V10.7694C76.1836 10.691 76.2469 10.6246 76.3283 10.6246H80.3925V6.61779C80.3925 6.50322 80.4588 6.40071 80.5643 6.35549L86.4284 3.76566C86.5248 3.72345 86.6304 3.79279 86.6304 3.89831V10.6277H91.9517C92.0301 10.6277 92.0964 10.691 92.0964 10.7724V16.5008L92.0934 16.4977ZM103.405 14.7973C103.984 13.2446 104.946 12.0809 106.282 11.303C107.506 10.5915 108.859 10.2086 110.34 10.1483H110.439C110.494 10.1453 110.557 10.1422 110.608 10.1422C110.69 10.1422 110.753 10.2056 110.753 10.287V16.8716C110.753 17.0103 110.632 17.1158 110.497 17.1037C108.697 16.9409 107.084 17.3389 105.652 18.2946C104.153 19.2986 103.402 20.9629 103.402 23.2934V34.7472C103.402 34.8255 103.339 34.8919 103.258 34.8919H97.3062C97.2279 34.8919 97.1615 34.8286 97.1615 34.7472V10.7694C97.1615 10.691 97.2248 10.6246 97.3062 10.6246H103.258C103.336 10.6246 103.402 10.688 103.402 10.7694V14.7973H103.405ZM124.878 9.94326C128.264 9.94326 130.89 11.1251 132.762 13.4858V10.7663C132.762 10.688 132.825 10.6216 132.907 10.6216H138.858C138.937 10.6216 139.003 10.6849 139.003 10.7663V34.7411C139.003 34.8195 138.94 34.8858 138.858 34.8858H132.907C132.828 34.8858 132.762 34.8225 132.762 34.7411V32.0216C130.893 34.3823 128.264 35.5642 124.878 35.5642C121.492 35.5642 118.89 34.3281 116.584 31.8528C114.277 29.3775 113.126 26.3445 113.126 22.7537C113.126 19.1629 114.277 16.1299 116.584 13.6546C118.89 11.1794 121.655 9.94326 124.878 9.94326ZM126.039 15.9128C124.103 15.9128 122.508 16.552 121.251 17.8303C119.994 19.1087 119.364 20.7488 119.364 22.7567C119.364 24.7647 119.994 26.4139 121.251 27.7073C122.508 28.9675 124.103 29.6007 126.039 29.6007C127.974 29.6007 129.578 28.9615 130.85 27.6832C132.123 26.4048 132.762 24.7647 132.762 22.7567C132.762 20.7488 132.126 19.1087 130.85 17.8303C129.578 16.552 127.974 15.9128 126.039 15.9128ZM157.753 9.94326C161.009 9.94326 163.789 11.1794 166.095 13.6546C168.402 16.1299 169.553 19.1629 169.553 22.7537C169.553 26.3445 168.402 29.3775 166.095 31.8528C163.789 34.3281 161.009 35.5642 157.753 35.5642C154.497 35.5642 151.756 34.3823 149.917 32.0216V44.4462C149.917 44.5246 149.854 44.5909 149.772 44.5909H143.821C143.742 44.5909 143.676 44.5276 143.676 44.4462V10.7663C143.676 10.688 143.739 10.6216 143.821 10.6216H149.772C149.851 10.6216 149.917 10.6849 149.917 10.7663V13.4858C151.756 11.1251 154.367 9.94326 157.753 9.94326ZM156.592 15.9128C154.656 15.9128 153.061 16.552 151.804 17.8303C150.547 19.1087 149.917 20.7488 149.917 22.7567C149.917 24.7647 150.544 26.4139 151.804 27.7073C153.061 28.9675 154.656 29.6007 156.592 29.6007C158.528 29.6007 160.132 28.9615 161.404 27.6832C162.676 26.4048 163.315 24.7647 163.315 22.7567C163.315 20.7488 162.679 19.1087 161.404 17.8303C160.132 16.552 158.528 15.9128 156.592 15.9128ZM173.412 34.8858C173.334 34.8858 173.268 34.8225 173.268 34.7411V10.7694C173.268 10.691 173.331 10.6246 173.412 10.6246H179.364C179.442 10.6246 179.509 10.688 179.509 10.7694V34.7441C179.509 34.8225 179.445 34.8889 179.364 34.8889H173.412V34.8858ZM62.0526 19.0906C61.1994 18.6866 60.7712 18.162 60.7712 17.5138C60.7712 16.8656 61.0366 16.4133 61.5702 16.0576C62.1008 15.7018 62.7701 15.5239 63.5781 15.5239C65.1248 15.5239 66.2916 16.1299 67.0815 17.3389C67.1358 17.4233 67.2443 17.4565 67.3348 17.4173L72.5988 15.0807C72.6772 15.0445 72.7074 14.9511 72.6652 14.8757L72.5566 14.6918C72.5295 14.6466 72.5024 14.6044 72.4813 14.5682C71.5798 13.1451 70.413 12.0839 68.9477 11.2789C67.3348 10.3895 65.5469 9.94326 63.5781 9.94326C60.9672 9.94326 58.7814 10.6307 57.0267 12.0055C55.269 13.3803 54.3916 15.2646 54.3916 17.6585C54.3916 19.2443 54.8197 20.5619 55.673 21.6141C56.5262 22.6663 57.5664 23.4351 58.7934 23.9205C59.924 24.3697 61.0546 24.7466 62.1852 25.0571L62.4686 25.1325C63.6927 25.4551 64.7329 25.8199 65.5891 26.2239C66.4423 26.6279 66.8705 27.1555 66.8705 27.8007C66.8705 29.1906 65.7579 29.8871 63.5329 29.8871C61.3079 29.8871 59.9482 29.1032 59.1311 27.5324C59.0618 27.3967 58.899 27.3364 58.7603 27.3967L53.5113 29.7303C53.4359 29.7635 53.4057 29.8509 53.4389 29.9233L53.4992 30.0469C55.3323 33.7251 58.6789 35.5642 63.5299 35.5642C66.3037 35.5642 68.6161 34.8919 70.4703 33.5502C72.3245 32.2086 73.2501 30.2911 73.2501 27.8007C73.2501 26.1516 72.8219 24.7768 71.9687 23.6763C71.1155 22.5758 70.0753 21.792 68.8483 21.3216C67.7177 20.8875 66.5871 20.5257 65.4565 20.2302L65.173 20.1579C63.949 19.8503 62.9088 19.4946 62.0526 19.0906Z" fill={isDarkTheme ? "#FFFFFF" : "#050A11"} />
            <path d="M39.7662 7.71223H13.1835V21.2674H26.7386V34.8195H40.2908V8.23985C40.2908 7.95041 40.0556 7.71223 39.7632 7.71223H39.7662Z" fill="#8B74F9" />
            <path d="M26.8472 21.2674H26.2111V21.9035H26.8472V21.2674Z" fill="#8B74F9" />
            <path d="M13.1835 21.2674H26.211C26.5004 21.2674 26.7386 21.5025 26.7386 21.795V34.8225H13.7111C13.4217 34.8225 13.1835 34.5874 13.1835 34.2949V21.2674Z" fill="#433884" />
            <path d="M26.7386 34.8195H40.2908L27.1879 47.9224C27.0221 48.0882 26.7386 47.9706 26.7386 47.7355V34.8165V34.8195Z" fill="#433884" />
            <path d="M13.1835 21.2674H0.264493C0.0293282 21.2674 -0.0882544 20.984 0.0775672 20.8182L13.1835 7.71225V21.2674Z" fill="#433884" />
            <path d="M216.816 30.144C215.728 30.144 214.76 29.968 213.912 29.616C213.064 29.248 212.392 28.744 211.896 28.104C211.416 27.464 211.176 26.72 211.176 25.872C211.176 25.152 211.336 24.496 211.656 23.904C211.976 23.296 212.488 22.704 213.192 22.128C213.912 21.536 214.864 20.92 216.048 20.28C217.056 19.72 217.84 19.24 218.4 18.84C218.976 18.424 219.384 18.032 219.624 17.664C219.864 17.28 219.984 16.872 219.984 16.44C219.984 15.816 219.768 15.312 219.336 14.928C218.92 14.544 218.32 14.352 217.536 14.352C216.688 14.352 216.032 14.568 215.568 15C215.104 15.416 214.872 15.96 214.872 16.632C214.872 16.968 214.92 17.288 215.016 17.592C215.128 17.896 215.328 18.232 215.616 18.6C215.92 18.968 216.336 19.432 216.864 19.992L225.744 29.136L224.76 30.264L215.496 20.736C214.936 20.144 214.488 19.632 214.152 19.2C213.832 18.752 213.608 18.328 213.48 17.928C213.352 17.528 213.288 17.104 213.288 16.656C213.288 15.936 213.456 15.312 213.792 14.784C214.144 14.24 214.64 13.824 215.28 13.536C215.92 13.232 216.672 13.08 217.536 13.08C218.32 13.08 219 13.216 219.576 13.488C220.168 13.744 220.624 14.12 220.944 14.616C221.28 15.112 221.448 15.712 221.448 16.416C221.448 17.024 221.296 17.592 220.992 18.12C220.704 18.648 220.224 19.168 219.552 19.68C218.88 20.176 217.968 20.736 216.816 21.36C215.808 21.92 215.008 22.432 214.416 22.896C213.84 23.36 213.432 23.816 213.192 24.264C212.952 24.696 212.832 25.176 212.832 25.704C212.832 26.312 213 26.848 213.336 27.312C213.688 27.76 214.168 28.112 214.776 28.368C215.4 28.608 216.112 28.728 216.912 28.728C218.032 28.728 219.032 28.496 219.912 28.032C220.792 27.568 221.528 26.864 222.12 25.92C222.728 24.976 223.168 23.792 223.44 22.368L224.808 22.8C224.504 24.4 223.984 25.744 223.248 26.832C222.512 27.92 221.6 28.744 220.512 29.304C219.424 29.864 218.192 30.144 216.816 30.144Z" fill={isDarkTheme ? "#FFFFFF" : "#050A11"} />
          </svg>
        </div>

        <div id='descri_hero_container'>
          <p id='descri_hero'>Nous créons des applications web sur mesure, rapides et évolutives grâce à Strapi pour une gestion de contenu flexible et Next.js pour des performances optimales et un SEO renforcé.</p>
        </div>

        <div id='button_hero'>
          <button>
            <p color="#FFFFFF">Demander une démo</p>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="22" fill="#D9D9D9" />
              <path d="M31.4852 14.5148C31.4852 13.9625 31.0375 13.5148 30.4852 13.5148L21.4852 13.5148C20.9329 13.5148 20.4852 13.9625 20.4852 14.5148C20.4852 15.067 20.9329 15.5148 21.4852 15.5148L29.4852 15.5148L29.4852 23.5148C29.4852 24.067 29.9329 24.5148 30.4852 24.5148C31.0375 24.5148 31.4852 24.067 31.4852 23.5148L31.4852 14.5148ZM14.2218 32.1924L31.1923 15.2219L29.7781 13.8077L12.8075 30.7782L14.2218 32.1924Z" fill="#4960FF" />
            </svg>
          </button>
        </div>
      </div>




    </div>
  )
}

export default HeroSection