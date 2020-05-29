import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Offer = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { name: { regex: "/offer/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(quality: 100, maxWidth: 400) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  );

  console.log(allFile.edges); // this is the array of nodes

  return <h1>Offer</h1>;
};

export default Offer;
