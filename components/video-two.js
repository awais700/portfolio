import React, { useState } from "react";
import { VideoTwoData } from "@/data";
import SectionTitle from "@/components/section-title";
import "react-modal-video/css/modal-video.min.css";
import { Col, Container, Row } from "react-bootstrap";

const VideoTwo = () => {
  const [isOpen, setOpen] = useState(false);
  const { sectionContent, video } = VideoTwoData;
  return (
    <>
      <section className="commonSection what_wedo pb-0 border-bottom-0">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <SectionTitle data={sectionContent} />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="videoWrap mb-0">
                <img src={video.image} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default VideoTwo;
