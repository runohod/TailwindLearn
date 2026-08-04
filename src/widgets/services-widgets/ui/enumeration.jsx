import {
  construction,
  projectDevelopment,
  interiorDesign,
  repairs,
} from "@/shared/assets/sevices";
import { ContentInfo } from "@/shared/ui/contentInfo";

const servicesData = [
  {
    id: 1,
    title: "Construction",
    description:
      "Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed ut augue. Mattis habitant venenatis, gravida posuere massa ac interdum. Eget aliquam dignissim ut vestibulum.",
    image: construction,
    linkPath: "/",
  },
  {
    id: 2,
    title: "Project Development",
    description:
      "Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget.",
    image: projectDevelopment,
    linkPath: "/",
  },
  {
    id: 3,
    title: "Interior Design",
    description:
      "Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed ut augue. Mattis habitant venenatis, gravida posuere massa ac interdum. Eget aliquam dignissim ut vestibulum.",
    image: interiorDesign,
    linkPath: "/",
  },
  {
    id: 4,
    title: "Repairs",
    description:
      "Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget.",
    image: repairs,
    linkPath: "/",
  },
];

export const Enumeration = () => {
  return (
    <section className="py-20">
      <div className="container-custom mx-auto px-6 md:px-24">
        {servicesData.map((service, index) => (
          <div key={service.id}>
            <ContentInfo
              title={service.title}
              description={service.description}
              image={service.image}
              isReversed={index % 2 !== 0}
            />

            {index !== servicesData.length - 1 && <div className="my-20" />}
          </div>
        ))}
      </div>
    </section>
  );
};
