import React from "react";

const BreadCrumbs = ({ categories }) => {
  return (
    <section className="breadcrum-list">
      {categories.map((category) => (
        <span key={category.id} className="breadcrumb-item">
          {category.name}
        </span>
      ))}
    </section>
  );
};

export default BreadCrumbs;
