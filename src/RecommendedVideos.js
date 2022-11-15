import React from "react";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";
// import "./VideoCard.css";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="The World In 2050, The Real Future Of Earth (BBC & Nat Geo Documentaries)"
          views="6,6 M views"
          timestamp="5 years ago"
          channelImage="https://yt3.ggpht.com/ZT6bJRrv_jxy3BxgHw36jyMtk1X5aNb9nb8nLnAO_fdt2G7ky9_oCY5ChuRVCKxzbASy6ljL=s68-c-k-c0x00ffffff-no-rj"
          channel="Top Class Documentaries"
          image="https://i.ytimg.com/vi/g_1oiJqE3OI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDE48U-gEYDAk60QELCcDMUW7j0JQ"
        />
        <VideoCard
          title="17 Coolest Gadgets You Can Actually Buy"
          views="1,8 M views"
          timestamp="3 months ago"
          channelImage="https://yt3.ggpht.com/ytc/AMLnZu8DYCKjfSoS0ZGdCqNy80XKp45drew_5ALGJabzyg=s68-c-k-c0x00ffffff-no-rj"
          channel="YouFact Tech"
          image="https://i.ytimg.com/vi/qiMnSaZWf3M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRdC83-ILQo8cA0aDTVyl--K21rw"
        />
        <VideoCard
          title="Why Turkey Built the World's Longest Suspension Bridge"
          views="813 K views"
          timestamp="6 months ago"
          channelImage="https://yt3.ggpht.com/ytc/AMLnZu8ps_3upHBg4IAmYBMqh6s9-1zoZjVEbiKqtWWvSw=s68-c-k-c0x00ffffff-no-rj"
          channel="The B1M"
          image="https://i.ytimg.com/vi/BzrdNIsGVc0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8dEHF4gdfPew33H70BQXgf35Scg"
        />
        <VideoCard
          title="The World in 2050:Future Technology"
          views="2,3 M views"
          timestamp="2 years ago"
          channelImage="https://yt3.ggpht.com/7BZtp1qb_yK4JhwqAc6urnssMYJR98f8274pFh5UKa3_wrzG3Qsmy_QieQO_iV0ac4X8_CIJ3Yw=s68-c-k-c0x00ffffff-no-rj"
          channel="Insane Curiosity"
          image="https://i.ytimg.com/vi/Oa9aWdcCC4o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXRafUQd9HeU2QYYbkNPHvdxY2iQ"
        />
        <VideoCard
          title="15 New Life Changing Technologies"
          views="88 K views"
          timestamp="4 months ago"
          channelImage="https://yt3.ggpht.com/BCvtW_Fgk9xlSICCEENhPU0dBZZluyEmyMEf3A_asYrTUvyOEugp5OBrMNz9m85CJvA_4pC7gw=s68-c-k-c0x00ffffff-no-rj"
          channel="Intelligent Encounters"
          image="https://i.ytimg.com/vi/cEUJ0EO-ncA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-vVD4YJSvxBk2V_eFEk9kagQr9Q"
        />
        <VideoCard
          title="Audi's New Lighting Technology | A6 Avant e-Tron"
          views="3,3 M views"
          timestamp="11 days ago"
          channelImage="https://yt3.ggpht.com/Tu5e4QZQM1SrWBqyDrx7m9duC3H_htsKsiaH-xMBx9qfLdVwIh0ZcZf3xgZUhBbrotCFvGoXdMI=s68-c-k-c0x00ffffff-no-rj"
          channel="Supercar Blondie"
          image="https://i.ytimg.com/vi/sgJ4LhFYjjM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDp4RPiz7LCyQRQnFNqmEZm0JhGDw"
        />
        <VideoCard
          title="10 Coolest Gadgets and Inventions That Will Blow Your Mind"
          views="896 K views"
          timestamp="1 years ago"
          channelImage="https://yt3.ggpht.com/cdIJI7-zAVFe1gR-qyVQS-sCyJ8qpVKDnYd-gjkG5rxXNBP6NRNqdehjclslp-gHhC4RtGSV=s68-c-k-c0x00ffffff-no-rj"
          channel="Future Tech"
          image="https://i.ytimg.com/vi/PKATJiyz0iI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUkPMjGak7ghxVyr1vFutajFY4gQ"
        />
        <VideoCard
          title="Water Firing Hypercar with NASA Technology | Hyperion"
          views="2,6 M views"
          timestamp="2 weeks ago"
          channelImage="https://yt3.ggpht.com/Tu5e4QZQM1SrWBqyDrx7m9duC3H_htsKsiaH-xMBx9qfLdVwIh0ZcZf3xgZUhBbrotCFvGoXdMI=s68-c-k-c0x00ffffff-no-rj"
          channel="Supercar Blondie"
          image="https://i.ytimg.com/vi/Qvk3LWOSewc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDe9vrjHbrx6JCEUliF38D39BM1XA"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
