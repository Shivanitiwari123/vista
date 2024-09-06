import React from "react";
import AnnouncementBarV1 from "../ComponentSection/AnnouncementBar/AnnouncementBarV1";
import AnnouncementBarV2 from "../ComponentSection/AnnouncementBar/AnnouncementBarV2";
import Header from "../common/header/Header";
import HeaderV2 from "../common/header/HeaderV2";
import BannerV1 from "../ComponentSection/HeroBanner/BannerV1";
import BannerV2 from "../ComponentSection/HeroBanner/BannerV2";
import ServiceStripV1 from "../ComponentSection/ServiceStrips/ServiceStripV1";
import ServiceStripV2 from "../ComponentSection/ServiceStrips/ServiceStripV2";
import FeaturedCollectionsV1 from "../ComponentSection/Collections/FeaturedCollectionsV1";
import FeaturedCollectionsV2 from "../ComponentSection/Collections/FeaturedCollectionsV2";
import FeaturedProductsV1 from "../ComponentSection/Products/FeaturedProductsV1";
import FeaturedProductsV2 from "../ComponentSection/Products/FeaturedProductsV2";
import ImageBannerV1 from "../ComponentSection/ImageBanner/ImageBannerV1";
import ImageBannerV2 from "../ComponentSection/ImageBanner/ImageBannerV2";

const RenderComponent = (component) => {
  switch (component?.type) {
    case "announcement-v1":
      if (component?.version === "v1")
        return <AnnouncementBarV1 data={component?.data} />;
      if (component?.version === "v2")
        return <AnnouncementBarV2 data={component?.data} />;
      return null;

    case "header-component":
      if (component?.version === "v1") return <Header data={component?.data} />;
      if (component?.version === "v2")
        return <HeaderV2 data={component?.data} />;
      return null;

    case "banner-component":
      if (component?.version === "v1")
        return <BannerV1 data={component?.data} />;
      if (component?.version === "v2")
        return <BannerV2 data={component?.data} />;
      return null;

    case "service-strip":
      if (component.version === "v1")
        return <ServiceStripV1 data={component.data} />;
      if (component.version === "v2")
        return <ServiceStripV2 data={component.data} />;
      return null;

    case "featured-collections-component":
      if (component.version === "v1")
        return <FeaturedCollectionsV1 data={component.data} />;
      if (component.version === "v2")
        return <FeaturedCollectionsV2 data={component.data} />;
      return null;

    case "featured-Products":
      if (component.version === "v1")
        return <FeaturedProductsV1 data={component.data} />;
      if (component.version === "v2")
        return <FeaturedProductsV2 data={component.data} />;
      return null;

    case "image-banner":
      if (component.version === "v1")
        return <ImageBannerV1 data={component.data} />;
      if (component.version === "v2")
        return <ImageBannerV2 data={component.data} />;
      return null;

    default:
      return null;
  }
};

export default RenderComponent;
