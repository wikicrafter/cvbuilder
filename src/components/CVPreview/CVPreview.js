import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";

//react-to-print package prints only class components

class CVPreview extends Component {
  render() {
    const { cv } = this.props;

    return (
      <CVPreviewWrapper>
        <Header personalInfo={cv.personalInfo} />
        <Content
          personalInfo={cv.personalInfo}
          experience={cv.experience}
          education={cv.education}
          projects={cv.projects}
        />
        <Sidebar personalInfo={cv.personalInfo} />
      </CVPreviewWrapper>
    );
  }
}

export default CVPreview;

const CVPreviewWrapper = styled.div`
  width: 210mm;
  min-height: 297mm;
  position: sticky;
  top: 10px;
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  grid-template-rows: 35mm 262mm;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  box-sizing: border-box;

  /* Ensure all children use border-box */
  * {
    box-sizing: border-box;
  }

  @media print {
    width: 210mm;
    min-height: 297mm;
    box-shadow: none;
    page-break-after: always;
  }
`;
